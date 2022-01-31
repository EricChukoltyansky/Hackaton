module.exports = Object.freeze({
    ROUTES_API_PREFIX: '/api/v1',
    SCRAPING_LIST: [
        {
            url: 'https://www.baby-names.co.il/category/%d7%9b%d7%9c-%d7%94%d7%a9%d7%9e%d7%95%d7%aa/',
            linkSelector: 'ul.name_list > li > a',
            options: {
                nextPageSelector:
                    'div.pagination-wrap.pagination-slider > nav > a.next_page',
                nextPageLimit: 15,
            },
        },
        {
            url: 'https://www.itim.org.il/%D7%9E%D7%90%D7%92%D7%A8-%D7%94%D7%A9%D7%9E%D7%95%D7%AA/',
            // linkSelector: '#progs > ul > li > div > ul > li > a',
            linkSelector:
                '#page-content > div > section.names-results > div > ul > li > a',
            options: {
                linkSuffix: '?letter=',
                suffixList: [
                    'א',
                    'ב',
                    'ג',
                    'ד',
                    'ה',
                    'ו',
                    'ז',
                    'ח',
                    'ט',
                    'י',
                    'כ',
                    'ל',
                    'מ',
                    'נ',
                    'ס',
                    'ע',
                    'פ',
                    'צ',
                    'ק',
                    'ר',
                    'ש',
                    'ת',
                ],
            },
        },
        {
            url: 'https://www.mako.co.il/ninemonth-baby_names/boy_names?partner=NamesLobby&Partner=blockscomp',
            linkSelector: '#progs > ul > li > div > ul > li > a',
            options: {},
        },
        {
            url: 'https://www.mako.co.il/ninemonth-baby_names/girl_names?partner=NamesLobby&Partner=blockscomp',
            linkSelector: '#progs > ul > li > div > ul > li > a',
            options: {},
        },
    ],
    SCRAPING_LIST_READY_LINKS: [
        {
            linkName: 'arabic-names',
            linkUrl: 'https://rothfarb.info/ronen/arabic/lists.asp?id=13',
        },
        {
            linkName: 'ethiopian-names',
            linkUrl:
                'https://little-ethio.com/%D7%A9%D7%9E%D7%95%D7%AA-%D7%A4%D7%A8%D7%98%D7%99%D7%99%D7%9D-%D7%9E%D7%A1%D7%95%D7%A8%D7%AA%D7%99%D7%99%D7%9D-%D7%91%D7%A7%D7%A8%D7%91-%D7%99%D7%95%D7%A6%D7%90%D7%99-%D7%90%D7%AA%D7%99%D7%95%D7%A4/',
        },
    ],
    MALE_KEYWORDS: ['זכר'],
    FEMALE_KEYWORDS: ['נקבה'],
    ARABIC_MALE_NAME_INDICES: [
        1, 2, 3, 4, 5, 9, 10, 11, 12, 13, 14, 15, 16, 17, 21, 23, 24, 25, 32,
        34, 37, 38,
    ],
});
