import * as React from "react";
import { Link } from "react-router"
class Cart extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                {(Object.keys(this.props.route.cartItems).length == 0) ? <p>Your cart is empty</p> : ''}
                <ul>
                    {Object.keys(this.props.route.cartItems).map((item, index, list) => {
                        return <li key={index}>{this.props.route.products[item].title} - {this.props.route.cartItems[item]}</li>
                    })}
                </ul>
                <Link to="/checkout" className="btn btn-primary"> Checkout</Link>
                <Link to="/" className="btn btn-info"> Home</Link>
                <h1>Add to Cart</h1>
            </div>
        )
    }
}
export default Cart;