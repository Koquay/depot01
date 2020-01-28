const initialState = {
    navItems: [
        { label: 'All Departments', link: '/appliances' },
        { label: 'Home Decor & Furniture', link: '/' },
        { label: 'DIY Projects & Ideas', link: '/' },
        { label: 'Installation & Services', link: '/' },
        { label: 'Specials & Offers', link: '/' },
        { label: 'Local Ad', link: '/' },

    ],

    searchItems: [
        "Amana",
        "Whirlpool",
        "Samsung",
        "Maytag",
        "Hotpoint",
        "Frigidaire",
        "LG",
        "GE",
        "KitchenAid",
        "Bosch"
    ],
    marqueeContents: [
        'FREE 2-DAY DELIVERY', 
        'BUY 1 GET 1 FREE',
        'SEE OUR UPCOMING SALES',
        'TODAY\'S SALES',
        'PREMIUM CUSTOMER SIGN UP',
        
    ]
}

export const HeaderReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}