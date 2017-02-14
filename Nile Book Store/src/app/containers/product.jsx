import * as React from "react";
import { Link } from "react-router"
class Product extends React.Component {
    constructor(props) {
        super(props);
        this.handleBuy = this.handleBuy.bind(this);
    }
    handleBuy() {
        this.props.route.addToCart(this.props.params.id)
    }
    render() {
        { console.log("this.props.router.products", this.props) }
        return (
            <div>
                <img src={this.props.route.products[this.props.params.id].src}
                    alt={this.props.route.products[this.props.params.id].title}
                    style={{ height: '80%' }} />
                <p>{this.props.route.products[this.props.params.id].title}</p>
                <Link
                    to={{
                        pathname: '/cart',
                        state: { productId: this.props.params.id }
                    }}
                    onClick={this.handleBuy}
                    className="btn btn-primary"
                    >Buy</Link>
            </div>
        )
    }
}
export default Product;