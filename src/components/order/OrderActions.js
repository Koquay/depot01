import { Type } from "../../redux/types";
import axios from 'axios';

export const placeOrder = (orderData) => dispatch => {
    dispatch({
        type: Type.GET_CART
    })
    console.log('orderData', orderData)

    const errors = validate(orderData);

    if (Object.keys(errors).length > 0) {
        console.log('errors', errors)
        dispatch({
            type: Type.ORDER_VALIDATION_ERROR,
            payload: errors
        })
    } else {
        const order = createOrder(orderData);

        // axios.post('http://localhost:4200/api/order', order)
        axios.post('/api/order', order)        
        .then(res => {
            console.log('newOrder', res.data)
            dispatch({
                type: Type.INFO_MESSAGE,   
                payload: {info: 'Your order was successfully placed.'}             
            })
        })
        .catch(err => {
            console.log('error', err.response.data)
        })
    }
}

const createOrder = (orderData) => {
    const order = {...orderTemplate};
    
    order.delivery.firstName = orderData.firstName;
    order.delivery.lastName = orderData.lastName;
    order.delivery.email = orderData.email;
    order.delivery.phone = orderData.phone;
    order.delivery.shippingAddress = orderData.shippingAddress;
    order.delivery.zipCode = orderData.zipCode;
    order.delivery.cityState = orderData.cityState;
    order.delivery.deliveryDate = orderData.deliveryDate;
    order.delivery.specialInstruction = orderData.specialInstruction;
    
    order.payment.paymentType = orderData.paymentType;
    order.payment.cardNumber = orderData.cardNumber;
    order.payment.expMonth = orderData.expMonth;
    order.payment.expYear = orderData.expYear;
    order.payment.cw = orderData.cw;    

    console.log('order', order)
    return order;
}

const validate = (data) => {
    let errors = {};

    if (!data.email) {
        errors.email = 'Email is required';
    }

    if (!data.firstName) {
        errors.firstName = 'firstName is required';
    }

    if (!data.lastName) {
        errors.lastName = 'lastName is required';
    }

    if (!data.shippingAddress) {
        errors.shippingAddress = 'shippingAddress is required';
    }

    if (!data.zipCode) {
        errors.zipCode = 'zipCode is required';
    }

    if (!data.phone) {
        errors.phone = 'phone is required';
    }

    if (!data.cityState) {
        errors.cityState = 'cityState is required';
    }

    if (!data.deliveryDate) {
        errors.deliveryDate = 'deliveryDate is required';
    }

    if (!data.paymentType) {
        errors.paymentType = 'paymentType is required';
    }
    if (!data.cardNumber) {
        errors.cardNumber = 'cardNumber is required';
    }

    if (!data.expMonth) {
        errors.expMonth = 'expMonth is required';
    }

    if (!data.expYear) {
        errors.expYear = 'expYear is required';
    }

    if (!data.cw) {
        errors.cw = 'cw is required';
    }

    return errors;
}

const orderTemplate = {    
    delivery: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        shippingAddress: '',
        address2: '',
        zipCode: '',
        cityState: '',
        useAsBillingAddress: true,
        deliveryDate: '',
        specialInstruction: '',
    },

    payment: {
        paymentType: '',
        cardNumber: '',
        expMonth: '',
        expyear: '',
        cw: '',
    },

    items: [],
}