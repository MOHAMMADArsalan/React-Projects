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
        this.state = {
            isEdit: false
        }
    }
    handleChange = (currentStatus, key, uuid) => {
        let status = currentStatus === 'Will Work' ? 'Working' : 'Will Work'
        this.props.changeStatus(status, key, uuid)
    }
    showList() {
        if (this.props.filter === 'ALL') {
            return Object.keys(this.props.reports).map((val) => {
                let { reportName, cityName, contactNo, desc, status, completed} = this.props.reports[val];
                return <TableRow key={val}>
                    <TableRowColumn>{reportName}</TableRowColumn>
                    <TableRowColumn>{cityName}</TableRowColumn>
                    <TableRowColumn>{contactNo}</TableRowColumn>
                    <TableRowColumn>{desc}</TableRowColumn>
                    {this.props.currentUser && <TableRowColumn>{
                        this.props.type === 2 ? status :
                            <Toggle
                                defaultToggled={status === 'Will Work' ? false : true}
                                onToggle={() => { this.handleChange(status, val, this.props.reports[val]["reported-by"]) }}
                                labelPosition="right"
                                style={{ margin: 20 }}
                            />
                    }
                    </TableRowColumn>
                    }
                    {this.props.currentUser && <TableRowColumn>
                        <Toggle
                            defaultToggled={completed}
                            onToggle={() => { this.props.doneReport(completed, val, this.props.reports[val]["reported-by"]) }}
                            labelPosition="right"
                            style={{ margin: 20 }}
                        />
                    </TableRowColumn>}

                </TableRow>
            })
        } else {
            return Object.keys(this.props.reports).map((val) => {
                let { reportName, cityName, contactNo, desc, status, completed} = this.props.reports[val];
                if (cityName === this.props.filter) {
                    return <TableRow key={val}>
                        <TableRowColumn>{reportName}</TableRowColumn>
                        <TableRowColumn>{cityName}</TableRowColumn>
                        <TableRowColumn>{contactNo}</TableRowColumn>
                        <TableRowColumn>{desc}</TableRowColumn>
                        {this.props.currentUser && <TableRowColumn>{
                            this.props.type === 2 ? status :
                                <Toggle
                                    defaultToggled={status === 'Will Work' ? false : true}
                                    onToggle={() => { this.handleChange(status, val, this.props.reports[val]["reported-by"]) }}
                                    labelPosition="right"
                                    style={{ margin: 20 }}
                                />
                        }
                        </TableRowColumn>
                        }
                        {this.props.currentUser && <TableRowColumn>
                            <Toggle
                                defaultToggled={completed}
                                onToggle={() => { this.props.doneReport(completed, val, this.props.reports[val]["reported-by"]) }}
                                labelPosition="right"
                                style={{ margin: 20 }}
                            />
                        </TableRowColumn>}

                    </TableRow>
                }

            })
        }
    }
    render() {
        return (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn >Report Type</TableHeaderColumn>
                        <TableHeaderColumn >City</TableHeaderColumn>
                        <TableHeaderColumn >Contact No</TableHeaderColumn>
                        <TableHeaderColumn >Description</TableHeaderColumn>
                        {this.props.currentUser && <TableHeaderColumn >Working on</TableHeaderColumn>}
                        {this.props.currentUser && <TableHeaderColumn >Done</TableHeaderColumn>}
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false} >
                    {this.showList()}
                </TableBody>
            </Table>
        )
    }
} 

export default LoadingHOC('reports')(ReportTable)