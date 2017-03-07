import * as React from "react";
import { connect } from "react-redux"
import { AuthActions, ProductActions } from "./../store/actions/index.js";
import { NavBar, ReportTable } from "./../components/index"
import { LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis } from 'recharts';
//connet container with redux configiration
function mapStateToProps(state) {
    return {
        storesDetail: state.productReducer.storesDetail,
        data: state.productReducer.data,
        twoKeyList: state.productReducer.twoKeyList
    }
}
function mapDispatchToProps(dispatch) {
    return {
        logout: () => { dispatch(AuthActions.logout()) },
        getStoreDetail: () => { dispatch(ProductActions.getStoreDetail()) }
    }
}

class StoreDetail extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    componentWillMount() {
        let { location } = this.props
        this.setState({
            key: location.query.key
        })
    }
    componentWillReceiveProps(newProps) {
    }
    componentDidMount() {
        this.props.getStoreDetail()
    }

    render() {
        var data = this.props.data;
        var result = regression('linear', data);
        var slope = result.equation[0];
        var yIntercept = result.equation[1];
        let headers = ["Product Name", "Store Name", "Quantity", "UnitPrice", "Date"]
        return (
            <div>
                <NavBar logout={this.props.logout} />
                <h1>Sale Detail</h1>
                <ReportTable headers={headers} type="store" store={this.props.storesDetail[this.state.key] ? this.props.storesDetail[this.state.key] : {}} />
                <div id="container">
                    <ResponsiveContainer>
                        <LineChart
                            width={400}
                            height={400}
                            data={this.props.twoKeyList}
                            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                        >
                            <XAxis dataKey="name" />

                            <CartesianGrid stroke="#f5f5f5" />
                            <Line type="monotone" dataKey="name" stroke="#ff7300" yAxisId={0} />
                            <Line type="monotone" dataKey="uv" stroke="#387908" yAxisId={1} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StoreDetail)