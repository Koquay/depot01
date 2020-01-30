import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { calcPercentSaved } from "../util/calcPercentSaved";
import { getCart, removeItem, restoreCart } from "./CartActions";
import { setBreadcrumb } from "../util/breadcrumb/BreadcrumbActions";
import './Cart.css'

class Cart extends Component {
    state = {
        breadcrumb: { label: '/ Cart ', url: '/cart' },
        
        cart: {}
    }

    async componentDidMount() {
        this.props.setBreadcrumb(this.state.breadcrumb)
        
        this.getCart();        
    }

    getCart = async () => {
        await this.props.getCart();

        let cart = this.props.cart;

        if(cart.cartItems.length == 0) {
            cart = JSON.parse(localStorage.getItem('cart'));
            await this.props.restoreCart(cart);
        }
        this.setState({cart: this.props.cart})
    }

    removeItem = (item) => {
        this.props.removeItem(item.product._id);
    }

    render() {
        const { cartItems, summary } = this.props.cart;
        console.log('cartItems', cartItems)

        return (
            <div className="container-fluid px-cust-5">
                <section id="main-section" className="">
                    <div className="row">
                        <div className="col-12 col-xl-8" id="left-col">
                            <section className="d-none d-xl-block">
                                <div className="row bg-eee mt-3 mr-2 px-2 pt-3 pb-1">
                                    <div className="col-3 col-20perc">
                                        <img alt="blank" className="img-fluid" src="../assets/img/thd_cc.png" /></div>
                                    <div className="col-7">
                                        <h6 className="font-weight-bold">Pay $254 per Month* When You Use Your Card</h6>
                                        <p className="f-pt9">$254 per month* suggested payments with 6 months financing on this $1518.66
                                purchase when you use The Home Depot Consumer Credit Card. View Details</p>
                                    </div>
                                    <div className="col"><small>Don't have a card?</small><button className="btn btn-primary button"
                                        type="button"><strong>Apply Now</strong></button></div>
                                </div>
                            </section>
                            <div className="row mt-5">
                                <div className="col"><span className="section-header">Shopping Cart</span></div>
                            </div>
                            <div className="row mt-2">
                                <div className="col" id="free-section">
                                    <Link className="btn btn-primary button d-xl-none mb-3 mt-2"
                                        id="btn-checkout" type="button" to="/checkout">
                                        Checkout
                                    </Link>
                                    <p className="mb-1">FREE Shipping on eligible items. See Details</p>
                                    <p className="mb-1">Free delivery on appliance purchases of $396 or more. See Details<br /></p>
                                    <p className="mb-1 d-none d-xl-block">All appliances will be delivered to ZIP code:&nbsp;02072</p>
                                </div>
                            </div>
                            <section className="d-none d-xl-block mt-4">
                                <div className="row">
                                    <div className="col-2"><span className="font-weight-bold"><strong>Item</strong></span></div>
                                    <div className="col-3"><span className="font-weight-bold">&nbsp;</span></div>
                                    <div className="col-2"><span className="font-weight-bold"><strong>How To Get It</strong></span></div>
                                    <div className="col text-center"><span className="font-weight-bold"><strong>Qty</strong></span></div>
                                    <div className="col text-right"><span className="font-weight-bold"><strong>Item Total</strong></span>
                                    </div>
                                </div>
                                <hr />
                            </section>

                            {cartItems.map(item => (
                                <div key={item.product._id} className="row d-flex justify-content-between mt-3 mt-md-3">
                                    <div className="col-4 col-md-2">
                                        <img alt="blank" className="img-fluid"
                                            src={"../assets/img/" + item.product.image[0]} />
                                    </div>
                                    <div className="col-8 col-md-3">
                                        <div className="row">
                                            <div className="col">
                                                <span className="mr-1 font-weight-bold"> {item.product.brand} </span>
                                                <span> {item.product.name} </span>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col">
                                                <span>Model #</span>
                                                <span>{item.product.model}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2 text-center d-none d-xl-block">
                                        <span>Home Delivery</span>
                                    </div>
                                    <div className="col-12 col-md-5">
                                        <div className="row mt-3 m-md-0" id="price-row">
                                            <div className="col">
                                                <div className="row">
                                                    <div className="col-4 d-flex flex-column align-items-sm-center col-xl-12">
                                                        <span className="font-weight-bold d-md-none">Qty</span>
                                                        <input
                                                            className="d-lg-flex text-center"
                                                            type="text"
                                                            style={{ height: "2rem", width: "3rem" }}
                                                            defaultValue={item.quantity}
                                                        />
                                                    </div>
                                                    <div className="col-4 col-xl-12 ml-5 m-md-0">
                                                        <span className="font-weight-bold d-md-none">Price</span>
                                                        <div className="row">
                                                            <div className="col text-center">
                                                                <span> ${item.product.price.toFixed(2)}</span>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col text-center">
                                                                <span
                                                                    className="strike-through"> ${item.product.list_price.toFixed(2)}</span>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col text-center c-green">
                                                                <span className="c-green">
                                                                    {calcPercentSaved(item.product.price, item.product.list_price)}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col text-right">
                                                <span className="font-weight-bold d-md-none d-block">Total</span>
                                                <span> {(item.product.price * item.quantity).toFixed(2)}<br /></span>
                                                <a onClick={this.removeItem.bind(this, item)}>
                                                    <i className="fa fa-trash-o c-orange"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <hr />
                                    </div>
                                </div>
                            ))}

                            <div className="row">
                                <div className="col offset-md-7">
                                    <div className="row">
                                        <div className="col d-flex justify-content-between font-weight-bold">
                                            <span>Subtotal</span>
                                            <span> ${summary.subtotal.toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col d-flex justify-content-between"><span>Appliance Delivery
                                </span><span>FREE</span></div>
                                    </div>
                                    <div className="row">
                                        <div className="col d-flex justify-content-between">
                                            <span>Discount</span>
                                            <span>(${summary.discount.toFixed(2)})</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col d-flex justify-content-between">
                                            <span>Sales Tax</span>
                                            <span> ${summary.tax.toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 d-flex justify-content-between">
                                            <hr style={{ width: "100%" }} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col d-flex justify-content-between font-weight-bold f-1pt1">
                                            <span>Total</span>
                                            <span> ${summary.total.toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col d-flex justify-content-between c-green">
                                            <span>You Saved</span>
                                            <span> ${summary.discount.toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col">
                                            <Link className="btn btn-primary button w-100" type="button"
                                                to="/checkout">
                                                Checkout
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col d-none d-xl-block" id="right-col">
                            <div className="row bg-eee">
                                <div className="col bg-white mx-4 my-3 py-2 pb-3">
                                    <div className="row">
                                        <div className="col"><span className="f-1pt5">Your Order</span></div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <hr className="mt-0" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col d-flex justify-content-between font-weight-bold">
                                            <span>Subtotal</span>
                                            <span> ${summary.subtotal.toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col d-flex justify-content-between"><span>Appliance Delivery
                                </span><span>FREE</span></div>
                                    </div>
                                    <div className="row">
                                        <div className="col d-flex justify-content-between">
                                            <span>Discount</span>
                                            <span>( ${summary.discount.toFixed(2)})</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col d-flex justify-content-between">
                                            <span>Sales Tax</span>
                                            <span> ${summary.tax.toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 d-flex justify-content-between">
                                            <hr style={{ width: "100%" }} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col d-flex justify-content-between font-weight-bold f-1pt1">
                                            <span>Total</span>
                                            <span> ${summary.total.toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col d-flex justify-content-between c-green">
                                            <span>You Saved</span>
                                            <span> ${summary.discount.toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col">
                                            <Link className="btn btn-primary button w-100" type="button"
                                                to="/checkout">
                                                Checkout
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row bg-eee">
                                <div className="col bg-white mx-4 my-3">
                                    <img alt="blank" className="img-fluid"
                                        src="../assets/img/100-off-first-purchase.png" /></div>
                            </div>
                            <div className="row bg-eee">
                                <div className="col bg-white mx-4 my-3 py-3">
                                    <h6 className="font-weight-bold">Need Help?</h6>
                                    <p className="mb-1">See our online FAQs or phone us:</p>
                                    <p className="mb-1">Online Customer Support:1-800-430-3376</p>
                                    <p className="mb-1">Major Appliances:1-877-946-9843</p>
                                    <p className="mb-1">Custom Blinds:1-800-658-7320</p>
                                    <p className="mb-1">Call 7 days a week - 6 a.m. to 2 a.m. EST</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </div >
        )
    }
}

const mapStoreToComponent = (store) => ({
    cart: store.cart
})

// const mapDispatchToProps = dispatch => {
//     return {
//         removeItem: (item) => dispatch()
//     }
// }

export default connect(mapStoreToComponent, { getCart, removeItem, restoreCart, setBreadcrumb })(Cart)