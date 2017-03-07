import * as React from "react";
import { TableComponent } from "./../components/index";

class Table extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="wrapper">
                <TableComponent />

            </div>
        )
    }
}
export default Table;