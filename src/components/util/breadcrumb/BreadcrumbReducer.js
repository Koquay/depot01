
const initialState = {
    breadCrumps: [
        {label: 'Home', url: '/home'}
    ]
}

export const BreadcrumbReducer = (state=initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
     
}