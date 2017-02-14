import * as React from "react";
import { Link } from "react-router";
import { PRODUCTS } from "./../ProductsData.js";
import { Copy } from "./../components/index.js"
class Index extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (<div>
            <Copy />
            <p><Link to="/cart" className="btn btn-danger">Cart</Link></p>
            <div>
                {PRODUCTS.map(picture => (
                    <Link key={picture.id}
                        to={{
                            pathname: `/products/${picture.id}`,
                            state: {
                                modal: true,
                                returnTo: this.props.location.pathname
                            }
                        }
                        }>
                        <img style={{ margin: 10 }} src={picture.src} height="100" />
                    </Link>
                ))}
            </div>
        </div>)
    }
}
export default Index; 