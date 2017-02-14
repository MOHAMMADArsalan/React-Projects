import * as React from "react";
import { Link } from "react-router"
class Checkout extends React.Component {
    constructor() {
        super();
        this.printInvoice = this.printInvoice.bind(this)
    }
    printInvoice() {
        window.print()
    }
    render() {
        let count = 0
        return (
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h1>Invoice</h1>
                    <button onClick={this.printInvoice} className="btn btn-danger" style={{ height: '35px', marginTop: '23px' }}>Print</button>
                </div>
                <table className="table table-bordered">
                    <tbody>
                        {Object.keys(this.props.route.cartItems).map((item, index, list) => {
                            count += this.props.route.cartItems[item]
                            return <tr key={item}>
                                <td>{this.props.route.products[item].title}</td>
                                <td>{this.props.route.cartItems[item]}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
                <p>Total: {count}</p>
            </div>
        )
    }
}
export default Checkout;