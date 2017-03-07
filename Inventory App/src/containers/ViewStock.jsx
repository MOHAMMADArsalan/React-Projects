import * as React from "react";
import { connect } from "react-redux"
import { AuthActions, ProductActions } from "./../store/actions/index.js";
import { NavBar, ReportTable } from "./../components/index"
//connet container with redux configiration
function mapStateToProps(state) {
    return {
        stock: state.productReducer.stock
    }
}
function mapDispatchToProps(dispatch) {
    return {
        logout: () => { dispatch(AuthActions.logout()) },
        getStock: () => { dispatch(ProductActions.getStock()) }
    }
}

class StockDetail extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    
    componentDidMount() {
        this.props.getStock()
    }
    
    render() {
        return (
            <div>
                <NavBar logout={this.props.logout} />
                <h1>Stock  Detail</h1>
                <ReportTable headers={this.props.stock.headers} type="stock" store={this.props.stock.value} />
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StockDetail)