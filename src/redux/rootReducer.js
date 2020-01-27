import { combineReducers } from "redux";
import { FooterReducer } from "../components/layut/footer/FooterReducer";
import { HeaderReducer } from "../components/layut/header/HeaderReducer";
import { ErrorReducer } from "../components/error/ErrorReducer";
import { UserReducer } from "../components/user/UserReducer";
import { AppliancesReducer } from "../components/appliances/AppliancesReducer";
import { ProductsReducer } from "../components/products/ProductsReducer"; 
import { CartReducer } from "../components/cart/CartReducer";
import { CheckoutReducer } from "../components/checkout/CheckoutReducer";
import { MessageReducer } from "../components/util/message/MessageReducer";

export default combineReducers({
    footer: FooterReducer,
    header: HeaderReducer,
    errors: ErrorReducer,
    user: UserReducer,
    appliances: AppliancesReducer,
    products: ProductsReducer,
    cart: CartReducer,
    checkout: CheckoutReducer,    
    messages:MessageReducer
})