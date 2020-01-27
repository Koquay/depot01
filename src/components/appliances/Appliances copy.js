import React, { Component } from 'react';
import './Appliances.css'

export default class Appliances extends Component {
    render() {
        return (
            <div className="container-fluid px-cust-5">
                <section id="desktop" className="section-padding d-none d-xl-block">
                    <section id="breadcrumb">
                        <div className="row">
                            <div className="col px-0">
                                <ol className="breadcrumb bg-white mb-0">
                                    <li className="breadcrumb-item"><a href="/blank"><span>Home</span></a></li>
                                    <li className="breadcrumb-item"><a href="/blank"><span>Appliances</span></a></li>
                                </ol>
                            </div>
                        </div>
                        <div className="row">
                            <h2 className="mb-4 ml-3">Appliances</h2>
                        </div>
                    </section>
                    <section id="body">
                        <div className="row">
                            <div className="col-2" id="sidebar">
                                <div className="row">
                                    <div className="col">
                                        <h6 className="font-weight-bold">Appliance Brands</h6>
                                        <ul className="list-unstyled">
                                            <li><a href="/blank">Amana</a></li>
                                            <li><a href="/blank">Bosch</a></li>
                                            <li><a href="/blank">Café</a></li>
                                            <li><a href="/blank">Electrolux</a></li>
                                            <li><a href="/blank">Frigidaire</a></li>
                                            <li><a href="/blank">GE</a></li>
                                            <li><a href="/blank">Hotpoint</a></li>
                                            <li><a href="/blank">Haier</a></li>
                                            <li><a href="/blank">KitchenAid</a></li>
                                            <li><a href="/blank">LG</a></li>
                                            <li><a href="/blank">Maytag</a></li>
                                            <li><a href="/blank">Samsung</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h6 className="font-weight-bold"><strong>Refrigerators</strong></h6>
                                        <ul className="list-unstyled">
                                            <li><a href="/blank">French Door Refrigerators</a></li>
                                            <li><a href="/blank">Side by Side Refrigerators</a></li>
                                            <li><a href="/blank">Top Freezer Refrigerators</a></li>
                                            <li><a href="/blank">Bottom Freezer Refrigerators</a></li>
                                            <li><a href="/blank">Mini Refrigerators</a></li>
                                            <li><a href="/blank">Counter Depth Refrigerators</a></li>
                                            <li><a href="/blank">Wine Coolers &amp; Beverage Centers</a></li>
                                            <li><a href="/blank">Freezers &amp; Ice Makers</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h6 className="font-weight-bold"><strong>Washers</strong><br /></h6>
                                        <ul className="list-unstyled">
                                            <li><a href="/blank">Front Load Washers</a></li>
                                            <li><a href="/blank">Top Load Washers</a></li>
                                            <li><a href="/blank">Unitized Washers &amp; Dryers</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <h6 className="font-weight-bold"><strong>Dryers</strong><br /></h6>
                                        <ul className="list-unstyled">
                                            <li><a href="/blank">Electric Dryers</a></li>
                                            <li><a href="/blank">Gas Dryers</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col px-0" id="main-section">
                                <section id="banner" className="mt-2">
                                    <div className="row">
                                        <div className="col" id="banner-col">
                                            <img alt="blank" className="img-fluid" src="https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/fetch/FetchRules/Partial/GE-kitchen-suite-ASP-KP.jpg" />
                                            <div id="banner-text">
                                                <h1 className="mb-0">UP TO 30% OFF</h1>
                                                <h4 className="mb-0"><strong>WITH APPLIANCE SPECIAL BUYS**</strong></h4>
                                                <p className="mb-0">Valid 4/18–5/15/2019.</p><button className="btn btn-primary button" type="button"><strong>Shop Appliance Savings</strong></button></div>
                                        </div>
                                    </div>
                                </section>
                                <section id="kitchen-appliances-section">
                                    <div className="row mt-5">
                                        <div className="col"><span className="section-header">Kitchen Appliances</span></div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-3 text-center">
                                            <img alt="blank" className="img-fluid" src="assets/img/Samsung-smart-refrigerator.jpg" />
                                            <h5>Refrigerators</h5>
                                        </div>
                                        <div className="col-3 text-center">
                                            <img alt="blank" className="img-fluid" src="assets/img/ranges.png" />
                                            <h5>Ranges</h5>
                                        </div>
                                        <div className="col-3 text-center">
                                            <img alt="blank" className="img-fluid" src="assets/img/Bosch-L1-Dishwasher-304644783.jpg" />
                                            <h5>Dishwashers</h5>
                                        </div>
                                        <div className="col-3 text-center">
                                            <img alt="blank" className="img-fluid" src="assets/img/microwaves.png" />
                                            <h5>Microwaves</h5>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-3 text-center">
                                            <img alt="blank" className="img-fluid" src="assets/img/samsung-kitchen-appliance-package.png" />
                                            <h5>Appliance Packages</h5>
                                        </div>
                                        <div className="col-3 text-center">
                                            <img alt="blank" className="img-fluid" src="assets/img/20f59954-2807-475a-a2c5-d7e4d1097931_1000.jpg" />
                                            <h5>Cooktops</h5>
                                        </div>
                                        <div className="col-3 text-center">
                                            <img alt="blank" className="img-fluid" src="assets/img/wall-ovens-2.png" />
                                            <h5>Wall Ovens</h5>
                                        </div>
                                        <div className="col-3 text-center">
                                            <img alt="blank" className="img-fluid" src="assets/img/range-hoods.png" />
                                            <h5>Range Hoods</h5>
                                        </div>
                                    </div>
                                </section>
                                <section id="laundry-appliances-section" className="mt-5">
                                    <div className="row">
                                        <div className="col-3 text-left">
                                            <hr className="py-0 w-25 ml-0" />
                                            <h1>Laundry Appliances<br /></h1>
                                            <hr className="py-0 w-25 ml-0" /><a className="c-blue d-block" href="/blank">Washers<i className="fa fa-chevron-right ml-1 c-orange"></i></a><a className="c-blue d-block" href="/blank">Dryers<i className="fa fa-chevron-right ml-1 c-orange"></i></a><a className="c-blue d-block" href="/blank">Laundry Pairs<i className="fa fa-chevron-right ml-1 c-orange"></i></a></div>
                                        <div
                                            className="col-9 text-center">
                                            <img alt="blank" className="img-fluid" src="assets/img/samsung-laundry-pairs-lead.png" /></div>
                                    </div>
                                    <div className="row mt-5">
                                        <div className="col">
                                            <img alt="blank" className="img-fluid" src="assets/img/HD-protection-plan.jpg" /></div>
                                        <div className="col">
                                            <img alt="blank" className="img-fluid" src="assets/img/HB-12-Mo-Finance-299-or-more.png" /></div>
                                    </div>
                                </section>
                                <section id="small-appliances-section" className="mt-5">
                                    <div className="row">
                                        <div className="col"><span className="section-header">Small Appliances</span></div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-2 text-center">
                                            <img alt="blank" className="img-fluid" src="assets/img/Thumbnail-Blender.png" />
                                            <h6>Blenders</h6>
                                        </div>
                                        <div className="col-2 text-center">
                                            <img alt="blank" className="img-fluid" src="assets/img/Thumbnail-Coffee-Espresso.png" />
                                            <h6>Coffee & Espresso</h6>
                                        </div>
                                        <div className="col-2 text-center">
                                            <img alt="blank" className="img-fluid" src="assets/img/Thumbnail-Toaster.png" />
                                            <h6>Toasters</h6>
                                        </div>
                                        <div className="col-2 text-center">
                                            <img alt="blank" className="img-fluid" src="assets/img/Thumbnail-Mixer.png" />
                                            <h6>Cookers</h6>
                                        </div>
                                        <div className="col-2 text-center">
                                            <img alt="blank" className="img-fluid" src="assets/img/Thumbnail-Food-Processor.png" />
                                            <h6>Food Process</h6>
                                        </div>
                                        <div className="col-2 text-center">
                                            <img alt="blank" className="img-fluid" src="assets/img/Thumbnail-Air-Fryer.png" />
                                            <h6>Air Fryers</h6>
                                        </div>
                                    </div>
                                </section>
                                <section id="small-appliances-section" className="mt-5">
                                    <div className="row">
                                        <div className="col"><span className="section-header">Top Appliance Brands</span></div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-2 text-center">
                                            <img alt="blank" className="img-fluid" src="assets/img/whirlpool-appliances-logo.png" /></div>
                                        <div className="col-2 text-center">
                                            <img alt="blank" className="img-fluid" src="assets/img/LG-appliances-logo.png" /></div>
                                        <div className="col-2 text-center">
                                            <img alt="blank" className="img-fluid" src="assets/img/samsung-appliances-logo.png" /></div>
                                        <div className="col-2 text-center">
                                            <img alt="blank" className="img-fluid" src="assets/img/GE-appliances-logo.png" /></div>
                                        <div className="col-2 text-center">
                                            <img alt="blank" className="img-fluid" src="assets/img/frigidaire-brand-appliance-logo.jpg" /></div>
                                        <div className="col-2 text-center">
                                            <img alt="blank" className="img-fluid" src="assets/img/kitchen-aid-appliances-logo.png" /></div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-2 text-center">
                                            <img alt="blank" className="img-fluid" src="assets/img/maytag-appliances-logo.png" /></div>
                                        <div className="col-2 text-center">
                                            <img alt="blank" className="img-fluid" src="assets/img/amana-appliances-logo.png" /></div>
                                        <div className="col-2 text-center">
                                            <img alt="blank" className="img-fluid" src="assets/img/hotpoint-appliances-logo.png" /></div>
                                        <div className="col-2 text-center">
                                            <img alt="blank" className="img-fluid" src="assets/img/Bosch-appliances-logo.png" /></div>
                                        <div className="col-2 text-center">
                                            <img alt="blank" className="img-fluid" src="assets/img/GE-CAFE-appliance-logo.jpg" /></div>
                                    </div>
                                </section>
                                <section id="small-appliances-section" className="mt-5">
                                    <div className="row">
                                        <div className="col"><span className="section-header">Life Gets Easier With Great Appliances<br /></span></div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-12 text-left">
                                            <p>Revitalize your home with state-of-the-art appliances to keep your home running smoothly. We offer a vast selection of home appliances that’ll make your everyday tasks easier. Let the washing machine do the laundry and the
                                kitchen appliances do the cooking. Keep the dust and pet dander off your floors with a new vacuum. </p>
                                            <p>Consider upgrading your microwave if you haven’t in a while. Look for helpful features like a sensor, which turns off the microwave when the food is done. If you are short on counter space, try an under-the-cabinet microwave.
                                </p>
                                            <p>Before you buy any major appliance, make sure you have the right amount of space allotted for it. Refrigerators, for example, typically need to fit into a specific amount of space in the kitchen. Measure first, buy second.
                                Make sure your appliance fits!</p>
                                            <p>Buy appliances online with confidence. You can always go into your local Home Depot Store to see for yourself if the appliance you’re looking for is the one you want. The Home Depot Protection Plan is available for your peace
                                of mind, as well. To be sure we’re in your budget, look for our valuable Appliance Offers for household appliance savings.</p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </section>
                </section>
                <section id="mobile-section" className="mb-2 d-xl-none">
                    <section id="banner-section">
                        <div className="row">
                            <div className="col">
                                <h5>Appliances</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img alt="blank" className="img-fluid w-100" src="assets/img/GE-kitchen-suite-0418-MOB.jpg" />
                                <div id="mobile-banner-text">
                                    <h4 className="mb-0 font-weight-bold">UP TO 30% OFF</h4>
                                    <h6 className="mb-0"><strong>WITH APPLIANCE SPECIAL BUYS**</strong></h6>
                                    <p className="mb-0">Valid 4/18–5/15/2019.</p>
                                    <button className="btn btn-primary button button-primary" type="button">
                                        <strong>Shop Appliance Savings</strong>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="mobile-shop-by-category" className="mt-4">
                        <div className="row">
                            <div className="col"><span className="section-header">Shop by Category</span></div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-6 text-center">
                                <img alt="blank" className="img-fluid" src="assets/img/washers-dryers.jpg" />
                                <h6 className="my-0">Washers &amp; Dryers</h6>
                            </div>
                            <div className="col-6 text-center">
                                <img alt="blank" className="img-fluid" src="assets/img/refrigerators.jpg" />
                                <h6 className="my-0">Refrigerators</h6>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-6 text-center">
                                <img alt="blank" className="img-fluid" src="assets/img/ranges.jpg" />
                                <h6 className="my-0">Ranges</h6>
                            </div>
                            <div className="col-6 text-center">
                                <img alt="blank" className="img-fluid" src="assets/img/Bosch-L1-Dishwasher-304644783.jpg" />
                                <h6 className="my-0">Dishwashers</h6>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-6 text-center">
                                <img alt="blank" className="img-fluid" src="assets/img/microwaves.jpg" />
                                <h6 className="my-0">Microwaves</h6>
                            </div>
                            <div className="col-6 text-center">
                                <img alt="blank" className="img-fluid" src="assets/img/cooktops.jpg" />
                                <h6 className="my-0">Cooktops</h6>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-6 text-center">
                                <img alt="blank" className="img-fluid" src="assets/img/wall-ovens.jpg" />
                                <h6 className="my-0">Wall Ovens</h6>
                            </div>
                            <div className="col-6 text-center">
                                <img alt="blank" className="img-fluid" src="assets/img/range-hoods.jpg" />
                                <h6 className="my-0">Range Hoods</h6>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-6 text-center">
                                <img alt="blank" className="img-fluid" src="assets/img/freezers-icemakers.jpg" />
                                <h6 className="my-0">Freezers &amp; Ice Makers</h6>
                            </div>
                            <div className="col-6 text-center">
                                <img alt="blank" className="img-fluid" src="assets/img/small-appliances.jpg" />
                                <h6 className="my-0">Small Appliances</h6>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-6 text-center">
                                <img alt="blank" className="img-fluid" src="assets/img/2019-SBF-Floor-Care-Savings-Upright-Vacuum.png" />
                                <h6 className="my-0">Vacuums &amp; Floor Care</h6>
                            </div>
                            <div className="col-6 text-center">
                                <img alt="blank" className="img-fluid" src="assets/img/refrigerators.jpg" />
                                <h6 className="my-0">Refrigerators</h6>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col text-center">
                                <img alt="blank" className="img-fluid" src="assets/img/HD-protection-plan-MOB-v2.png" /></div>
                        </div>
                        <div className="row mb-2">
                            <div className="col text-center">
                                <img alt="blank" className="img-fluid" src="assets/img/12-2018-TED-6mo-credit-offer-MOB.jpg" /></div>
                        </div>
                    </section>
                </section>
            </div>
        )
    }
}
