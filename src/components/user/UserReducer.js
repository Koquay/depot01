import { Type } from "../../redux/types"

const initialState = {
    user: {},
    isLoggedIn: false
}

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.SET_CURRENT_USER:
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true
            }

        case Type.LOGOUT_CURRENT_USER:
            return {
                ...state,
                user: {},
                isLoggedIn: false
            }
        default:
            return state;
    }
}