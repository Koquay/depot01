import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCart } from "../cart/CartActions";
import './Checkout.css'
import { placeOrder } from "../order/OrderActions";
import MessageModal from '../util/message/MessageModal';
import TextField from "../form-controls/TextField";
import SelectList from '../form-controls/SelectList';
import Checkbox from '../form-controls/Checkbox';
import TextArea from '../form-controls/TextArea';
import RadioButton from '../form-controls/RadioButton';
import InputGroup from '../form-controls/InputGroup';

class Checkout extends Component {
    state = {
        cartItems: [],

        // firstName: '',
        // lastName: '',
        // email: '',
        // phone: '',
        // shippingAddress: '',
        // address2: '',
        // zipCode: '',
        // cityState: '',
        // useAsBillingAddress: true,
        // deliveryDate: '',
        // specialInstruction: '',
        // paymentType: 'CreditCard',
        // cardNumber: '',
        // expMonth: '',
        // expyear: '',
        // cw: '',

        firstName: 'John',
        lastName: 'Admin',
        email: 'John@John.com',
        phone: '905 454 8989',
        shippingAddress: '40 Angular Place',
        zipCode: '12345',
        cityState: 'Maynard, MA',
        useAsBillingAddress: true,
        deliveryDate: new Date(),
        specialInstruction: 'Leave package in driveway Leave package in driveway Leave package in driveway Leave package in driveway Leave package in driveway Leave package in driveway ',
        paymentType: "Credit Card",
        cardNumber: "1234567888890",
        expMonth: "01-January",
        expYear: "2020",
        cw: "456",
    }

    async componentDidMount() {
        await this.props.getCart();
        const { cartItems } = this.props.cart;
        this.setState({ cartItems: cartItems }, () => console.log('state', this.state))
    }

    componentWillUnmount() {
        let checkoutUserData = this.state;
        delete checkoutUserData.cartItems;
        console.log('checkoutUserData', checkoutUserData)
        localStorage.setItem('checkoutUserData', JSON.stringify(checkoutUserData));
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value }, () => {
            console.log('state', this.state)
        })
    }

    onCheck = (e) => {
        this.setState({
            useAsBillingAddress: !this.state.useAsBillingAddress
        }, () => {
            console.log('state', this.state)
        })
    }

    placeOrder = () => {
        const orderData = { ...this.state };
        this.props.placeOrder(orderData)
    }


    render() {
        const { citiesStates, expMonths, expYears } = this.props.checkout;
        const { cartItems, summary } = this.props.cart;
        const { orderValidationErrors } = this.props.messages;

        const checkoutUserData = JSON.parse(localStorage.getItem('checkoutUserData'));
        console.log('checkout data', checkoutUserData)

        const citiesStatesOptions = (
            citiesStates.map(cityState => (
                <option
                    key={cityState.city}
                    value={cityState.city.concat(', ').concat(cityState.state)}
                >
                    {cityState.city.concat(', ').concat(cityState.state)}</option>
            ))
        )

        const expMonthOptions = (
            expMonths.map(month => (
                <option key={month.month} value={month.month}>{month.month}</option>
            ))

        )

        const expYearOptions = (
            expYears.map(year => (
                <option key={year.year} value={year.year}>{year.year}</option>
            ))

        )

        return (

            <div className="container-fluid bg-eee px-cust-5">
                <MessageModal />
                <div className="row">
                    <div className="col-12 bg-white col-md-7 col-xl-8 order-1 order-md-0" id="left-col">
                        <section id="header-section">
                            <div className="row d-none d-md-block">
                                <div className="col d-md-flex d-xl-flex align-items-md-center align-items-xl-center">
                                    <img alt="blank" className="img-fluid" src="assets/img/hdlogo.jpg" style={{ width: "4rem" }} /><span id="page-header" className="ml-1">Secure Checkout</span></div>
                            </div>
                        </section>
                        <form>
                            <section id="delivery-section">
                                <div className="form-row mt-4">
                                    <div className="col"><span className="section-header">Delivery</span></div>
                                </div>
                                <div className="form-row mt-4">
                                    <div className="col-12 col-md-6">
                                        <TextField
                                            name="firstName"
                                            label={'First Name'}
                                            value=
                                            {
                                                this.state.firstName ? this.state.firstName :
                                                    checkoutUserData ? checkoutUserData.firstName : null
                                            }
                                            onChange={this.onChange}
                                            error={orderValidationErrors ? orderValidationErrors.firstName : null}
                                        />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <TextField
                                            name="lastName"
                                            label={'Last Name'}
                                            // value={this.state.lastName ? this.state.lastName : checkoutUserData.lastName}
                                            value=
                                            {
                                                this.state.lastName ? this.state.lastName :
                                                    checkoutUserData ? checkoutUserData.lastName : null
                                            }
                                            onChange={this.onChange}
                                            error={orderValidationErrors ? orderValidationErrors.lastName : null}
                                        />
                                    </div>
                                </div>
                                <div className="form-row mt-4">
                                    <div className="col-12">
                                        <TextField
                                            name="email"
                                            label={'Email'}
                                            // value={this.state.email}
                                            value=
                                            {
                                                this.state.email ? this.state.email :
                                                    checkoutUserData ? checkoutUserData.email : null
                                            }
                                            onChange={this.onChange}
                                            error={orderValidationErrors ? orderValidationErrors.email : null}
                                        />
                                    </div>
                                </div>
                                <div className="form-row mt-4">
                                    <div className="col-12">
                                        <TextField
                                            name="phone"
                                            label={'Phone'}
                                            // value={this.state.phone}
                                            value=
                                            {
                                                this.state.phone ? this.state.phone :
                                                    checkoutUserData ? checkoutUserData.phone : null
                                            }
                                            onChange={this.onChange}
                                            error={orderValidationErrors ? orderValidationErrors.phone : null}
                                        />
                                    </div>
                                </div>
                                <div className="form-row mt-4">
                                    <div className="col-12">
                                        <TextField
                                            name="shippingAddress"
                                            label={'Shipping Address'}
                                            // value={this.state.shippingAddress}
                                            value=
                                            {
                                                this.state.shippingAddress ? this.state.shippingAddress :
                                                    checkoutUserData ? checkoutUserData.shippingAddress : null
                                            }
                                            onChange={this.onChange}
                                            error={orderValidationErrors ? orderValidationErrors.shippingAddress : null}
                                        />
                                    </div>
                                </div>
                                <div className="form-row mt-4">
                                    <div className="col-12">
                                        <TextField
                                            name="address2"
                                            label={'Address 2'}
                                            // value={this.state.address2}
                                            value=
                                            {
                                                this.state.address2 ? this.state.address2 :
                                                    checkoutUserData ? checkoutUserData.address2 : null
                                            }
                                            onChange={this.onChange}
                                        />
                                    </div>

                                </div>
                                <div className="form-row mt-4">
                                    <div className="col-12 col-md-6">
                                        <TextField
                                            name="zipCode"
                                            label={'Zip Code'}
                                            // value={this.state.zipCode}
                                            value=
                                            {
                                                this.state.zipCode ? this.state.zipCode :
                                                    checkoutUserData ? checkoutUserData.zipCode : null
                                            }
                                            onChange={this.onChange}
                                            error={orderValidationErrors ? orderValidationErrors.zipCode : null}
                                            minLength="5"
                                            maxLength="5"
                                        />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <SelectList
                                            name="cityState"
                                            onChange={this.onChange}
                                            // value={this.state.cityState}
                                            value=
                                            {
                                                this.state.cityState ? this.state.cityState :
                                                    checkoutUserData ? checkoutUserData.cityState : null
                                            }
                                            options={citiesStatesOptions}
                                            label='City, State'
                                            error={orderValidationErrors ? orderValidationErrors.cityState : null}
                                        />
                                    </div>
                                </div>
                                <div className="form-row mt-4">
                                    <div className="col-12">
                                        <Checkbox
                                            className="form-check-input"
                                            type="checkbox"
                                            id="formCheck-1"
                                            name="useAsBillingAddress"
                                            // value={this.state.useAsBillingAddress}
                                            value=
                                            {
                                                this.state.useAsBillingAddress ? this.state.useAsBillingAddress :
                                                    checkoutUserData ? checkoutUserData.useAsBillingAddress : null
                                            }
                                            checked={this.state.useAsBillingAddress}
                                            onChange={this.onCheck}
                                            label="Use as Billing Address"
                                        />
                                    </div>
                                </div>
                                <div className="form-row mt-4">
                                    <div className="col-12">
                                        <h5>Let's nail down your appliance delivery.</h5>
                                    </div>
                                </div>
                                <div className="form-row mt-4">
                                    <div className="col-3 col-lg-2">
                                        <img alt="blank" className="img-fluid d-block" src="assets/img/pip-icons-delivery-truck.png" />
                                        <span className="mr-1">{cartItems.length}</span>
                                        <span>Items</span>
                                    </div>
                                    <div className="col col-md-6">
                                        <h6 className="font-weight-bold">Earliest Available Date</h6>
                                        <TextField
                                            name="deliveryDate"
                                            type="date"
                                            // value={this.state.deliveryDate}
                                            value=
                                            {
                                                this.state.deliveryDate ? this.state.deliveryDate :
                                                    checkoutUserData ? checkoutUserData.deliveryDate : null
                                            }
                                            onChange={this.onChange}
                                            error={orderValidationErrors ? orderValidationErrors.deliveryDate : null}
                                        />
                                    </div>
                                </div>
                                <div className="form-row mt-4">
                                    <div className="col offset-xl-2">
                                        <span>We'll call the business day before with your projected 4-hour delivery window.</span>
                                        <TextArea
                                            name="specialInstruction"
                                            onChange={this.onChange}
                                            // value={this.state.specialInstruction}
                                            value=
                                            {
                                                this.state.specialInstruction ? this.state.specialInstruction :
                                                    checkoutUserData ? checkoutUserData.specialInstruction : null
                                            }
                                            label="Any details that might help us? (Optional)"
                                            info="We'll call the business day before with your projected 4-hour delivery window."
                                        />
                                    </div>
                                </div>
                            </section>
                            <section id="payment-section">
                                <div className="form-row mt-4">
                                    <div className="col"><span className="section-header">Payment</span></div>
                                </div>
                                <div className="form-row mt-2">
                                    <div className="col">
                                        <RadioButton
                                            id="formCheck-2"
                                            name="paymentType"
                                            value="PayPal"
                                            checked={
                                                this.state.paymentType ? this.state.paymentType === 'PayPal' :
                                                checkoutUserData ? checkoutUserData.paymentType === 'PayPal' :
                                                null
                                            }
                                            onChange={this.onChange}
                                            image="assets/img/paypal.png"
                                            width="5rem"
                                        />

                                        <RadioButton
                                            id="formCheck-3"
                                            name="paymentType"
                                            value="CreditCard"
                                            // checked={this.state.paymentType === 'CreditCard'}
                                            checked={
                                                this.state.paymentType ? this.state.paymentType === 'CreditCard' :
                                                checkoutUserData ? checkoutUserData.paymentType === 'CreditCard' :
                                                null
                                            }
                                            onChange={this.onChange}
                                            label="Credit Card"
                                        />

                                        <InputGroup
                                            className="form-control"
                                            type="text"
                                            placeholder="Enter credit card number"
                                            // value={this.state.cardNumber}
                                            value=
                                            {
                                                this.state.cardNumber ? this.state.cardNumber :
                                                    checkoutUserData ? checkoutUserData.cardNumber : null
                                            }
                                            name="cardNumber"
                                            onChange={this.onChange}
                                            icon="fa fa-credit-card-alt"
                                            error={orderValidationErrors ? orderValidationErrors.cardNumber : null}
                                        />
                                    </div>
                                </div>
                                <div className="form-row mt-4">
                                    <div className="col">
                                        <SelectList
                                            name="expMonth"
                                            onChange={this.onChange}
                                            // value={this.state.expMonth}
                                            value=
                                            {
                                                this.state.expMonth ? this.state.expMonth :
                                                    checkoutUserData ? checkoutUserData.expMonth : null
                                            }
                                            options={expMonthOptions}
                                            label='Exp. Month'
                                            error={orderValidationErrors ? orderValidationErrors.expMonth : null}
                                        />
                                    </div>
                                    <div className="col">

                                        <SelectList
                                            name="expYear"
                                            onChange={this.onChange}
                                            // value={this.state.expYear}
                                            value=
                                            {
                                                this.state.expYear ? this.state.expYear :
                                                    checkoutUserData ? checkoutUserData.expYear : null
                                            }
                                            options={expYearOptions}
                                            label='Exp. Year'
                                            error={orderValidationErrors ? orderValidationErrors.expYear : null}
                                        />
                                    </div>
                                    <div className="col">
                                        <InputGroup
                                            // value={this.state.cw}
                                            value=
                                            {
                                                this.state.cw ? this.state.cw :
                                                    checkoutUserData ? checkoutUserData.cw : null
                                            }
                                            name="cw"
                                            label="CW"
                                            onChange={this.onChange}
                                            icon="fa fa-credit-card-alt"
                                            minLength="3"
                                            maxLength="3"
                                            error={orderValidationErrors ? orderValidationErrors.cw : null}
                                        />
                                    </div>
                                </div>
                                <div className="form-row mt-5">
                                    <div className="col">
                                        <button className="btn btn-primary button" id="btn-place-order" type="button"
                                            onClick={this.placeOrder}>
                                            Place Order
                                        </button>
                                    </div>
                                </div>
                            </section>
                        </form>
                    </div>
                    <div className="col" id="right-col">
                        <div className="row d-md-none">
                            <div className="col bg-white right-inner-col">
                                <img alt="blank" className="img-fluid" src="assets/img/hdlogo.jpg" style={{ width: "4rem" }} /><span id="page-header" className="ml-1">Secure Checkout</span></div>
                        </div>
                        <div className="row">
                            <div className="col bg-white right-inner-col">
                                <div className="row d-flex justify-content-between align-items-center">
                                    <div className="col-7 d-xl-flex align-items-xl-center">
                                        <span className="f-1pt5">
                                            <span className="mr-1">Your Order</span>
                                            <span className="font-weight-bold d-block d-lg-inline-block">
                                                ${summary.subtotal.toFixed(2)}
                                            </span>
                                        </span>
                                    </div>
                                    <div className="col-5 d-flex justify-content-end">
                                        <Link className="c-blue" to="/cart">
                                            <span>Edit Cart (</span>
                                            <span>{cartItems.length}</span>
                                            <span>)</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col bg-white right-inner-col">
                                <div className="row">
                                    <div className="col d-flex align-items-center">
                                        <img alt="blank" className="img-fluid"
                                            src="assets/img/pip-icons-nstallation.png" />
                                        <span className="ml-2 font-weight-bold">Appliance Delivery</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <hr />
                                    </div>
                                </div>
                                {cartItems.map(item => (
                                    <div key={item.product._id} className="row">
                                        <div className="col-3">
                                            <img alt="blank" className="img-fluid" src={"assets/img/" + item.product.image[0]} />
                                        </div>
                                        <div className="col">
                                            <div className="row">
                                                <div className="col">
                                                    <span className="mr-1 font-weight-bold">{item.product.brand}</span>
                                                    <span>{item.product.name}</span>
                                                </div>
                                            </div>
                                            <div className="row mt-1">
                                                <div className="col">
                                                    <span className="mr-1">Qty:</span>
                                                    <span>{item.quantity}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <span className="m-ln-1">{(item.product.price * item.quantity).toFixed(2)}</span>
                                        </div>
                                        <div className="col-12">
                                            <hr />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col bg-white right-inner-col">
                                <div className="row font-weight-bold">
                                    <div className="col"><span>Subtotal</span></div>
                                    <div className="col text-right">
                                        <span>${summary.subtotal.toFixed(2)}</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <span>Sales Tax</span>
                                    </div>
                                    <div className="col text-right">
                                        <span>${summary.tax.toFixed(2)}</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <span>Discount</span>
                                    </div>
                                    <div className="col text-right">
                                        <span>(${summary.discount.toFixed(2)})</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col"><span>Appliance Delivery&nbsp;&nbsp;</span></div>
                                    <div className="col text-right"><span>FREE</span></div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <hr />
                                    </div>
                                </div>
                                <div className="row font-weight-bold f-1pt3">
                                    <div className="col">
                                        <span>Total</span>
                                    </div>
                                    <div className="col text-right">
                                        <span>${summary.total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    checkout: state.checkout,
    cart: state.cart,
    messages: state.messages
})

export default connect(mapStateToProps, { getCart, placeOrder })(Checkout);