import { Type } from "../../../redux/types"

const initialState = {
    messages: {
        errors: {},
        serverError: {},
        orderValidationErrors: {},
        messageType: '',
        info: {}
    }
}

export const MessageReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.SET_ERROR:
            return {
                ...state.messages,
                errors: action.payload
            }
        case Type.SET_SERVER_ERROR:
            return {
                ...state.messages,
                serverError: action.payload,
                messageType: 'error'
            }
        case Type.CLEAR_ERROR:
            return {
                ...state.messages,
                errors: {}
            }

        case Type.ORDER_VALIDATION_ERROR:
            return {
                ...state.messages,
                orderValidationErrors: action.payload,
            }
        case Type.INFO_MESSAGE:
            return {
                ...state.messages,
                messageType: 'info',
                info: action.payload
            }
        default:
            return state;
    }
}