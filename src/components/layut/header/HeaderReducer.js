const initialState = {
    navItems: [
        {label: 'All Departments', link:'/appliances'},
        {label: 'Home Decor & Furniture', link:'/'},
        {label: 'DIY Projects & Ideas', link:'/'},
        {label: 'Installation & Services', link:'/'},
        {label: 'Specials & Offers', link:'/'},
        {label: 'Local Ad', link:'/'},
        
    ]
}

export const HeaderReducer = (state=initialState, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}