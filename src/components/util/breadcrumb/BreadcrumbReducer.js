import { Type } from "../../../redux/types";

const initialState = {
    breadcrumbs: [
                
    ]
}

export const BreadcrumbReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.SET_BREADCRUMBS:            
            return {
                ...state,
                breadcrumbs: action.payload.breadcrumbs,
                source: action.payload.source
            }

        case Type.REMOVE_BREADCRUMB:
            return {
                ...state,
                breadcrumbs: [...state.breadcrumbs.filter(bc => bc.label !== action.payload.label)]
            }
        default:
            return state;
    }

}