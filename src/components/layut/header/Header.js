import React, { Component, StrictMode } from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { signIn, logoutUser } from "../../user/UserAction";
import './Header.css'
import store from '../../../redux/store'
import { Type } from '../../../redux/types';
import classnames from 'classnames'
import Breadcrumbs from '../../util/breadcrumb/Breadcrumbs';

class Header extends Component {
    state = {
        name: 'John Homedepot01',
        email: 'homedepot01@homedepot01.com',
        password: 'homedepot01',

        overlayDisplayed: false,
        searchBox: false,
        searchItems: [],
        searchResults: [],

        marquee: '',
        marqueeContents: [],


    }

    async componentDidMount() {
        this.setState({ searchItems: this.props.header.searchItems });
        await this.setState({ marqueeContents: this.props.header.marqueeContents })
        console.log('marqueeContents', this.state.marqueeContents);
        this.startMarquee();
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

    showOverlay = (value) => {
        console.log('SHOW OVERLAY')
        this.setState({ overlayDisplayed: value });
    }

    searchText = (e) => {
        const tmpResult = this.state.searchItems
            .filter(item => item.toLowerCase().includes(e.target.value.toLowerCase()))
        this.setState({ searchResults: tmpResult })

        if (e.target.value) {
            this.setState({ searchBox: true })
        } else {
            this.setState({ searchBox: false })
        }
    }

    clearSearchbox = (e) => {
        this.setState({ searchResults: [] })
    }

    startMarquee = () => {
        let index = 0;
        this.state.marquee = this.state.marqueeContents[0];

        let marqueeInterval = setInterval(() => {
            this.setState({ marquee: this.state.marqueeContents[index++] });
            if (index == this.state.marqueeContents.length) {
                index = 0;
            }
        }, 4000);
    }

    render() {
        const { header } = this.props;
        const { user, isLoggedIn } = this.props.user;
        const { errors } = this.props;
        const numberOfItems = this.props.cart.cartItems.length;
        const searchItems = this.state.searchResults;
        // console.log('searchItems', searchItems)

        return (
            <div className="page-wrapper">
                <section className={classnames({ 'overlay': this.state.overlayDisplayed })}></section>
                <header>
                    <div className="row py-3 px-cust-5">
                        <div className="col-3 d-flex d-lg-flex align-items-end col-md-3">
                            <Link to="/">
                                <img className="img-fluid" src="assets/img/LogoMakr_9skTgi.png" style={{ width: "4rem" }} alt="location" />
                            </Link>
                            <i className="fa fa-map-marker ml-3 mr-1 d-none d-lg-block"></i>
                            <span className="d-none d-lg-block">Find Your Location</span>
                        </div>
                        <div id="search-column" className="col d-flex align-items-end col-md-6">
                            <div className="input-group">
                                <div className="input-group-prepend"></div>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="searchField"
                                    onChange={this.searchText}
                                />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button"><i className="fa fa-search"></i></button></div>
                            </div>

                            {this.state.searchBox &&
                                <ul className="list-unstyled d-block d-none d-lg-block ">
                                    {searchItems.map(item => (
                                        <li key={item} className="py-1 px-2">
                                            {/* <Link to={'/brand/' + item}>{item}</Link> */}
                                            <a href={'/brand/' + item} onClick={this.clearSearchbox}>{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            }
                        </div>
                        <div className="col-2 d-flex justify-content-between align-items-end align-items-md-end col-md-3">
                            {!isLoggedIn &&
                                <a id="account" className="" data-toggle="modal" data-target="#signInModal">
                                    <span className="mr-1 font-weight-bold d-none d-md-inline-block"> Login </span>
                                    <i className="fa fa-user-o font-weight-bold"></i>
                                </a>
                            }

                            {isLoggedIn &&
                                <a onClick={this.logoutUser}>
                                    <span className="mr-1 font-weight-bold d-none d-md-inline-block"> Logout </span>
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
                    {/* <nav className="navbar navbar-light navbar-expand-lg px-cust-5 my-0">
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
                    </nav> */}
                    <nav className="navbar navbar-light navbar-expand-lg px-cust-5 my-0">
                        <div className="container-fluid"><button data-toggle="collapse" data-target="#navcol-1"
                            className="navbar-toggler"><span className="sr-only">Toggle navigation</span><span
                                className="navbar-toggler-icon"></span></button>
                            <div className="collapse navbar-collapse" id="navcol-1">
                                <ul className="nav navbar-nav">
                                    <li role="presentation" className="nav-item drop-down" onMouseEnter={this.showOverlay.bind(this, true)}
                                        onMouseLeave={this.showOverlay.bind(this, false)}>
                                        <a className="nav-link">
                                            All Departments
                                        <i className="fa fa-caret-down ml-1"></i>
                                        </a>
                                        <ul className="list-unstyled">
                                            <li>
                                                <Link className="nav-link active" to='/appliances'>
                                                    Appliances
                                                </Link>
                                            </li>

                                            <li><a href="/blank">
                                                <span style={{ textDecoration: "underline" }}>Bath &amp; Faucets</span></a>
                                            </li>
                                            <li><a href="/blank">Blinds &amp; Window Treatment</a></li>
                                            <li><a href="/blank">Building Materials</a></li>
                                            <li><a href="/blank">Decor &amp; Furniture</a></li>
                                            <li><a href="/blank"><span style={{ textDecoration: "underline" }}>Doors &amp; Windows</span></a>
                                            </li>
                                            <li><a href="/blank"><span style={{ textDecoration: "underline" }}>Electrical</span></a></li>
                                            <li><a href="/blank">Flooring &amp; Area Rugs</a></li>
                                            <li><a href="/blank">Hardware</a></li>
                                            <li><a href="/blank">Heating &amp; Cooling</a></li>
                                            <li><a href="/blank">Kitchen &amp; Kitchenware</a></li>
                                            <li><a href="/blank">Lawn &amp; Garden</a></li>
                                            <li><a href="/blank">Lighting &amp; Ceiling Fans</a></li>
                                            <li><a href="/blank">AppliaOutdoor Living &amp; Pationces</a></li>
                                            <li><a href="/blank">Paint</a></li>
                                        </ul>
                                    </li>

                                    <li role="presentation" className="nav-item">
                                        <Link className="nav-link" to='/appliances'>
                                            Home Decor Furniture
                                        </Link>
                                    </li>

                                    <li role="presentation" className="nav-item">
                                        <Link className="nav-link" to='/appliances'>
                                            DIY Projects Ideas
                                        </Link>
                                    </li>
                                    <li role="presentation" className="nav-item">
                                        <Link className="nav-link" to='/appliances'>
                                            Installation Services
                                        </Link>
                                    </li>
                                    <li role="presentation" className="nav-item">
                                        <Link className="nav-link" to='/appliances'>
                                            Specials Offers
                                        </Link>
                                    </li>
                                    <li role="presentation" className="nav-item">
                                        <Link className="nav-link" to='/appliances'>
                                            Local Ad
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="text-center py-lg-1" id="marquee">
                        <span className="d-none d-lg-inline-block mr-1">{this.state.marquee}</span>
                        {/* <span className="mx-2 d-none d-lg-inline-block">Order by December 20 - thousands of online items eligible</span> */}
                        <i className="fa fa-angle-right d-none d-lg-inline-block"></i>
                    </div>

                    <Breadcrumbs />
                </header>

                {
                    Object.keys(errors).length > 0 &&
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
            </div >
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