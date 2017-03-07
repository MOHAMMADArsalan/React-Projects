import * as React from "react";
import { NavBar, DashboardComponent } from "./../components/index.js";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { connect } from "react-redux";
import { AuthActions, ProductActions } from "./../store/actions/index.js"
import { FirebaseService } from "./../services/firebaseService.js";

import { browserHistory } from "react-router"
function mapStateToProps(state) {
    return {
        user: state.authReducer.user,
        isLoggedIn: state.authReducer.isLoggedIn,
        products: state.productReducer.products,
        store: state.productReducer.store

    }
}
function mapDispatchToProps(dispatch) {
    return {
        logout: () => { dispatch(AuthActions.logout()) },
        getProduct: () => { dispatch(ProductActions.getProduct()) },
        getStore: () => { dispatch(ProductActions.getStore()) },
        getProductDetail: () => { dispatch(ProductActions.getProductDetail()) },
        getStoreDetail: () => { dispatch(ProductActions.getStoreDetail()) },
    }
}

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            desc: '',
            isLoading: false,
            isRegisted: false,
            storeKey: 1,
            productKey: 1

        };
        // this.addReport = this.addReport.bind(this)
    }

    allowExtension = {
        "png": "png",
        "jpg": "jpg",
        "gif": "gif",
        "jpeg": "jpeg",
    }
    fileName = ''
    addReport = (e, update) => {
        this.setState({ isLoading: true, isRegisted: false })
        let key = FirebaseService.getPushKey("reports").key;
        let multipath = {};
        let { name, manufacturer, desc, location} = this.state;
        let obj = { name, manufacturer, desc, location }
        // delete obj['user']
        // delete obj['isLoading']
        // delete obj['isRegisted']
        let path = e == 'Store' ? "stores" : "product"
        if (update) {
            let { productName, storeName, date, unitPrice, quantity, total } = this.state;
            let newObj = { productName, storeName, date, unitPrice, quantity: Number(quantity), total }
            if (path === 'product') {
                newObj["total"] = total ? total : 0;
                multipath[`product-detail/${this.state.productKey}/${this.state.storeKey}`] = newObj;
                multipath[`product/${this.state.productKey}/total`] = newObj["total"] + Number(quantity);
                multipath[`stock/${this.state.productKey}/productName`] = productName
                multipath[`stock/${this.state.productKey}/${storeName}`] = newObj["total"] + Number(quantity);
            } else {
                if (this.state.total == 0 || this.state.total == undefined) {
                    alert("Stock has been empty")
                    this.setState({ isLoading: false })

                    return;
                }
                multipath[`sales-detail/${this.state.storeKey}/${key}`] = newObj;
                multipath[`product/${this.state.productKey}/total`] = total - Number(quantity);
                multipath[`stock/${this.state.productKey}/productName`] = productName
                multipath[`stock/${this.state.productKey}/${storeName}`] = newObj["total"] - Number(quantity);
                
            }
        } else {
            if (path === 'product') {
                obj['total'] = 0
                multipath[`${path}/${key}`] = obj;
            } else {
                multipath[`${path}/${key}/name`] = obj.name;
                multipath[`${path}/${key}/location`] = obj.location;
            }
        }
        FirebaseService.saveMultipath(multipath).then(() => {
            this.setState({ isLoading: false, isRegisted: true })
            setTimeout(() => {
                this.setState({ isLoading: false, isRegisted: false })
            }, 10)
        }, (err) => { console.log("ERROR: ", err) })

    }
    selectReportHandler = (event, index, value) => {
        this.setState({ reportName: value })
    }
    selectCityHandler = (event, index, value) => {
        this.setState({ cityName: value })
    }
    logout() {
        this.props.logout()
    }

    componentWillMount() {
        if (!Object.keys(this.props.user).length) {
            let user = JSON.parse(localStorage.getItem("inventort-app"));
            user = JSON.parse(user);
            this.setState({
                user: user
            })
        }
    }
    inputHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    componentWillReceiveProps(newProps) {
        if (!newProps.isLoggedIn && !localStorage.getItem("inventort-app")) {
            console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
            browserHistory.push('/signin')
        }
    }
    componentDidMount() {
        this.props.getProduct();
        this.props.getStore();
        // this.props.getProductDetail()
        // this.props.getStoreDetail()
    }
    changeStatus = (status, key, uuid) => {
        let multipath = {};
        multipath[`user-reports/${uuid}/${key}/status`] = status;
        multipath[`reports/${key}/status`] = status;
        FirebaseService.saveMultipath(multipath).then(() => {
            console.log("Status changed")
        }, (err) => { console.log("ERROR: ", err) })
    }
    doneReport = (completed, key, uuid) => {
        let multipath = {};
        multipath[`user-reports/${uuid}/${key}/completed`] = !completed;
        multipath[`reports/${key}/completed`] = !completed;
        FirebaseService.saveMultipath(multipath).then(() => {
            console.log("Status changed")
        }, (err) => { console.log("ERROR: ", err) })

    }
    selectedStore = (e, index, value) => {
        this.setState({ storeName: this.props.store[value].name, storeKey: value })
    }
    selectedProduct = (e, index, value) => {
        this.setState({ productName: this.props.products[value].name, productKey: value, total: this.props.products[value].total })
    }
    dateHandler = (e, date) => {
        let fullDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        this.setState({
            date: fullDate
        })
    }
    render() {
        return (
            <div>
                <NavBar logout={this.props.logout} />
                <DashboardComponent
                    changeStatus={this.changeStatus}
                    inputHandler={this.inputHandler}
                    currentUser={Object.keys(this.props.user).length > 0 ? this.props.user : this.state.user}
                    selectedReport={this.selectReportHandler}
                    selectedCity={this.selectCityHandler}
                    state={this.state}
                    addReport={this.addReport}
                    changeStatus={this.changeStatus}
                    doneReport={this.doneReport}
                    store={this.props.store}
                    selectedStore={this.selectedStore}
                    storeKey={this.state.storeKey}
                    dateHandler={this.dateHandler}
                    selectedProduct={this.selectedProduct}
                    productKey={this.state.productKey}
                    products={this.props.products}
                />

            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);