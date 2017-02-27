import * as React from "react";

import { AddProduct } from "./index.js";

class DashboardComponent extends React.Component {
    constructor() {
        super();
        // this.addProductMultipath = this.addProductMultipath.bind(this);
    }
    // addProductMultipath(multipath) {
    //     console.log("multipath: ",multipath)
    // }
    render() {
        console.log("currentUser",this.props.currentUser)
        return (
            <AddProduct  currentUser={this.props.currentUser}
            addPost={this.props.addPost}/>
        )
    }
}
export default DashboardComponent;