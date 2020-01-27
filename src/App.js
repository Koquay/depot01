import React, { Component } from 'react';
import './App.css';
import store from './redux/store';
import { Provider } from "react-redux";
import Header from './components/layut/header/Header';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from './components/layut/footer/Footer';
import Home from './components/home/Home';
import Appliances from './components/appliances/Appliances';
import Brand from './components/brand/Brand';
import SelectedProduct from './components/products/SelectedProduct';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import { restoreUser } from "./components/user/UserAction";

class App extends Component { 
  constructor() {
    super();
    restoreUser(store.dispatch);
  }

  render() {
    return (
      <Provider store={store}>
      <Router>
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/appliances' component={Appliances} />        
        <Route exact path='/brand/:brand' component={Brand} />        
        <Route exact path='/selected-product/:id' component={SelectedProduct} />        
        <Route exact path='/cart' component={Cart} />   
        <Route exact path='/checkout' component={Checkout} />   
                     
        <Footer />
      </Router>
    </Provider>
    )
  }
}

export default App;