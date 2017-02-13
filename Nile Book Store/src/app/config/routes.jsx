import * as React from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import App from "./../containers/app.jsx";
import Checkout from "./../containers/checkout.jsx";
import Cart from "./../containers/cart.jsx";
import Modal from "./../containers/modal.jsx";
import Product from "./../containers/product.jsx";
let routes = (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={App} />
            <Route path="products/:id" component={Product}
                addToCart={addToCart}
                products={PRODUCTS} />
            <Route path="cart" component={Cart}
                cartItems={cartItems} products={PRODUCTS} />
        </Route>
        <Route path="checkout" component={Checkout}
            cartItems={cartItems} products={PRODUCTS} />
    </Router>
)
export default routes;