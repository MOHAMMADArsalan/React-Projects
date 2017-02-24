import * as React from "react";

import { AddProduct } from "./index.js";

class DashboardComponent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <AddProduct />
        )
    }
}
export default DashboardComponent;