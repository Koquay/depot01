import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Rating from 'material-ui-rating';
import { getProducts } from "./BrandActions";
import { brandFilters } from "./BrandFilters";
import { calcPercentSaved } from "../util/calcPercentSaved";
import MessageModal from '../util/message/MessageModal';
import { setBreadcrumb } from "../util/breadcrumb/BreadcrumbActions";
import './Brand.css'

class Brand extends Component {

    state = {
        breadcrumb: { label: '/ Brand ', url: '/brand' },

        pages: [],
        numberOfPages: 0,
        productCount: 0,
    }

    componentDidMount() {
        const brand = this.getBrand();
        this.addBrandToFilters(brand)
        this.getProducts();

        this.props.setBreadcrumb(this.state.breadcrumb)
    }

    getBrand = () => {
        let brand = this.props.match.params.brand;

        if(brand) {
            localStorage.setItem('brand', brand)
        } else {
            brand = localStorage.getItem('brand');
        }

        return brand;
    }

    getProducts = () => {
        this.props.getProducts(brandFilters)
    }

    addBrandToFilters = (brand) => {
        let brandFilter = brandFilters.brandFilter.brands.find(filter => filter.name === brand)
        if(brandFilter) {
            brandFilter.checked = true;
        }        
    }

    getPage = (pageNo) => {
        brandFilters.pageNo = pageNo;
        this.getProducts();
    }

    getPageByDirection = (direction) => {
        if (direction === '»') {
            if (brandFilters.pageNo < this.state.numberOfPages) {
                ++brandFilters.pageNo;
                this.getProducts();
            }
        } else if (direction === '«') {
            if (brandFilters.pageNo > 1) {
                --brandFilters.pageNo;
                this.getProducts();
            }
        }
    }

    filterProducts = (filter) => {
        brandFilters.pageNo = 1;

        if (filter.checked == true) {
            filter.checked = false
        } else {
            filter.checked = true;
        }

        this.getProducts();
    }

    onRatingChange = (value) => {
        brandFilters.pageNo = 1;
        brandFilters.ratingFilter.rating = value;
        this.getProducts();
    }

    onChange = (e) => {
        this.sortByProducts(e.target.value);
    }

    sortByProducts = (id) => {
        for (let filter of brandFilters.sortFilters.filters) {
            if (filter.id == id) {
                filter.checked = true;
            } else {
                filter.checked = false;
            }
        }

        this.getProducts();
    }

    render() {
        const { products, productCount } = this.props.products;

        this.state.numberOfPages = Math.ceil(productCount / brandFilters.pageSize);
        const pages = [];

        for (let i = 1; i <= this.state.numberOfPages; i++) {
            pages.push(i);
        }

        return (
            <div className="container-fluid px-cust-5" id="brand">
                <MessageModal />
                
                <section>
                    <div className="row">
                        <div className="col"><span id="numberOfItems">Shop <span id="count">{productCount}</span> products<br /></span>
                        </div>
                    </div>
                    <div className="row text-center mt-4 d-none d-lg-block">
                        <div className="col">
                            <img alt="blank" className="img-fluid"
                                src="../assets/img/Amana-Kitchen-Custom-AMA-Kitchen-Browse-Banner-447225.png" />
                        </div>
                    </div>
                </section>
                <section id="main-section" className="mt-5">
                    <div className="row">
                        <div className="col-2 d-none d-lg-block" id="sidebar" style={{ borderRight: "1px solid #c3c3c3" }}>
                            <div className="row mb-2">
                                <div className="col">
                                    <h5 className="font-weight-bold">{brandFilters.brandFilter.title}</h5>
                                    <div>
                                        {brandFilters.brandFilter.brands.map(filter => (
                                            <div key={filter.name} className="form-check mb-2">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox" id={"formCheck-1-" + filter.name}
                                                    name="brandFilter"
                                                    // value={filter.checked}
                                                    checked={filter.checked}
                                                    onChange={this.filterProducts.bind(this, filter)}
                                                />
                                                <label className="form-check-label" htmlFor="formCheck-1">{filter.name}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col">
                                    <h5 className="font-weight-bold">Price</h5>
                                    <div>
                                        {brandFilters.priceFilter.priceRange.map(filter => (
                                            <div key={filter.label} className="form-check mb-2">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox" id={"formCheck-2-" + filter.label}
                                                    name="priceFilter"
                                                    // value={filter.checked}
                                                    checked={filter.checked}
                                                    onChange={this.filterProducts.bind(this, filter)}
                                                />
                                                <label className="form-check-label" htmlFor="formCheck-1">{filter.label}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col" id="rating">
                                    <h5 className="font-weight-bold">Rating</h5>
                                    <div>
                                        <Rating
                                            value={brandFilters.ratingFilter.rating}
                                            max={5}
                                            size="large"
                                            onChange={(value) => this.onRatingChange(value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-10" id="main">
                            <div className="row">
                                <div className="col text-right">
                                    <select
                                        id="filters"
                                        className="py-2 px-5 border-outset"
                                        name="sortFilter"
                                        onChange={this.onChange}
                                    >
                                        {brandFilters.sortFilters.filters.map(filter => (
                                            <option key={filter.title} value={filter.id}>{filter.title}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="row mt-4">
                                {products.map(product => (
                                    <div key={product._id} className="col-12 col-lg-3 mb-3">
                                        <div className="row">
                                            <div className="col-5 col-lg-12 img-col">
                                                <Link to={"/selected-product/" + product._id}>
                                                    <img alt="blank" className="img-fluid img-1"
                                                        src={"../assets/img/" + product.image[0]} />
                                                    <img alt="blank" className="img-fluid img-2"
                                                        src={"../assets/img/" + product.image[1]} />
                                                </Link>
                                            </div>
                                            <div className="col-7 col-lg-12">
                                                <span>
                                                    <Link to={"/selected-product/" + product._id}>
                                                        <span className="mr-1 font-weight-bold">{product.brand}</span>
                                                        <span>{product.name}</span>
                                                    </Link>
                                                </span>
                                                <span className="d-block">
                                                    <span className="mr-1">Model#</span>
                                                    <span>{product.model}</span>
                                                </span>
                                                <span id="rating">
                                                    <Rating
                                                        value={product.rating}
                                                        max={5}
                                                        onChange={(value) => console.log(`Rated with value ${value}`)}
                                                    />
                                                </span>
                                                <span className="d-flex d-lg-flex align-items-center d-block">
                                                    <span className="mr-1">
                                                        <img alt="blank" className="img-fluid" src="../assets/img/special-buy1.png" />
                                                    </span>
                                                    <span className="d-inline-block">
                                                        <span className="mr-1 d-block font-weight-bold price">
                                                            ${product.price.toFixed(2)}
                                                        </span>
                                                        <span className="list-price d-block strikethrough">
                                                            {product.list_price ? '$' + product.list_price.toFixed(2) : ''}
                                                        </span>
                                                    </span>
                                                </span>
                                                <span className="saving">
                                                    {calcPercentSaved(product.price, product.list_price)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="row mt-2">
                                <div className="col d-flex justify-content-center">
                                    <nav>
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <a className="page-link"
                                                    onClick={this.getPageByDirection.bind(this, '«')}
                                                    aria-label="Previous">
                                                    <span aria-hidden="true">«</span>
                                                </a>
                                            </li>

                                            {pages.map(pageNo => (
                                                <li key={pageNo} className="page-item">
                                                    <a className="page-link"
                                                        onClick={this.getPage.bind(this, pageNo)}>
                                                        {pageNo}
                                                    </a>
                                                </li>
                                            ))}

                                            <li className="page-item">
                                                <a className="page-link"
                                                    onClick={this.getPageByDirection.bind(this, '»')}
                                                    aria-label="Next">
                                                    <span aria-hidden="true">»</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
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
    products: store.products
})

export default connect(mapStoreToComponent, { getProducts, setBreadcrumb })(Brand)