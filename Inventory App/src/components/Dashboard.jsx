// React 
import * as React from "react";
import { browserHistory } from "react-router"
// custom Component
import { ReportFrom, Modal, ReportTable, DropDownList, StoreList } from "./index.js";

// material UI
import { Card } from "material-ui/Card";

import { GridList, GridTile } from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';


const styles = {
    marginRight10px: {
        marginRight: "10px"
    }
}
const statusArray = ['Working', 'Will Work', 'Completed'];
const citiesArray = ["ALL", 'Los Angeles', 'Washington', 'Hartford', 'Chicago', 'Boston', 'Oxford', 'Denver', 'Beverly Hills', 'Phoenix', 'Atlanta']

class DashboardComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            cityName: 1,
            filter: "ALL",
            isDetailModel: false
        }
    }
    selectedCity = (event, index, value) => {
        this.setState({ cityName: value, filter: value })
    }
    openDialog = (type) => {
        this.setState({
            type,
            isDetailModel: false
        })
        this.refs.dialog.handleOpen();
    }
    openDetailDialog = (type) => {
        this.setState({
            isDetailModel: type + " Detail",
            type,
        })
        this.refs.dialog.handleOpen();
    }
    componentWillReceiveProps(nextProps) {
        if (!nextProps.state.isLoading && nextProps.state.isRegisted) {
            this.refs.dialog.handleClose();
        }


    }
    gotoStockDetail = () => {
        browserHistory.push('/dashboard/stockdetail')
    }
    render() {
        return (
            <div style={{ marginTop: 20 }}>
                <RaisedButton label="Add Store" primary={true} style={styles.marginRight10px} onClick={() => { this.openDialog('Store') }} />
                <RaisedButton label="Add Product" primary={true} style={styles.marginRight10px} onClick={() => { this.openDialog('Product') }} />
                <RaisedButton label="Add Sale Detail" primary={true} style={styles.marginRight10px} onClick={() => { this.openDetailDialog('Store') }} />
                <RaisedButton label="Add Product Detail" primary={true} style={styles.marginRight10px} onClick={() => { this.openDetailDialog('Product') }} />
                <RaisedButton label="View Stock" primary={true} style={styles.marginRight10px} onClick={() => { this.gotoStockDetail() }} />
                <div style={{ padding: 20, maxWidth: "800px", margin: '0 auto', marginTop: '25px' }} >
                    <Modal ref="dialog"
                        state={this.props.state}
                        addReport={this.props.addReport}
                        inputHandler={this.props.inputHandler}
                        type={this.state.type}
                        detailModel={this.state.isDetailModel}
                        selectedStore={this.props.selectedStore}
                        storeKey={this.props.storeKey}
                        store={this.props.store}
                        dateHandler={this.props.dateHandler}
                        selectedProduct={this.props.selectedProduct}
                        productKey={this.props.productKey}
                        products={this.props.products}
                    />
                    <StoreList store={this.props.store} />
                </div>
                {/*<ReportTable
                    type={this.props.currentUser.type}
                    currentUser={this.props.currentUser}
                    inputHandler={this.props.inputHandler}
                    changeStatus={this.props.changeStatus}
                    doneReport={this.props.doneReport}
                    filter={this.state.filter}
                />*/}
            </div>

        )
    }
}
export default DashboardComponent;