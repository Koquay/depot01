import React, { Component, StrictMode } from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { signIn, logoutUser } from "../../user/UserAction";
import './Header.css'
import store from '../../../redux/store'
import { Type } from '../../../redux/types';

class Header extends Component {
    state = {
        name: 'John Homedepot01',
        email: 'homedepot01@homedepot01.com',
        password: 'homedepot01',

    }

    handleSignIn = () => {
        const userData = JSON.parse(JSON.stringify(this.state));
        this.props.signIn(userData, this.props.history)
    }

    onChange = (e) => {
        store.dispatch({ type: Type.CLEAR_ERROR })
        this.setState({ [e.target.name]: e.target.value })
    }

    logoutUser = () => {
        console.log('logout user')
        this.props.logoutUser(this.props.history);
    }

    render() {
        const { header } = this.props;
        const { user, isLoggedIn } = this.props.user;
        const { errors } = this.props;
        const numberOfItems = this.props.cart.cartItems.length;

        return (
            <div>
                <header>
                    <div className="row py-3 px-cust-5">
                        <div className="col-3 d-flex d-lg-flex align-items-end col-md-3">
                            <img className="img-fluid" src="assets/img/hdlogo.jpg" style={{ width: "4rem" }} alt="location" />
                            <i className="fa fa-map-marker ml-3 mr-1 d-none d-lg-block"></i>
                            <span className="d-none d-lg-block">Find Your Location</span>
                        </div>
                        <div className="col d-flex align-items-end col-md-6">
                            <div className="input-group">
                                <div className="input-group-prepend"></div>
                                <input className="form-control" type="text" />
                                <div className="input-group-append"><button className="btn btn-primary" type="button"><i className="fa fa-search"></i></button></div>
                            </div>
                        </div>
                        <div className="col-2 d-flex justify-content-between align-items-end align-items-md-end col-md-3">
                            {!isLoggedIn &&
                                <a id="account" className="d-none d-lg-block" data-toggle="modal" data-target="#signInModal">
                                    <span className="mr-1 font-weight-bold"> Login </span>
                                    <i className="fa fa-user-o font-weight-bold"></i>
                                </a>
                            }

                            {isLoggedIn &&
                                <a onClick={this.logoutUser}>
                                    <span className="mr-1 font-weight-bold"> Logout </span>
                                    <i className="fa fa-user-o font-weight-bold"></i>
                                </a>
                            }

                            <Link to="/cart">
                                <span className="mr-1 d-none d-lg-inline-block">Cart</span>
                                <i className="fa fa-cart-arrow-down" id="cart"></i>
                                <span className="badge badge-primary ml-1 d-none d-lg-inline-block">
                                    {numberOfItems}
                                </span>
                            </Link>
                        </div>
                    </div>
                    <nav className="navbar navbar-light navbar-expand-lg px-cust-5 my-0">
                        <div className="container-fluid"><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                            <div className="collapse navbar-collapse" id="navcol-1">
                                <ul className="nav navbar-nav">
                                    {header.navItems.map(item => (
                                        <li key={item.label} className="nav-item" role="presentation">
                                            <Link className="nav-link active" to={item.link}>
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="text-center py-lg-1" id="marquee"><span className="d-none d-lg-inline-block">FREE DELIVERY BY CHRISTMAS</span><span className="mx-2 d-none d-lg-inline-block">Order by December 20 - thousands of online items eligible</span><i className="fa fa-angle-right d-none d-lg-inline-block"></i></div>
                </header>

                {Object.keys(errors).length > 0 &&
                    <div className="alert alert-danger" role="alert">
                        {errors.name && <span className="d-block">{errors.name}</span>}
                        {errors.email && <span className="d-block">{errors.email}</span>}
                        {errors.password && <span className="d-block">{errors.password}</span>}
                    </div>
                }


                <div className="modal fade" id="signInModal" tabIndex="-1" role="dialog" aria-labelledby="signInModalTitle"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h2 className="modal-title" id="signInModalTitle">Sign In</h2>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" className="c-orange f-2 font-weight-bold">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-row">
                                        <div className="col-md-12" id="message">
                                            <div className="form-group">
                                                <label htmlFor="email">Username</label>
                                                <input
                                                    type="text"
                                                    name="name" required className="form-control" id="name"
                                                    onChange={this.onChange}
                                                    value={this.state.name}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email" className="font-weight-bold">Email</label>
                                                <input
                                                    type="email"
                                                    name="email" required className="form-control" id="email"
                                                    onChange={this.onChange}
                                                    value={this.state.email}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="password" className="font-weight-bold">Password</label>
                                                <input
                                                    type="password"
                                                    name="password" required className="form-control" id="password"
                                                    onChange={this.onChange}
                                                    value={this.state.password}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="submit" className="btn btn-primary btn-block font-weight-bold border-inset button"
                                    data-dismiss="modal"
                                    onClick={this.handleSignIn}>
                                    Sign In
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStoreToComponent = (store) => ({
    header: store.header,
    errors: store.errors.errors,
    user: store.user,
    cart: store.cart
})

export default connect(mapStoreToComponent, { signIn, logoutUser })(withRouter(Header));