import { Type } from "../../redux/types";
import axios from 'axios';
import setAuthInterceptor from '../util/interceptors/setAuhInterceptor';
import store from '../../redux/store'

export const signIn = (userData, history) => dispatch => {
    const errors = validateData(userData);

    if (Object.keys(errors).length > 0) {
        dispatch({
            type: Type.SET_ERROR,
            payload: errors
        })
    } else {
        axios.post('http://localhost:4200/api/user/', userData)
            .then(res => {
                console.log('user', res.data)
                storeUserData(res.data, dispatch);
                setLoginTimer(history);
            })
            .catch(err => {
                console.log('error', err.response.data)
                dispatch({
                    type: Type.SET_SERVER_ERROR,
                    payload: err.response.data
                })
            })
    }
}

export const logoutUser = (history) => dispatch => {
    dispatch({
        type: Type.LOGOUT_CURRENT_USER
    });
    localStorage.removeItem('jwt');
    localStorage.removeItem('userData');
    localStorage.removeItem('product');
    localStorage.removeItem('cart');

    dispatch({
        type:Type.CLEAR_CART
    })
    dispatch({
        type:Type.LOGOUT_CURRENT_USER
    })
    
    history.push('/')
}

const setLoginTimer = (history) => {
    console.log('setLoginTimer')
    setTimeout(() => {
        logoutUser(history);
    }, 3600)
}

const storeUserData = (userData, dispatch) => {    
    dispatch({
        type: Type.SET_CURRENT_USER,
        payload: userData
    })

    localStorage.setItem('jwt', JSON.stringify(userData.token));
    localStorage.setItem('userData', JSON.stringify(userData));
    setAuthInterceptor(userData.token);
}

export const restoreUser = (dispatch) => {
    let userData = JSON.parse(localStorage.getItem('userData'));

    if(userData) {
        storeUserData(userData, dispatch);   
    }    
}

const validateData = (userData) => {
    const errors = {};

    if (!userData.name) {
        errors.name = 'Please enter your name'
    }

    if (!userData.email) {
        errors.email = 'Please enter your email'
    }

    if (!userData.password) {
        errors.password = 'Please enter your password'
    }

    if (!userData.name) {
        errors.name = 'Please enter your name'
    }

    return errors;
}