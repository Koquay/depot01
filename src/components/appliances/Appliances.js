import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setBreadcrumb } from "../util/breadcrumb/BreadcrumbActions";
import './Appliances.css'

class Appliances extends Component {
    state = {
        breadcrumb: { label: '/ Appliances ', url: '/appliances' }
    }
    
    componentDidMount() {
        this.props.setBreadcrumb(this.state.breadcrumb)
    }

    render() {
        console.log('appliances', this.props.appliances)
        const { appliances } = this.props;

        return (
            <div className="container-fluid px-cust-5" id="appliances">
                <section>
                    <div className="row">
                        <div className="col mb-2">
                            <h3>Appliances</h3>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="row px-3 px-md-0">
                        <div className="col-2 d-none d-lg-block">
                            <div className="row">
                                <div className="col" id="sidebar">
                                    <h6 className="font-weight-bold">
                                        <strong>{appliances.brands.title}</strong>
                                    </h6>
                                    <ul className="list-unstyled">
                                        {appliances.brands.links.map(link => (
                                            <li key={link} className="mb-2">
                                                <Link to={'/brand/' + link}>{link}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col" id="sidebar">
                                    <h6 className="font-weight-bold">
                                        <strong>{appliances.refrigerators.title}</strong>
                                    </h6>
                                    <ul className="list-unstyled">
                                        {appliances.refrigerators.links.map(link => (
                                            <li key={link} className="mb-2">
                                                <a href='/'>{link}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col" id="sidebar">
                                    <h6 className="font-weight-bold">
                                        <strong>{appliances.washers.title}</strong>
                                    </h6>
                                    <ul className="list-unstyled">
                                        {appliances.washers.links.map(link => (
                                            <li key={link} className="mb-2">
                                                <a href="/">{link}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col" id="sidebar">
                                    <h6 className="font-weight-bold">
                                        <strong>{appliances.ranges.title}</strong>
                                    </h6>
                                    <ul className="list-unstyled">
                                        {appliances.ranges.links.map(link => (
                                            <li key={link} className="mb-2">
                                                <a href="/">{link}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="col-12 col-lg-10 px-2" id="banner-section">
                            <div className="row">
                                <div className="col-12 col-md-8" id="banner" style={{ height: "19rem" }}>
                                    <h1>Heading</h1>
                                </div>
                                <div className="col-12 text-center col-md-4" id="ad-text">
                                    <h1>UP TO 30% OFF</h1>
                                    <span>with Appliance Special Buys**<br />Valid 12/12 -
                                    1/1/2020.</span>
                                    <button className="btn btn-primary button-primary mt-4 px-2" type="button">
                                        <strong>Shop All Appliance Savings</strong>
                                    </button>
                                </div>
                            </div>
                            <section>
                                <div className="row mt-5">
                                    <div className="col">
                                        <h2 className="section-heading">{appliances.kitchenAppliances.title}<br /></h2>
                                    </div>
                                </div>

                                <div className="row mt-3 d-none d-lg-flex">
                                    {appliances.kitchenAppliances.appliances.map(appliance => (
                                        <div key={appliance.img} className="col-12 text-center col-md-3">
                                            <img alt={appliance.img} className="img-fluid" src={"assets/img/" + appliance.img} />
                                            <h6>{appliance.name}</h6>
                                        </div>
                                    ))}
                                </div>
                                <div className="row text-center d-flex justify-content-center mt-4 d-lg-none mobile">
                                    {appliances.kitchenAppliances.mobileAppliances.map(appliance => (
                                        <div key={appliance.name} className="col-6 text-center">
                                            <img alt="blank" className="img-fluid" src={"assets/img/" + appliance.img} />
                                            <h6>{appliance.name}</h6>
                                        </div>
                                    ))}

                                    {appliances.kitchenAppliances.mobileBanners.map(banner => (
                                        <div key={banner} className="col-12 text-center mt-3">
                                            <img alt="blank" className="img-fluid" src={"assets/img/" + banner} />
                                        </div>
                                    ))}
                                </div>
                            </section>
                            <div className="row mt-5 d-none d-lg-flex">
                                <div className="col-4" id="laundry-appliances">
                                    <hr />
                                    <h2>{appliances.laundryAppliances.title}</h2>
                                    <hr />
                                    {appliances.laundryAppliances.categories.map(category => (
                                        <a key={category} className="d-block">
                                            <span style={{ textDecoration: "underline" }}>{category}</span>
                                            <i className="fa fa-angle-right ml-1"></i>
                                        </a>
                                    ))}

                                </div>
                                <div className="col-8">
                                    <img alt="blank" className="img-fluid" src={"assets/img/" + appliances.laundryAppliances.image} />
                                </div>
                            </div>
                            <div className="row d-none d-lg-flex mt-5">
                                {appliances.laundryAppliances.bannerImages.map(image => (
                                    <div key={image} className="col">
                                        <img alt="blank" className="img-fluid" src={"assets/img/" + image} />
                                    </div>
                                ))}
                            </div>
                            <section className="flex-column d-none d-lg-flex mt-5">
                                <div className="row">
                                    <div className="col">
                                        <h2 className="section-heading">{appliances.smallKitchenAppliances.title}<br /></h2>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    {appliances.smallKitchenAppliances.appliances.map(appliance => (
                                        <div key={appliance.name} className="col-2 text-center mb-4">
                                            <img alt="blank" className="img-fluid" src={"assets/img/" + appliance.image} />
                                            <span>{appliance.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                            <section className="flex-column d-none d-lg-flex mt-5">
                                <div className="row">
                                    <div className="col">
                                        <h2 className="section-heading">{appliances.topApplianceBrands.title}<br /></h2>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    {appliances.topApplianceBrands.brands.map(brand => (
                                        <div key={brand.image} className="col-2 text-center mb-4">
                                            <img alt="blank" className="img-fluid" src={"assets/img/" + brand.image} />
                                        </div>
                                    ))}
                                </div>
                            </section>
                            <section className="flex-column d-none d-lg-flex mt-5">
                                <div className="row">
                                    <div className="col">
                                        <h2 className="section-heading">{appliances.greatAppliances.title}<br /></h2>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col">
                                        {appliances.greatAppliances.paragraphs.map(paragraph => (
                                            <p key={paragraph.substr(1,10)} className="mb-4">
                                                {paragraph}<br />
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStoreToComponent = (store) => ({
    appliances: store.appliances
})

export default connect(mapStoreToComponent, {setBreadcrumb})(Appliances)