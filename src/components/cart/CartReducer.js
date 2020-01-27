import { Type } from "../../redux/types";
import { removeTypeDuplicates } from "@babel/types";

const initialState = {
    cartItems: [],
    summary: {
        subtotal: 0,
        tax: 0,
        discount: 0,
        total: 0,
    }
}

export const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.ADD_TO_CART:
            console.log('add to cart', action.payload)
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        case Type.RESTORE_CART:            
            return {
                ...state,
                ...action.payload
            }
        case Type.GET_CART:
            let newSummary = JSON.parse(JSON.stringify(state.summary))
            newSummary.subtotal = state.cartItems.reduce((sum, item) => {
                return sum + item.product.price * item.quantity;
            }, 0);
            newSummary.discount = newSummary.subtotal * .25;
            newSummary.tax = newSummary.subtotal * .10;
            newSummary.total = newSummary.subtotal - newSummary.discount + newSummary.tax;
            return {
                ...state,
                summary: newSummary
            }

        case Type.REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.product._id !== action.payload)
            }
        case Type.CLEAR_CART:
            return { ...initialState }
        default:
            return state;
    }
}