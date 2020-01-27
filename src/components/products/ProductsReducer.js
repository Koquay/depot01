import { Type } from "../../redux/types";

const initialState = {
    products: [],
    productCount: 0,
    product: null,
}

export const ProductsReducer = (state=initialState, action) => {
    switch(action.type) {        
        case Type.SET_PRODUCTS:
                console.log('action.payload', action.payload)
            return {
                ...state,
                products: action.payload.products,
                productCount: action.payload.productCount,                
            }
            case Type.GET_PRODUCT:
                console.log('id', action.payload)
            return {
                ...state,
                product: state.products.find(product => product._id === action.payload)      
            }
        default:
            return state;
    }
}