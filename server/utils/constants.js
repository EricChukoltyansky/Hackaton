module.exports = Object.freeze({
    ROUTES_API_PREFIX: '/api/v1',
    ROUTES_SERVER_PREFIX: '/api/v1',
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
});

// const names = [
//     {
//         name: 'אייל',
//         origin: 'תנ"ך / עולם החי',
//         meaning: `מקור השם אייל (כשהוא נהגה Ayal) הוא בעל חיים ממשפחת היונקים מעלי הגרה ומסדרת מכפילי הפרסה. האייל כולל 16 סוגים ו-36 מינים והינו בעל קרניים בעזרתם הוא נלחם בזכרים האחרים כדי להשיג את הנקבה בשבט. האייל מוזכר גם בספר התהילים: "כאייל תערוג על אפיקי מים".יות מחולקות בעולם`,
//         genderMale: true,
//         genderFemale: false,
//         englishSpelling: 'Ayal',
//     },
//     {
//         name: 'אלכסנדר ',
//         origin: 'השפה היוונית',
//         meaning: `מקור השם אלכסנדר הוא בשפה היוונית, בה הפירוש שלו מגן האדם. השם אלכסנדר מוכר כשמו של אלכסנדר הגדול (אלכסנדר מוקדון) שהיה נחשב לגבר חזק, מרשים ובעל יכולות אתלטיות גבוהות.`,
//         genderMale: true,
//         genderFemale: false,
//         englishSpelling: 'Alexander',
//     },
//     {
//         name: 'אווה ',
//         origin: 'השפה הלטינית ',
//         meaning: `השם אווה מגיע מהשפה הלטינית ולרוב משמש ככינוי לועזי לשם חווה - שהייתה אם כל חי, האישה הראשונה בעולם.`,
//         genderMale: false,
//         genderFemale: true,
//         englishSpelling: 'Eva',
//     },
// ];
