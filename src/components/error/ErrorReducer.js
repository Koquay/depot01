import { Type } from "../../redux/types"

const initialState = {
    errors: {},
    serverError: {},
    
}

export const ErrorReducer = (state = initialState, action) => {
    switch (action.type) {
        // case Type.SET_ERROR:
        //     return {
        //         ...state,
        //         errors: action.payload
        //     }
        //     case Type.SET_SERVER_ERROR:
        //         return {
        //             ...state,
        //             serverError: action.payload
        //         }            
        // case Type.CLEAR_ERROR:
        //     return {
        //         errors: {}
        //     }

        // case Type.ORDER_VALIDATION_ERROR:
        //     return {
        //         ...state,
        //         orderValidationErrors: action.payload
        //     }
        default:
            return state;
    }
}