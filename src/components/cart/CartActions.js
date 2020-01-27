import { Type } from "../../redux/types";
import store from '../../redux/store'

export const addToCart = (product, quantity = 1) => dispatch => {
    dispatch({
        type: Type.ADD_TO_CART,
        payload: { product, quantity }
    })

    localStorage.setItem('product', JSON.stringify(product));
    localStorage.setItem('cart', JSON.stringify(store.getState().cart));
}

export const getCart = () => dispatch => {
    dispatch({
        type: Type.GET_CART,
    })
}

export const restoreCart = (cart) => dispatch => {
    dispatch({
        type: Type.RESTORE_CART,
        payload: cart
    })

    dispatch({
        type: Type.GET_CART,
    })
}

export const removeItem = (id) => dispatch => {
    dispatch({
        type: Type.REMOVE_ITEM,
        payload: id
    })    

    dispatch({
        type: Type.GET_CART,
    })

    localStorage.setItem('cart', JSON.stringify(store.getState().cart));
}