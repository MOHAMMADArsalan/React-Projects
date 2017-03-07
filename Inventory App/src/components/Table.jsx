import React, { Component } from "react";
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn }
    from 'material-ui/Table';
import { DropDownList } from "./index.js";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Toggle from 'material-ui/Toggle';
import Checkbox from 'material-ui/Checkbox';

import LoadingHOC from "./../HOC/LoadingHoc.jsx"
class ReportTable extends Component {
    constructor() {
        super()
    }
    render() {
        let {store, headers, type} = this.props
        return (
            <Table>
                <TableHeader>
                    {<TableRow>
                        {Object.keys(headers).map((val) => {
                            return <TableHeaderColumn key={val} >{val}</TableHeaderColumn>

                        })}
                    </TableRow>}
                </TableHeader>
                <TableBody displayRowCheckbox={false} >
                    {type !== 'stock' &&
                        Object.keys(store).map((val) => {
                            let { productName, quantity, date, storeName, unitPrice} = store[val];
                            return <TableRow key={val}>
                                <TableRowColumn>{productName}</TableRowColumn>
                                <TableRowColumn>{storeName}</TableRowColumn>
                                <TableRowColumn>{quantity}</TableRowColumn>
                                <TableRowColumn>{unitPrice}</TableRowColumn>
                                <TableRowColumn>{date}</TableRowColumn>
                            </TableRow>
                        })
                    }
                    {type == 'stock' &&
                        Object.keys(store).map((val) => {
                            console.log(store[val], "22222222222222222222222222")
                            return <TableRow key={val}>
                                {Object.keys(store[val]).map((data) => {
                                  return  <TableRowColumn key={data}>{data}</TableRowColumn>

                                })}

                            </TableRow>
                        })
                    }
                </TableBody>
            </Table>
        )
    }
}
export default ReportTable;
// export default LoadingHOC('store')(ReportTable)