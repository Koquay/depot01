import React, { Component } from "react";
import { connect } from "react-redux";
import MessageModal from "../util/message/MessageModal";
import { setBreadcrumb } from "../util/breadcrumb/BreadcrumbActions";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  state = {
    breadcrumb: { label: "Home ", url: "/" },
  };

  componentDidMount() {
    this.props.setBreadcrumb(this.state.breadcrumb);
  }

  render() {
    return (
      <div className="container-fluid px-cust-5 pb-5" id="main">
        <MessageModal />
        <section>
          <div className="row d-none d-lg-block">
            <div className="col">
              <Link className="nav-link" to="/appliances">
                <img
                  alt="home"
                  className="img-fluid"
                  src="assets/img/1212-Hero-Desktop.jpg"
                />
              </Link>
            </div>
          </div>
          <div className="row d-lg-none">
            <div className="col">
              <Link className="nav-link" to="/appliances">
                <img
                  alt="home"
                  className="img-fluid"
                  src="assets/img/1212-Hero-responsive.png"
                />
              </Link>
            </div>
          </div>
          <div className="row text-center mt-5">
            <div className="col-12 col-lg-4">
              <Link className="nav-link" to="/appliances">
                <img
                  alt="home"
                  className="img-fluid"
                  src="assets/img/1206-StockingStuffers.jpg"
                />
              </Link>
            </div>
            <div className="col-6 col-lg mt-4 mt-lg-0">
              <Link className="nav-link" to="/appliances">
                <img
                  alt="home"
                  className="img-fluid"
                  src="assets/img/Gifts-under-20.png"
                />
              </Link>
            </div>
            <div className="col-6 col-lg mt-4 mt-lg-0">
              <Link className="nav-link" to="/appliances">
                <img
                  alt="home"
                  className="img-fluid"
                  src="assets/img/1206-GiftsUnder50.jpg"
                />
              </Link>
            </div>
            <div className="col-6 col-lg mt-4 mt-lg-0">
              <Link className="nav-link" to="/appliances">
                <img
                  alt="home"
                  className="img-fluid"
                  src="assets/img/1206-GiftsUnder100.jpg"
                />
              </Link>
            </div>
            <div className="col-6 col-lg mt-4 mt-lg-0">
              <Link className="nav-link" to="/appliances">
                <img
                  alt="home"
                  className="img-fluid"
                  src="assets/img/giftcards-dog.png"
                />
              </Link>
            </div>
          </div>
          <div className="row text-center d-none d-lg-block mt-4">
            <div className="col">
              <Link className="nav-link" to="/appliances">
                <img
                  alt="home"
                  className="img-fluid"
                  src="assets/img/Christmas-delivery-dktp.png"
                />
              </Link>
            </div>
          </div>
          <div className="row text-center d-lg-none mt-4">
            <div className="col">
              <Link className="nav-link" to="/appliances">
                <img
                  alt="home"
                  className="img-fluid"
                  src="assets/img/Christmas-delivery-dktp-response.png"
                />
              </Link>
            </div>
          </div>
        </section>
        <section id="special-buy" className="font-weight-bold mt-5">
          <div className="row no-gutters d-flex d-lg-flex justify-content-between align-items-lg-center">
            <div className="col-12 col-lg-4">
              <div className="row">
                <div className="col-4">
                  <Link className="nav-link" to="/appliances">
                    <img
                      alt="home"
                      className="img-fluid mr-2"
                      src="https://www.homedepot.com/SpecialBuy/images/Logo-SBOTD.svg"
                    />
                  </Link>
                </div>
                <div className="col px-0">
                  <span className="text-center" id="offer">
                    Up to 40% off Select Tech Gifts&nbsp;
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 text-center d-lg-flex justify-content-lg-end col-lg-4 mt-4 mt-lg-0">
              <button
                className="btn btn-primary home-button-primary"
                type="button"
              >
                Shop Today's Specials
              </button>
            </div>
            <div className="col-12 mt-4">
              <div className="row text-center px-lg-5">
                <div className="col">
                  <Link className="nav-link" to="/appliances">
                    <img
                      alt="home"
                      className="img-fluid"
                      src="assets/img/irobot-robot-vacuums-r96002f-64_145.jpg"
                    />
                  </Link>
                </div>
                <div className="col">
                  <Link className="nav-link" to="/appliances">
                    <img
                      alt="home"
                      className="img-fluid"
                      src="assets/img/bobsweep-robot-vacuums-726670294651-64_145.jpg"
                    />
                  </Link>
                </div>
                <div className="col">
                  <Link className="nav-link" to="/appliances">
                    <img
                      alt="home"
                      className="img-fluid"
                      src="assets/img/dyson-stick-vacuums-289038-01-64_145.jpg"
                    />
                  </Link>
                </div>
                <div className="col d-none d-lg-block">
                  <Link className="nav-link" to="/appliances">
                    <img
                      alt="home"
                      className="img-fluid"
                      src="assets/img/dyson-upright-vacuums-214580-01-64_145.jpg"
                    />
                  </Link>
                </div>
                <div className="col d-none d-lg-block">
                  <Link className="nav-link" to="/appliances">
                    <img
                      alt="home"
                      className="img-fluid"
                      src="assets/img/blues-dyson-air-purifiers-308034-01-64_145.jpg"
                    />
                  </Link>
                </div>
                <div className="col d-none d-lg-block">
                  <Link className="nav-link" to="/appliances">
                    <img
                      alt="home"
                      className="img-fluid"
                      src="assets/img/metallics-dyson-air-purifiers-309423-01-64_145.jpg"
                    />
                  </Link>
                </div>
                <div className="col d-none d-lg-block">
                  <Link className="nav-link" to="/appliances">
                    <img
                      alt="home"
                      className="img-fluid"
                      src="assets/img/stainless-aerogarden-hydroponic-systems-901104-1200-64_145.jpg"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-5">
          <div className="row d-flex d-lg-flex">
            <div className="col-12 text-center d-flex d-lg-flex flex-column justify-content-center align-items-center col-lg-4">
              <h1 className="font-weight-bold">
                UP TO 50% OFF SELECT HOLIDAY DECOR
              </h1>
              <button
                className="btn btn-primary home-button-primary"
                type="button"
              >
                <strong>Shop Decor Now</strong>
              </button>
            </div>
            <div className="col-12 col-lg-8 mt-4 mt-lg-0">
              <Link className="nav-link" to="/appliances">
                <img
                  alt="home"
                  className="img-fluid"
                  src="assets/img/50off-holiday-decor-2.jpg"
                />
              </Link>
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-4">
            <div className="col-6">
              <Link className="nav-link" to="/appliances">
                <img
                  alt="home"
                  className="img-fluid d-none d-lg-block"
                  src="assets/img/1206-Appliances.jpg"
                />
                <img
                  alt="home"
                  className="img-fluid d-lg-none"
                  src="assets/img/1206-Appliances-mob.jpg"
                />
                <h4 className="font-weight-bold mt-2">
                  UP TO 30% OFF WITH APPLIANCE SPECIAL BUYS**
                </h4>
              </Link>
            </div>
            <div className="col-6">
              <Link className="nav-link" to="/appliances">
                <img
                  alt="home"
                  className="img-fluid d-none d-lg-block"
                  src="assets/img/1206-HolidayDecor.jpg"
                />
                <img
                  alt="home"
                  className="img-fluid d-lg-none"
                  src="assets/img/1206-HolidayDecor-mob.jpg"
                />
                <h4 className="font-weight-bold mt-2">
                  <strong>FURNITURE &amp; DECOR SAVINGS</strong>
                </h4>
              </Link>
            </div>
          </div>
        </section>
        <section className="mt-5">
          <div className="row">
            <div className="col">
              <h2 id="shop-by-category-heading" className="section-heading">
                Shop By Category
              </h2>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-6 text-center col-md-2 mb-3">
              <div className="card">
                <Link className="nav-link" to="/appliances">
                  <img
                    alt="home"
                    className="img-fluid card-img-top w-100 d-block"
                    src="assets/img/Appliances-Shopbycategory.png"
                  />
                </Link>
              </div>
              <span>Appliances</span>
            </div>
            <div className="col-6 text-center col-md-2 mb-3">
              <div className="card">
                <Link className="nav-link" to="/appliances">
                  <img
                    alt="home"
                    className="img-fluid card-img-top w-100 d-block"
                    src="assets/img/Bath-and-faucets-Shopbycategory.png"
                  />
                </Link>
              </div>
              <span>Bath &amp; Faucets</span>
            </div>
            <div className="col-6 text-center col-md-2 mb-3">
              <div className="card">
                <Link className="nav-link" to="/appliances">
                  <img
                    alt="home"
                    className="img-fluid card-img-top w-100 d-block"
                    src="assets/img/Blinds-and-window-shopbycategory.png"
                  />
                </Link>
              </div>
              <span>Blinds &amp; Window Treatments</span>
            </div>
            <div className="col-6 text-center col-md-2 mb-3">
              <div className="card">
                <Link className="nav-link" to="/appliances">
                  <img
                    alt="home"
                    className="img-fluid card-img-top w-100 d-block"
                    src="assets/img/building-shopbycategory.png"
                  />
                </Link>
              </div>
              <span>Building Materials</span>
            </div>
            <div className="col-6 text-center col-md-2 mb-3">
              <div className="card">
                <Link className="nav-link" to="/appliances">
                  <img
                    alt="home"
                    className="img-fluid card-img-top w-100 d-block"
                    src="assets/img/Decor-and-furniture-shopbycategory.png"
                  />
                </Link>
              </div>
              <span>Decor &amp; Furniture</span>
            </div>
            <div className="col-6 text-center col-md-2 mb-3">
              <div className="card">
                <Link className="nav-link" to="/appliances">
                  <img
                    alt="home"
                    className="img-fluid card-img-top w-100 d-block"
                    src="assets/img/doors-and-windows-shopbycategory.png"
                  />
                </Link>
              </div>
              <span>Doors &amp; Windows</span>
            </div>
            <div className="col-6 text-center col-md-2 mb-3">
              <div className="card">
                <Link className="nav-link" to="/appliances">
                  <img
                    alt="home"
                    className="img-fluid card-img-top w-100 d-block"
                    src="assets/img/electrcal-shopbycategory.png"
                  />
                </Link>
              </div>
              <span>Electrical</span>
            </div>
            <div className="col-6 text-center col-md-2 mb-3">
              <div className="card">
                <Link className="nav-link" to="/appliances">
                  <img
                    alt="home"
                    className="img-fluid card-img-top w-100 d-block"
                    src="assets/img/Floor-and-area-rugs-shopbycategory.png"
                  />
                </Link>
              </div>
              <span>Flooring &amp; Area Rugs</span>
            </div>
            <div className="col-6 text-center col-md-2 mb-3">
              <div className="card">
                <Link className="nav-link" to="/appliances">
                  <img
                    alt="home"
                    className="img-fluid card-img-top w-100 d-block"
                    src="assets/img/hardware-shopbycategory.png"
                  />
                </Link>
              </div>
              <span>Hardware</span>
            </div>
            <div className="col-6 text-center col-md-2 mb-3">
              <div className="card">
                <Link className="nav-link" to="/appliances">
                  <img
                    alt="home"
                    className="img-fluid card-img-top w-100 d-block"
                    src="assets/img/heating-and-cooling-shopbycategory.png"
                  />
                </Link>
              </div>
              <span>Heating &amp; Cooling</span>
            </div>
            <div className="col-6 text-center col-md-2 mb-3">
              <div className="card">
                <Link className="nav-link" to="/appliances">
                  <img
                    alt="home"
                    className="img-fluid card-img-top w-100 d-block"
                    src="assets/img/kitchen-shopbycategory.png"
                  />
                </Link>
              </div>
              <span>Kitchen</span>
            </div>
            <div className="col-6 text-center col-md-2 mb-3">
              <div className="card">
                <Link className="nav-link" to="/appliances">
                  <img
                    alt="home"
                    className="img-fluid card-img-top w-100 d-block"
                    src="assets/img/lawn-graden-shopbycategory.png"
                  />
                </Link>
              </div>
              <span>Text</span>
            </div>
            <div className="col-6 text-center col-md-2 mb-3">
              <div className="card">
                <Link className="nav-link" to="/appliances">
                  <img
                    alt="home"
                    className="img-fluid card-img-top w-100 d-block"
                    src="assets/img/Lighting-cealingFans-shopbycategory.png"
                  />
                </Link>
              </div>
              <span>Lighting &amp; Ceiling Fans</span>
            </div>
            <div className="col-6 text-center col-md-2 mb-3">
              <div className="card">
                <Link className="nav-link" to="/appliances">
                  <img
                    alt="home"
                    className="img-fluid card-img-top w-100 d-block"
                    src="assets/img/Outdoor-living-shopbycategory.png"
                  />
                </Link>
              </div>
              <span>Outdoor Living</span>
            </div>
            <div className="col-6 text-center col-md-2 mb-3">
              <div className="card">
                <Link className="nav-link" to="/appliances">
                  <img
                    alt="home"
                    className="img-fluid card-img-top w-100 d-block"
                    src="assets/img/Paint-shopbycategory.png"
                  />
                </Link>
              </div>
              <span>Paint</span>
            </div>
            <div className="col-6 text-center col-md-2 mb-3">
              <div className="card">
                <Link className="nav-link" to="/appliances">
                  <img
                    alt="home"
                    className="img-fluid card-img-top w-100 d-block"
                    src="assets/img/Plumbing-shopbycategory.png"
                  />
                </Link>
              </div>
              <span>Plumbing</span>
            </div>
            <div className="col-6 text-center col-md-2 mb-3">
              <div className="card">
                <Link className="nav-link" to="/appliances">
                  <img
                    alt="home"
                    className="img-fluid card-img-top w-100 d-block"
                    src="assets/img/storage-organization-shopbycategory.png"
                  />
                </Link>
              </div>
              <span>Storage &amp; Organization</span>
            </div>
            <div className="col-6 text-center col-md-2 mb-3">
              <div className="card">
                <Link className="nav-link" to="/appliances">
                  <img
                    alt="home"
                    className="img-fluid card-img-top w-100 d-block"
                    src="assets/img/tools-shopbycategory.png"
                  />
                </Link>
              </div>
              <span>Tools</span>
            </div>
          </div>
          <div className="row d-flex d-md-flex justify-content-lg-center mt-4 p-4 primary-gray">
            <div className="col-12 col-md-3">
              <img
                alt="home"
                className="img-fluid"
                src="assets/img/cs-hd-creditcard.png"
              />
            </div>
            <div className="col">
              <h4 className="font-weight-bold">
                12 MONTHS FINANCING ON APPLIANCE PURCHASES $299 OR MORE
              </h4>
              <span className="mr-1">+ NEW ACCOUNTS SAVE UP TO $100†</span>
              <span>on your qualifying purchase when you open a new card.</span>
              <small className="d-block">Valid 12/19-12/25/2019.</small>
              <div className="mt-2">
                <span className="mr-2">Apply Now</span>
                <i className="fa fa-arrow-up" id="apply-now-icon"></i>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-5">
          <div className="row">
            <div className="col">
              <h2 id="location-heading" className="section-heading">
                Your Location
              </h2>
            </div>
          </div>
          <div className="row no-gutters d-lg-flex justify-content-lg-center mt-4">
            <div className="col-12 col-md-6 col-lg-3 d-none d-md-block">
              <div className="row">
                <div className="col-12">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d23260.237253449443!2d-79.7035511!3d43.2193536!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1576978889259!5m2!1sen!2sca"
                    width="335"
                    height="235"
                    frameBorder="0"
                    style={{ border: "0" }}
                    allowFullScreen=""
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 border p-2 mt-3 mt-md-0">
              <div>
                <h5 className="font-weight-bold">
                  You're Shopping Niagara Falls #1287
                </h5>
                <span className="primary-green">OPEN Until 9:00 pm</span>
              </div>
              <div className="mt-4">
                <span className="d-block">750 Builders Way</span>
                <span className="d-block">Niagara Falls, NY</span>
                <a className="link-blue" href="/blank">
                  <span style={{ textDecoration: "underline" }}>
                    (716)236-0761
                  </span>
                </a>
              </div>
              <div className="d-flex justify-content-between mt-4">
                <a className="link-blue" href="/blank">
                  <span style={{ textDdecoration: "underline" }}>
                    Store Details
                  </span>
                </a>
                <a className="link-blue" href="/blank">
                  Local Ad
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-6 border p-2 mt-3 mt-lg-0">
              <div>
                <h5 className="font-weight-bold">
                  <strong>Free In-Store Workshops</strong>
                </h5>
              </div>
              <div className="row mt-4">
                <div className="col-12 col-md-4 mb-4 mb-md-0">
                  <span className="d-block font-weight-bold">
                    Do-It-Yourself
                  </span>
                  <span className="d-block font-weight-bold">
                    Paint Trends &amp; Tips
                  </span>
                  <small className="d-block">Saturday, Jan 11, 2020</small>
                  <small>10:00 AM - 11:30 AM</small>
                </div>
                <div className="col-12 col-md-4 mb-4 mb-md-0">
                  <span className="d-block font-weight-bold">
                    <strong>Do-It-Herself</strong>
                  </span>
                  <span className="d-block font-weight-bold">
                    <strong>Cube Organizer</strong>
                  </span>
                  <small className="d-block">Saturday, Jan 11, 2020</small>
                  <small>10:00 AM - 11:30 AM</small>
                </div>
                <div className="col-12 col-md-4">
                  <span className="d-block font-weight-bold">
                    <strong>Kids</strong>
                  </span>
                  <span className="d-block font-weight-bold">
                    <strong>Mini Hockey Game</strong>
                  </span>
                  <small className="d-block">Saturday, Jan 11, 2020</small>
                  <small>10:00 AM - 11:30 AM</small>
                </div>
              </div>
              <div className="mt-4">
                <a className="link-blue" href="/blank">
                  <span style={{ textDecoration: "underline" }}>
                    See All Upcoming Workshops &amp; Register
                  </span>
                  <br />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="popular-categories" className="mt-5">
          <div className="row mt-4">
            <div className="col">
              <h2 id="popular-categories-heading" className="section-heading">
                Popular Categories
              </h2>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12 col-lg-2 mb-2">
              <a className="mr-2" href="/blank">
                <span style={{ textDecoration: "underline" }}>Batteries</span>
                <i className="fa fa-angle-right ml-2"></i>
              </a>
            </div>
            <div className="col-12 col-lg-2 mb-2">
              <a className="mr-2" href="/blank">
                <span style={{ textDecoration: "underline" }}>Chandeliers</span>
                <i className="fa fa-angle-right ml-2"></i>
              </a>
            </div>
            <div className="col-12 col-lg-2 mb-2">
              <a className="mr-2" href="/blank">
                <span style={{ textDecoration: "underline" }}>
                  Christmas Decor
                </span>
                <i className="fa fa-angle-right ml-2"></i>
              </a>
            </div>
            <div className="col-12 col-lg-2 mb-2">
              <a className="mr-2" href="/blank">
                <span style={{ textDecoration: "underline" }}>
                  Christmas Lights
                </span>
                <i className="fa fa-angle-right ml-2"></i>
              </a>
            </div>
            <div className="col-12 col-lg-2 mb-2">
              <a className="mr-2" href="/blank">
                <span style={{ textDecoration: "underline" }}>
                  Christmas Trees
                </span>
                <i className="fa fa-angle-right ml-2"></i>
              </a>
            </div>
            <div className="col-12 col-lg-2 mb-2">
              <a className="mr-2" href="/blank">
                <span style={{ textDecoration: "underline" }}>
                  Closet Organizer
                </span>
                <i className="fa fa-angle-right ml-2"></i>
              </a>
            </div>
            <div className="col-12 col-lg-2 mb-2">
              <a className="mr-2" href="/blank">
                <span style={{ textDecoration: "underline" }}>Flashlights</span>
                <i className="fa fa-angle-right ml-2"></i>
              </a>
            </div>
            <div className="col-12 col-lg-2 mb-2">
              <a className="mr-2" href="/blank">
                <span style={{ textDecoration: "underline" }}>Floor Lamps</span>
                <i className="fa fa-angle-right ml-2"></i>
              </a>
            </div>
            <div className="col-12 col-lg-2 mb-2">
              <a className="mr-2" href="/blank">
                <span style={{ textDecoration: "underline" }}>
                  Furnace Filters
                </span>
                <i className="fa fa-angle-right ml-2"></i>
              </a>
            </div>
            <div className="col-12 col-lg-2 mb-2">
              <a className="mr-2" href="/blank">
                <span style={{ textDecoration: "underline" }}>Humidifiers</span>
                <i className="fa fa-angle-right ml-2"></i>
              </a>
            </div>
            <div className="col-12 col-lg-2 mb-2">
              <a className="mr-2" href="/blank">
                <span style={{ textDecoration: "underline" }}>
                  Kitchen Cabinets
                </span>
                <i className="fa fa-angle-right ml-2"></i>
              </a>
            </div>
            <div className="col-12 col-lg-2 mb-2">
              <a className="mr-2" href="/blank">
                <span style={{ textDecoration: "underline" }}>
                  Space Heaters
                </span>
                <i className="fa fa-angle-right ml-2"></i>
              </a>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <img
                alt="home"
                className="img-fluid d-none d-lg-block"
                src="assets/img/HPTHD-Foundation-Trades.jpg"
              />
              <img
                alt="home"
                className="img-fluid d-lg-none"
                src="assets/img/HPTHD-Foundation-Trades-mob.png"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default connect(null, { setBreadcrumb })(Home);
