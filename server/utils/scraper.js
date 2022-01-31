const puppeteer = require('puppeteer');
const {
    SCRAPING_LIST,
    MALE_KEYWORDS,
    FEMALE_KEYWORDS,
    SCRAPING_LIST_READY_LINKS,
} = require('./constants');
const NameUrlLinks = require('../models/name-url-link.model');
const Name = require('../models/name.model');

async function getNamesAndDescriptions(url, nameSelector, descriptionSelector) {
    // const browser = await puppeteer.launch({ headless: false });
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    // Instructs the blank page to navigate a URL
    await page.goto(url);
    // Waits until the `title` meta element is rendered
    await page.waitForSelector('title'); //indicates the page has loaded
    // const selector = '.d3-o-table > tbody > tr ';
    const names = await page.$$eval(nameSelector, (elems) =>
        elems.map((elem) => elem.textContent)
    );
    const descriptions = await page.$$eval(descriptionSelector, (elems) =>
        elems.map((elem) => elem.textContent)
    );
    const superstitions = names.map((name, index) => ({
        name: name.toLocaleLowerCase('he'),
        description: descriptions[index],
    }));
    console.log(superstitions);
    await browser.close();
}

async function getLinkHrefs(page, linkSelector) {
    await page.waitForSelector(linkSelector, { timeout: 5000 });
    return page.$$eval(linkSelector, (elems) => elems.map((elem) => elem.href));
}

async function infiniteScrollToBottom(page) {
    let hasScroll = true;
    let scrollCount = 0;
    let previousHeight;
    while (hasScroll) {
        try {
            scrollCount++;
            console.log('Scrolling...', scrollCount);
            previousHeight = await page.evaluate('document.body.scrollHeight');
            await page.evaluate(
                'window.scrollBy(0, document.body.scrollHeight)'
            );
            await page.waitForFunction(
                `document.body.scrollHeight > ${previousHeight}`,
                { timeout: 5000 }
            );
            await page.waitForTimeout(1000);
        } catch (e) {
            console.error('Error in infinite scroll', e.message);
            hasScroll = false;
        }
    }
}

async function hasSelector(page, selector) {
    let selectorExists = false;
    try {
        selectorExists = (await page.$(selector)) !== null;
    } catch (e) {
        console.log('Error in hasSelector', e.message);
        selectorExists = false;
    }
    return selectorExists;
}

async function hasNextPage(page, nextPageSelector) {
    return hasSelector(page, nextPageSelector);
}

async function scrapeLinks(url, linkSelector, options = {}) {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const links = [];
    try {
        const page = await browser.newPage();
        // Instructs the blank page to navigate a URL
        await page.goto(url);
        // Waits until the `title` meta element is rendered
        await page.waitForSelector(linkSelector); //indicates the page has loaded
        console.log('Page loaded', url);
        const { nextPageSelector, isInfiniteScroll } = options;
        let pageLinks = [];
        if (nextPageSelector) {
            let goToNext = true;
            let pageCount = 1;
            while (goToNext) {
                console.log('paging# ', pageCount++);
                pageLinks = await getLinkHrefs(page, linkSelector);
                links.push(...pageLinks);
                goToNext = await hasNextPage(page, nextPageSelector);
                if (goToNext) {
                    await page.click(nextPageSelector);
                }
            }
        } else {
            if (isInfiniteScroll) {
                await infiniteScrollToBottom(page);
            }
            pageLinks = await getLinkHrefs(page, linkSelector);
            links.push(...pageLinks);
        }
        // console.log(links);
        console.log(links.length);
    } catch (e) {
        console.error('Error in scrapeLinks', e.message);
    } finally {
        await browser.close();
    }
    return links;
}

function getStrValue(str, filter) {
    return str.replace(filter, '').trim();
}

async function scrapeBabyNamesUrl(nameUrl) {
    // console.log('scraping', nameUrl);
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    try {
        const page = await browser.newPage();
        const nameSelector = 'h1.av-special-heading-tag';
        const firstPSelector = 'div.entry-content > p:nth-child(1)';
        const secondPSelector = 'div.entry-content > p:nth-child(2)';
        const thirdPSelector = 'div.entry-content > p:nth-child(3)';
        const fourthPSelector = 'div.entry-content > p:nth-child(4)';
        const nameFilter = 'פירוש השם  ';
        const originFilter = 'מקור השם:';
        const englishSpellingFilter = 'בלועזית:';
        const meaningFilter = 'פירוש השם:';
        const genderFilter = 'מין:';
        await page.goto(nameUrl);
        console.log('Page loaded', nameUrl);
        // Waits until the `title` meta element is rendered
        await page.waitForSelector('title', { timeout: 5000 }); //indicates the page has loaded
        const name = getStrValue(
            await page.$eval(nameSelector, (elem) => elem.textContent),
            nameFilter
        );
        let originP = {},
            origin = '',
            englishSpelling = '',
            gender = '',
            meaning = '';
        const hasSecondP = await hasSelector(page, secondPSelector);
        if (hasSecondP) {
            originP = await (
                await page.$eval(secondPSelector, (elem) => elem.textContent)
            ).split('\n');
            origin = getStrValue(originP[0], originFilter);
            if (originP.length > 1) {
                englishSpelling = getStrValue(
                    originP[1],
                    englishSpellingFilter
                );
                gender = getStrValue(originP[2], genderFilter);
            } else {
                englishSpelling = getStrValue(
                    await page.$eval(
                        thirdPSelector,
                        (elem) => elem.textContent
                    ),
                    englishSpelling
                );
                gender = getStrValue(
                    await page.$eval(
                        fourthPSelector,
                        (elem) => elem.textContent
                    ),
                    genderFilter
                );
            }
            meaning = getStrValue(
                await page.$eval(firstPSelector, (elem) => elem.textContent),
                meaningFilter
            );
        } else {
            const description = (
                await page.$eval(firstPSelector, (elem) => elem.textContent)
            ).split('\n');
            meaning = getStrValue(description[0], meaningFilter);
            origin = getStrValue(description[1], originFilter);
            englishSpelling = getStrValue(
                description[2],
                englishSpellingFilter
            );
            gender = getStrValue(description[3], genderFilter);
        }
        const genderMale = MALE_KEYWORDS.some((keyword) =>
            gender.includes(keyword)
        );
        const genderFemale = FEMALE_KEYWORDS.some((keyword) =>
            gender.includes(keyword)
        );
        const meaningKeywords = meaning.split(' ');
        return {
            name,
            origin,
            meaning,
            meaningKeywords,
            genderMale,
            genderFemale,
            englishSpelling,
        };
    } catch (e) {
        console.error('Error in scrapeBabyNamesUrl', e.message);
    } finally {
        await browser.close();
    }
    return {};
}

async function scrapeArabicNamesUrl(nameUrl) {
    // console.log('scraping', nameUrl);
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    try {
        const page = await browser.newPage();
        const nameSelector = '#container div.result > div.arb.keter';
        const meaningSelector = '#container div.result > div.heb > a';
        const englishSpellingSelector = '#container div.result > div.eng';
        const arabicSpellingSelector = '#container div.result > div.arb.harm';

        await page.goto(nameUrl);
        console.log('Page loaded', nameUrl);

        await page.waitForSelector('title', { timeout: 5000 }); //indicates the page has loaded
        const names = await page.$$eval(nameSelector, (elems) =>
            elems.map((elem) => elem.textContent)
        );
        console.log(names);
        const meanings = await page.$$eval(meaningSelector, (elems) =>
            elems.map((elem) => elem.textContent)
        );
        const englishSpellings = await page.$$eval(
            englishSpellingSelector,
            (elems) => elems.map((elem) => elem.textContent)
        );
        const arabicSpellings = await page.$$eval(
            arabicSpellingSelector,
            (elems) => elems.map((elem) => elem.textContent)
        );

        const namesList = [];
        for (let i = 0; i < names.length; i++) {
            const name = names[i];
            const meaning = meanings[i];
            const englishSpelling = englishSpellings[i];
            const arabicSpelling = arabicSpellings[i];
            const meaningKeywords = meaning.split(' ');
            const genderMale = [
                1, 2, 3, 4, 5, 9, 10, 11, 12, 13, 14, 15, 16, 17, 21, 23, 24,
                25, 32, 34, 37, 38,
            ].includes(i);
            const genderFemale = !genderMale;
            namesList.push({
                name,
                origin: 'השפה הערבית',
                meaning,
                meaningKeywords,
                genderMale,
                genderFemale,
                englishSpelling,
                arabicSpelling,
            });
        }
        return namesList;
    } catch (e) {
        console.error('Error in scrapeBabyNamesUrl', e.message);
    } finally {
        await browser.close();
    }
    return [];
}

async function scrapeEthiopianNamesUrl(nameUrl) {
    // console.log('scraping', nameUrl);
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    try {
        const page = await browser.newPage();
        const nameSelector = '#container div.result > div.arb.keter';
        const meaningSelector = '#container div.result > div.heb > a';
        const englishSpellingSelector = '#container div.result > div.eng';
        const arabicSpellingSelector = '#container div.result > div.arb.harm';
        const femaleKey = 'לנקבה';
        const maleKey = 'לזכר';

        await page.goto(nameUrl);
        console.log('Page loaded', nameUrl);

        await page.waitForSelector('title', { timeout: 5000 }); //indicates the page has loaded
        const names = await page.$eval(
            nameSelector,
            (elem) => elem.textContent
        );
        const meanings = await page.$eval(
            meaningSelector,
            (elem) => elem.textContent
        );
        const englishSpellings = await page.$eval(
            englishSpellingSelector,
            (elem) => elem.textContent
        );
        const arabicSpellings = await page.$eval(
            arabicSpellingSelector,
            (elem) => elem.textContent
        );

        const namesList = [];
        for (let i = 0; i < names.length; i++) {
            const name = names[i];
            const meaning = meanings[i];
            const englishSpelling = englishSpellings[i];
            const arabicSpelling = arabicSpellings[i];
            const meaningKeywords = meaning.split(' ');
            const genderMale = [
                1, 2, 3, 4, 5, 9, 10, 11, 12, 13, 14, 15, 16, 17, 21, 23, 24,
                25, 32, 34, 37, 38,
            ].includes(i);
            const genderFemale = !genderMale;
            namesList.push({
                name,
                origin: 'השפה הערבית',
                meaning,
                meaningKeywords,
                genderMale,
                genderFemale,
                englishSpelling,
                arabicSpelling,
            });
        }
        return namesList;
    } catch (e) {
        console.error('Error in scrapeBabyNamesUrl', e.message);
    } finally {
        await browser.close();
    }
    return [];
}

async function scrapeAndSaveName(nameUrl) {
    try {
        const nameObject = await scrapeBabyNamesUrl(nameUrl);
        Name.create(nameObject, (err, __) => {
            if (err) {
                console.error('Error in saving name', err.message);
            }
        });
    } catch (e) {
        console.log('Error in scrapeAndSaveName', e.message);
    }
}

async function scrapeAndSaveNamesUrls() {
    for (const scrapingSource of SCRAPING_LIST) {
        const nameLinks = [];
        const {
            url,
            linkSelector,
            options,
            options: { linkSuffix, suffixList },
        } = scrapingSource;
        console.log('Scraping', url);
        if (linkSuffix) {
            for (const suffix of suffixList) {
                nameLinks.push(
                    ...(await scrapeLinks(
                        url + linkSuffix + suffix,
                        linkSelector,
                        options
                    ))
                );
            }
        } else {
            nameLinks.push(...(await scrapeLinks(url, linkSelector, options)));
        }
        try {
            NameUrlLinks.create(
                { sourceUrl: url, links: nameLinks },
                (err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('data saved');
                    }
                }
            );
        } catch (e) {
            console.error('Error in saving nameLinks', e.message);
        }
    }
}

async function scrapeAndSaveArabicNames() {
    const names = await scrapeArabicNamesUrl(
        SCRAPING_LIST_READY_LINKS[0].linkUrl
    );
    try {
        Name.create(names, (err) => {
            if (err) {
                console.error(err);
            }
        });
    } catch (e) {
        console.error('Error in saving name', e.message);
    }
}

async function runScraper() {
    // await scrapeAndSaveNamesUrls();
    // const nameUrlLinks = await NameUrlLinks.find();
    // for (const nameUrlLink of nameUrlLinks) {
    //     if (nameUrlLink.sourceUrl.includes('baby-names')) {
    //         for (const nameUrl of nameUrlLink.links) {
    //             await scrapeAndSaveName(nameUrl);
    //         }
    //     }
    // }
    // await scrapeAndSaveArabicNames();
}

module.exports = { runScraper };
