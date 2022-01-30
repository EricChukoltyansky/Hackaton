module.exports = Object.freeze({
    ROUTES_API_PREFIX: '/api/v1',
    ROUTES_SERVER_PREFIX: '/api/v1',
    URL_BASE: [
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
            url: 'https://www.baby-names.co.il/category/%d7%9b%d7%9c-%d7%94%d7%a9%d7%9e%d7%95%d7%aa/',
            linkSelector: 'ul.name_list > li > a',
            options: {
                nextPageSelector:
                    'div.pagination-wrap.pagination-slider > nav > a.next_page',
                nextPageLimit: 22,
            },
        },
    ],
});
