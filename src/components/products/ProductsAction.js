import { Type } from "../../redux/types"

export const getProduct = (id) => dispatch => {
    console.log('id', id)
    dispatch({
        type: Type.GET_PRODUCT,
        payload: id
    })
}