const puppeteer = require('puppeteer');
const { SCRAPING_LIST } = require('./constants');
const NameUrlLinks = require('../models/name-url-link.model');
const { options } = require('../app');
// const numericRegExp = new RegExp(/\d+/);

async function getNamesAndDescriptions(url, nameSelector, descriptionSelector) {
    // const browser = await puppeteer.launch({ headless: false });
    const browser = await puppeteer.launch();
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

async function hasNextPage(page, nextPageSelector) {
    let nextPageExists = false;
    try {
        nextPageExists = (await page.$(nextPageSelector)) !== null;
    } catch (e) {
        console.log('Error in hasNextPage', e.message);
        nextPageExists = false;
    }

    return nextPageExists;
}

async function scrapeLinks(url, linkSelector, options = {}) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Instructs the blank page to navigate a URL
    await page.goto(url);

    // Waits until the `title` meta element is rendered
    await page.waitForSelector(linkSelector); //indicates the page has loaded
    console.log('Page loaded', url);

    const { nextPageSelector, isInfiniteScroll } = options;

    const links = [];
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

    await browser.close();
    return links;
}

async function scrapeName(nameUrl) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Instructs the blank page to navigate a URL
    await page.goto(recipeLinks[0]);
    console.log('Page loaded', recipeLinks[0]);

    // Waits until the `title` meta element is rendered
    await page.waitForSelector('title'); //indicates the page has loaded

    const recipeName = await page.$eval('h1', (elem) => elem.textContent);
    const ingredients = await page.$$eval(
        'ul.list-group li:not([class*="sub-title"])',
        (elems) => {
            return elems.map((elem) => elem.textContent);
        }
    );
    console.log(recipeName);
    console.log(ingredients);

    const steps = await page.$$eval('ul.howto-list li', (elems) => {
        return elems.map((elem) => elem.textContent);
    });
    const prepTime = await page.$eval(
        'ul.recipe-basic-details > li:nth-child(3)',
        (elem) => elem.textContent
    );

    await browser.close();

    return {
        recipeName,
        ingredients,
        steps,
        prepTime,
    };
}

async function runScraper() {
    for (const scrapingSource of SCRAPING_LIST) {
        const nameLinks = [];
        const {
            url,
            linkSelector,
            options,
            options: { linkSuffix, suffixList },
        } = scrapingSource;
        console.log('Scraping', url);
        // console.log(linkSelector, linkSuffix, suffixList, options);
        if (linkSuffix) {
            for (const suffix of suffixList) {
                // console.log(`Scraping ${url + linkSuffix + suffix}`);
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
        // console.log(nameLinks);
    }
}

// runScraper();

module.exports = { runScraper };
