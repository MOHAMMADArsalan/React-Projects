import * as React from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { App, Cart, Checkout, Modal, Product, Index } from "./../containers/index.js"

import {PRODUCTS} from "./../ProductsData.js";
import { Heading, Copy } from "./../components/index.js"

let cartItems = {};
let addToCart = (id) => {
    if (cartItems[id]) cartItems[id] += 1;
    else cartItems[id] = 1;
}
console.log("PRODUCTS", PRODUCTS)
let routes = (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Index} />
            <Route path="/products/:id" component={Product}
                addToCart={addToCart}
                products={PRODUCTS} />
            <Route path="/cart" component={Cart}
                cartItems={cartItems} products={PRODUCTS} />
        </Route>
        <Route path="checkout" component={Checkout}
            cartItems={cartItems} products={PRODUCTS} />
    </Router>
)
export default routes;