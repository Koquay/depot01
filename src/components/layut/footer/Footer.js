import React, { Component } from 'react';
import { connect } from "react-redux";
import './Footer.css'

class Footer extends Component {
    render() {
        const { customerService, resources, aboutUs } = this.props.footer;
        console.log('customerService, resources, aboutUs', customerService, resources, aboutUs)
        return (
            <div className="container-fluid mt-3 mb-4 d-none d-md-block" id="footer">
                <section className="d-none d-md-block">
                    <div className="row bg-lightgray px-4 py-2">
                        <div className="col">
                            <h5 className="mb-0">More saving. More doing.®<br /></h5>
                        </div>
                        <div className="col text-right">
                            <span>Need Help? Please call us at:&nbsp;</span>
                            <a href="/blank" className="ml-1">
                                <span style={{ textDecoration: "underline" }}>1-800-HOME-DEPOT (1-800-466-3337)</span>
                            </a>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <div className="row px-4">
                                <div className="col">
                                    <h6>{customerService.title}</h6>
                                    <ul className="list-unstyled">
                                        {customerService.links.map(link => (
                                            <li key={link}>
                                                <a href="/blank">{link}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="col">
                                    <h6>{resources.title}</h6>
                                    <ul className="list-unstyled">
                                        {resources.links.map(link => (
                                            <li key={link}>
                                                <a href="/blank">{link}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="col">
                                    <h6>{aboutUs.title}</h6>
                                    <ul className="list-unstyled">
                                        {aboutUs.links.map(link => (
                                            <li key={link}>
                                                <a href="/blank">{link}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="col">
                                    <div className="row bg-lightgray">
                                        <div className="col">
                                            <div className="card">
                                                <div className="card-body bg-lightgray">
                                                    <div className="row">
                                                        <div className="col"><span><i className="fa fa-credit-card-alt f-1pt2"></i></span><span className="ml-2 f-pt9">Special Financing Available everyday*</span></div>
                                                    </div>
                                                    <div className="row mt-3">
                                                        <div className="col"><a href="/blank">Pay &amp; Manage Your Card</a></div>
                                                    </div>
                                                    <div className="row mt-2">
                                                        <div className="col"><a href="/blank">Credit Offers</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col pl-0"><span className="f-pt9">Get $5 off when you sign up for emails with savings and tips.</span></div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col pl-0">
                                            <div className="input-group">
                                                <div className="input-group-prepend"></div>
                                                <input className="form-control" type="text" placeholder="Enter Email Address" />
                                                <div className="input-group-append"><button className="btn btn-primary bg-primary-orange font-weight-bold border-inset border-orange" type="button">Go!</button></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col pl-0"><i className="fab fa-facebook f-2 c-darkgray"></i></div>
                                        <div className="col pl-0"><i className="fab fa-twitter-square f-2 c-darkgray"></i></div>
                                        <div className="col pl-0"><i className="fab fa-pinterest-square f-2 c-darkgray"></i></div>
                                        {/* <div className="col pl-0"><i className="fab fa-yc f-2 c-darkgray"></i></div>
                                        <div className="col pl-0"><i className="fab fa-book f-2 c-darkgray"></i></div> */}
                                        <div className="col pl-0"><i className="fab fa-cc-jcb f-2 c-darkgray"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStoreToComponent = (store) => ({
    footer: store.footer
})
export default connect(mapStoreToComponent)(Footer); 