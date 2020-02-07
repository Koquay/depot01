import axios from 'axios';
import { Type } from '../../redux/types';

export const getProducts = (filters) => dispatch => {
    // console.log('filters', filters);

    const queryParams = createQueryParams(filters);

    // axios.get(`http://localhost:4200/api/brand/${queryParams}`)
    axios.get(`/api/brand/${queryParams}`)    
    .then(res => {        
        console.log('products', res.data)
        dispatch({
            type:Type.SET_PRODUCTS,
            payload: res.data
        })
        
        if(res.data.products.length === 0) {            
            dispatch({
                type: Type.INFO_MESSAGE,   
                payload: {info: 'No product found.'}             
            })
        }
    })
    .catch(err => {
        dispatch({
            type: Type.SET_SERVER_ERROR,
            payload: err.response.data
        })
    })
}

const createQueryParams = (bFilters) => {
    const brandFilters = bFilters.brandFilter.brands.filter(filter => filter.checked === true);
    const brands = [];
    for (let brand of brandFilters) {
        brands.push(brand.name)
    }

    const priceFilters = bFilters.priceFilter.priceRange.filter(filter => filter.checked === true);
    const priceRanges = [];
    for (let priceRange of priceFilters) {
        priceRanges.push(priceRange.range)
    }

    let sortFilter = bFilters.sortFilters.filters.filter(filter => filter.checked == true);
    console.log('sortFilter', sortFilter)

    const filters = JSON.stringify({
        brands: brands,
        priceRanges: priceRanges,
        rating: bFilters.ratingFilter.rating,
        sortFilter: sortFilter[0],
        pageNo: bFilters.pageNo,
        pageSize: bFilters.pageSize,
    })

    const queryParams = `?filters=${filters}`;
    console.log('queryParams', queryParams);
    return queryParams
}