import React, { Component } from 'react';
import { connect } from "react-redux";
import Rating from 'material-ui-rating';
import classnames from 'classnames'
import { getProduct } from "../products/ProductsAction";
import { addToCart } from "../cart/CartActions";
import { calcPercentSaved } from "../util/calcPercentSaved";

import './SelectedProduct.css'

class SelectedProduct extends Component {
    state = {
        currentImage: '',
        displayImages: [],
        isBlack: false,
        isSteel: true,
        isWhite: false,
        selectionColor: '',
        product: null,
        productDimensions1: [],
        productDimensions2: [],
        productDetails1: [],
        productDetails2: [],

    }

    async componentDidMount() {
        const id = this.props.match.params.id;
        await this.props.getProduct(id);
        let { product } = this.props.products;

        if(!product) {
            product = JSON.parse(localStorage.getItem('product'));
            await this.setState({product})
            await this.addToCart();
        }
        await this.setState({ product: product },
            async () => {
                await this.setupProductDimensions();
                await this.setupProductDetails();
                console.log('state', this.state)
            })
    }

    addToCart = () => {
        this.props.addToCart(this.state.product)
    }

    setProductChoice = (color) => {
        const { product } = this.state;

        switch (color) {
            case 'Black':
                this.setState({ displayImages: product.images.black });
                this.setState({ isBlack: true });
                this.setState({ isSteel: false });
                this.setState({ isWhite: false });
                this.setState({ currentImage: product.images.black[0] });
                break;
            case 'Stainless Steel':
                this.setState({ displayImages: product.images.stainless });
                this.setState({ isBlack: false });
                this.setState({ isSteel: true });
                this.setState({ isWhite: false });
                this.setState({ currentImage: product.images.stainless[0] });
                break;
            case 'White':
                this.setState({ displayImages: product.images.white });
                this.setState({ isBlack: false });
                this.setState({ isSteel: false });
                this.setState({ isWhite: true });
                this.setState({ currentImage: product.images.white[0] });
                break;
            default:
                ;
        }

        this.setState({ selectionColor: color });
    }

    setupProductDimensions = () => {
        const { product } = this.state;

        if (product) {
            let dimensions = product.specifications.dimensions;
            let split = Math.ceil(dimensions.length / 2);

            const dimensions1 = dimensions.slice(0, split);
            this.setState({ productDimensions1: dimensions1 })

            const dimensions2 = dimensions.slice(split);
            this.setState({ productDimensions2: dimensions2 })
        }

    }

    setupProductDetails = () => {
        const { product } = this.state;

        if (product) {
            let details = product.specifications.details;
            let split = Math.ceil(details.length / 2);

            const details1 = details.slice(0, split);
            this.setState({ productDetails1: details1 })

            const details2 = details.slice(split);
            this.setState({ productDetails2: details2 })
        }
    }

    render() {
        console.log('props', this.props)
        const { product } = this.state;

        let currentImage = '';
        let productExists = false;
        let displayImages;
        const { isBlack, isSteel, isWhite, selectionColor } = this.state;
        const { productDetails1, productDetails2, productDimensions1, productDimensions2 } = this.state;

        if (product) {
            if (Object.keys(product).length > 0) {
                currentImage = this.state.currentImage ? this.state.currentImage : product.image[0];
                displayImages = this.state.displayImages.length ? this.state.displayImages : product.image;

                productExists = true;
            }
        }

        return (
            <div className="container-fluid px-cust-5">
                {productExists &&
                    <>
                        <section id="breadcrumb" className="section-padding py-0">
                            <div className="row">
                                <div className="col px-0">
                                    <ol className="breadcrumb bg-white mb-0">
                                        <li className="breadcrumb-item"><a href="/blank"><span>Home</span></a></li>
                                        <li className="breadcrumb-item"><a href="/blank"><span>Appliances</span></a></li>
                                        <li className="breadcrumb-item"><a href="/blank"><span>Ranges</span></a></li>
                                    </ol>
                                </div>
                            </div>
                        </section>
                        <section id="banner-section" className="section-padding py-0">
                            <div className="row d-none d-md-block mb-2">
                                <div className="col">
                                    <span>
                                        <span>Model #</span>
                                        <span className="ml-1">{product.model}</span>
                                    </span>
                                    <span className="ml-4">
                                        <span>Internet #</span>
                                        <span className="ml-1">300128445</span>
                                    </span>
                                    <span className="ml-4">
                                        <span>Store SO SKU #</span>
                                        <span className="ml-1">{product.sku}</span>
                                    </span>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-12 d-md-flex justify-content-around col-md-12 col-xl-2 order-3 order-xl-0">
                                    <div className="row d-flex d-md-flex justify-content-center">
                                        {displayImages.map(image => (
                                            <div key={image} className="col-3 col-xl-12 mb-2">
                                                <div className="card">
                                                    <a data-toggle="modal" data-target="#displayImageModal">
                                                        <img alt="blank" className="img-fluid card-img-top w-100 d-block"
                                                            src={"../assets/img/" + image} />
                                                    </a>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                                <div className="col-12 text-center offset-xl-0 offset-md-2 col-md-8 col-xl-5 order-2 order-xl-0">
                                    <img alt="blank" className="img-fluid" src={"../assets/img/" + currentImage} />
                                </div>
                                <div className="col-12 col-md-12 col-xl-5 order-3" id="prod-desc">
                                    <div className="row">
                                        <div className="col">
                                            <span id="brand">
                                                <strong> {product.brand} </strong>
                                                <i className="fa fa-chevron-right ml-1 c-orange"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <span id="name"> {product.name} </span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col c-orange">
                                            <Rating
                                                value={product.rating}
                                                max={5}
                                                size="large"
                                                onChange={(value) => this.onRatingChange(value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="row d-none d-md-block">
                                        {product.feature.map(feature => (
                                            <div key={feature} className="col">
                                                <ul className="px-4 my-2">
                                                    <li className="mb-1">{feature}</li>
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="row">
                                        <div className="col pr-0 mln-pt5">
                                            <span className="mr-1">
                                                <img alt="blank" className="img-fluid" src="../assets/img/special-buy1.png" />
                                            </span>
                                            <span id="price" className="mr-1">${product.price.toFixed(2)}</span>
                                            <span className="mr-1 strike-through">${product.list_price.toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            {calcPercentSaved(product.price, product.list_price)}
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col"><span></span></div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col">
                                            <span>
                                                <span>Color/Finish:</span>
                                                <span className="ml-2 font-weight-bold">{selectionColor}</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <a onClick={this.setProductChoice.bind(this, 'Black')}>
                                                <img
                                                    alt="blank"
                                                    className={classnames("img-fluid", {
                                                        'blackImgClass': isBlack
                                                    })}
                                                    src="../assets/img/option-black.jpg"
                                                />
                                            </a>

                                            <a onClick={this.setProductChoice.bind(this, 'Stainless Steel')}>
                                                <img
                                                    alt="blank"
                                                    className={classnames("img-fluid ml-2", {
                                                        'stainlessImgClass': isSteel
                                                    })}
                                                    src="../assets/img/option-stainless.jpg"
                                                />
                                            </a>
                                            <a onClick={this.setProductChoice.bind(this, 'White')}>
                                                <img
                                                    alt="blank"
                                                    className={classnames("img-fluid ml-2", {
                                                        'whiteImgClass': isWhite
                                                    })}
                                                    src="../assets/img/option-white.jpg"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col primary-green" id="free-delivery"><i className="fa fa-truck mr-2"></i><span
                                            className="primary-green">Free Delivery</span></div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col">
                                            <button className="btn btn-primary button" id="btn-add-to-cart" type="button"
                                                onClick={this.addToCart}>
                                                <strong>Add to Cart</strong>
                                                <i className="fa fa-cart-plus ml-2 f-1pt3"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row mt-3 d-none d-sm-block">
                                        <div
                                            className="col d-flex justify-content-start justify-content-sm-center justify-content-md-start justify-content-xl-center">
                                            <a className="c-blue" href="/blank"><img alt="blank" className="img-fluid mr-2"
                                                src="../assets/img/pip-icons-share.png" /><span>Share&nbsp;</span></a><a className="c-blue mx-3"
                                                    href="/blank"><img alt="blank" className="img-fluid mr-2" src="../assets/img/pip-icons-heart.png" /><span>Save to
                                Favorites</span></a>
                                            <a className="c-blue" href="/blank"><img alt="blank" className="img-fluid mr-2"
                                                src="../assets/img/pip-icons-print.png" /><span>Print</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="what-we-offer" className="mt-5 section-padding">
                            <div className="row">
                                <div className="col"><span className="section-header">What We Offer</span></div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-12 col-md-6 col-xl-3 mb-2">
                                    <div className="row">
                                        <div className="col-2"><img alt="blank" className="img-fluid" src="../assets/img/pip-icons-nstallation.png" /></div>
                                        <div className="col"><small>Available</small>
                                            <h5 className="font-weight-bold">INSTALLATION</h5>
                                            <p>Installation available on most appliances when you purchase required parts</p><a
                                                className="c-blue" href="/blank">Installation Requirements</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-xl-3 mb-2">
                                    <div className="row">
                                        <div className="col-2"><img alt="blank" className="img-fluid" src="../assets/img/pip-icons-haulaway.png" /></div>
                                        <div className="col"><small>Move or</small>
                                            <h5 className="font-weight-bold"><strong>HAUL AWAY</strong></h5>
                                            <p>We'll move your old appliance to another room in your house, or haul it away for $20</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-xl-3 mb-2">
                                    <div className="row">
                                        <div className="col-2"><img alt="blank" className="img-fluid" src="../assets/img/pip-icons-dollar.png" /></div>
                                        <div className="col"><small>Price Match</small>
                                            <h5 className="font-weight-bold"><strong>GUARANTEE</strong></h5>
                                            <p>We will match prices including shipping of any other online competitor</p><a className="c-blue"
                                                href="/blank">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-xl-3 mb-2">
                                    <div className="row">
                                        <div className="col-2"><img alt="blank" className="img-fluid" src="../assets/img/pip-icons-protect.png" /></div>
                                        <div className="col"><small>The Home Depot Protection Plan</small>
                                            <h5 className="font-weight-bold"><strong>LET'S PROTECT THIS</strong></h5>
                                            <p>Get 24/7 support and more with a Home Depot Protection Plan. 5-year and 3-year plans
                            available, starting at $40</p><a className="c-blue" href="/blank">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="product-overview" className="mt-4 section-padding d-none d-md-block">
                            <div className="row">
                                <div className="col"><span className="section-header">Product Overview</span></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-12 col-xl-6"><img alt="blank" className="img-fluid"
                                    src="../assets/img/300128445-electric-range-with-extra-large-oven-window.jpg" />
                                    <h5>30-inch Electric Range</h5>
                                    <p>When you feel like eating in tonight, our ranges make it easy to whip up hot meals or warm up the
                                        leftovers. With versatile cooking features right at your fingertips, you can bring more "mmm" to the
                                        table while getting more bang for your
                    buck.</p>
                                </div>
                                <div className="col-12 col-xl-6"><img alt="blank" className="img-fluid" src="../assets/img/300128445-bake-assist-temps.jpg" />
                                    <h5>Bake Assist Temps</h5>
                                    <p>These preset temperature settings make cooking even more convenient. Just select a temperature, press
                    start and let the oven do the rest.</p>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-12 col-md-6 col-xl-3"><img alt="blank" className="img-fluid"
                                    src="../assets/img/300128445-multiple-elements.jpg" />
                                    <h5>Versatile Cooktop</h5>
                                    <p>Our multiple element options provide up to 1,800 watts to help you cook more of your favorites at the
                    same time.</p>
                                </div>
                                <div className="col-12 col-md-6 col-xl-3"><img alt="blank" className="img-fluid"
                                    src="../assets/img/300128445-easy-touch-controls-plus.jpg" />
                                    <h5>Easy Touch Electronic Controls Plus</h5>
                                    <p>Quickly select bake or broil temperatures with these extra-large and easy-to-read electronic
                    controls.</p>
                                </div>
                                <div className="col-12 col-md-6 col-xl-3"><img alt="blank" className="img-fluid" src="../assets/img/300128445-large-capacity.jpg" />
                                    <h5>Large Oven Capacity</h5>
                                    <p>Large Oven Capacity gives you the space you need to make dinner and dessert at the same time.</p>
                                </div>
                                <div className="col-12 col-md-6 col-xl-3"><img alt="blank" className="img-fluid" src="../assets/img/300128445-temp-assure.jpg" />
                                    <h5>TEMP ASSURE Cooking System</h5>
                                    <p>Distributes heat throughout the entire oven to help comfort food favorites like mom's beef pot roast
                    taste just how you like them.</p>
                                </div>
                            </div>
                        </section>
                        <section id="specifications" className="mt-5 section-padding">
                            <div className="row">
                                <div className="col"><span className="section-header">Specifications</span></div>
                            </div>
                            <div className="row d-xl-flex align-items-xl-center mt-3">
                                <div className="col-12 text-center col-xl-3"><img alt="blank" className="img-fluid"
                                    src="../assets/img/Amana%20Electric%20Range%20in%20Stainless%20Steel-1.jpg" /></div>
                                <div className="col">
                                    <div className="row">
                                        <div className="col-6 text-left col-md-3 col-xl-3 mb-3">
                                            <hr className="py-0 w-25 ml-0 mb-2" />
                                            <h6 className="font-weight-bold">Size<br /></h6><span className="f-1pt3">30 in.</span>
                                        </div>
                                        <div className="col-6 text-left col-md-3 col-xl-3 mb-3">
                                            <hr className="py-0 w-25 ml-0 mb-2" />
                                            <h6 className="font-weight-bold"><strong>Surface Type</strong><br /></h6><span
                                                className="f-1pt3">Radiant</span>
                                        </div>
                                        <div className="col-6 text-left col-md-3 col-xl-3 mb-3">
                                            <hr className="py-0 w-25 ml-0 mb-2" />
                                            <h6 className="font-weight-bold"><strong>Range Type</strong><br /></h6><span
                                                className="f-1pt3">Freestanding</span>
                                        </div>
                                        <div className="col-6 text-left col-md-3 col-xl-3 mb-3">
                                            <hr className="py-0 w-25 ml-0 mb-2" />
                                            <h6 className="font-weight-bold"><strong>Cleaning Type</strong><br /></h6><span className="f-1pt3">Manual
                            Clean</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 text-left col-md-3 col-xl-3">
                                            <hr className="py-0 w-25 ml-0 mb-2" />
                                            <h6 className="font-weight-bold"><strong>No of Elements</strong><br /></h6><span
                                                className="f-1pt3">4</span>
                                        </div>
                                        <div className="col-6 text-left col-md-3 col-xl-3">
                                            <hr className="py-0 w-25 ml-0 mb-2" />
                                            <h6 className="font-weight-bold"><strong>Capacity (cu. ft.)</strong><br /></h6><span
                                                className="f-1pt3">4.8</span>
                                        </div>
                                        <div className="col-6 text-left col-md-3 col-xl-3">
                                            <hr className="py-0 w-25 ml-0 mb-2" />
                                            <h6 className="font-weight-bold"><strong>Features</strong><br /></h6><span
                                                className="f-1pt3">Broiler</span>
                                        </div>
                                        <div className="col-6 text-left col-md-3 col-xl-3">
                                            <hr className="py-0 w-25 ml-0 mb-2" />
                                            <h6 className="font-weight-bold"><strong>Features</strong><br /></h6><span className="f-1pt3">Built-In
                            Timer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <section id="dimensions" className="d-none d-md-block">
                                <div className="row mt-5">
                                    <div className="col">
                                        <h6 className="font-weight-bold">Dimensions</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 pr-0">
                                        <div className="table-responsive table-bordered">
                                            <table className="table table-bordered table-sm">
                                                <tbody>
                                                    {productDimensions1.map(dimension => (
                                                        <tr key={dimension.title}>
                                                            <td className="bg-eee w-50">{dimension.title}</td>
                                                            <td className="w-50">{dimension.value}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="col-6 pl-0">
                                        <div className="table-responsive table-bordered">
                                            <table className="table table-bordered table-sm">
                                                <tbody>
                                                    {productDimensions2.map(dimension => (
                                                        <tr key={dimension.title}>
                                                            <td className="bg-eee w-50">{dimension.title}</td>
                                                            <td className="w-50">{dimension.value}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section id="details" className="d-none d-md-block">
                                <div className="row mt-3">
                                    <div className="col">
                                        <h6 className="font-weight-bold">Details</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 pr-0">
                                        <div className="table-responsive table-bordered">
                                            <table className="table table-bordered table-sm">
                                                <tbody>
                                                    {productDetails1.map(detail => (
                                                        <tr key={detail.title}>
                                                            <td className="bg-eee w-50">{detail.title}</td>
                                                            <td className="w-50">{detail.value}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="col-6 pl-0">
                                        <div className="table-responsive table-bordered">
                                            <table className="table table-bordered table-sm">
                                                <tbody>
                                                    {productDetails2.map(detail => (
                                                        <tr key={detail.title}>
                                                            <td className="bg-eee w-50">{detail.title}</td>
                                                            <td className="w-50">{detail.value}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </section>
                    </>
                }
            </div>
        )
    }
}

const mapStoreToComponent = (store) => ({
    products: store.products,
    cart: store.cart
})

export default connect(mapStoreToComponent, { getProduct, addToCart })(SelectedProduct);