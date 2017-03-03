import React, { Component } from "react";
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn }
    from 'material-ui/Table';
import { DropDownList } from "./index.js";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";


export default class ReportTable extends Component {
    constructor() {
        super()
        this.state = {
            isEdit: false
        }
}
    onInputFocus = () =>{
        this.setState({
            isEdit: !this.state.isEdit
        })
    }
    render() {
        return (
            <Table>
                <TableHeader >
                    <TableRow>
                        <TableHeaderColumn >Report Type</TableHeaderColumn>
                        <TableHeaderColumn >City</TableHeaderColumn>
                        <TableHeaderColumn >Contact No</TableHeaderColumn>
                        <TableHeaderColumn >Description</TableHeaderColumn>
                        <TableHeaderColumn >Status</TableHeaderColumn>
                       { this.state.isEdit && <TableHeaderColumn>
                           <RaisedButton label="Cancel" type="button" primary={true} onClick={this.onInputFocus}/>
                           <RaisedButton label="Save" type="button" primary={true} onClick={this.props.saveStatus}/>
                           </TableHeaderColumn>}
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false} >
                      {Object.keys(this.props.reports).map((val)=>{
                         let  { reportName, cityName, contactNo, desc, status} = this.props.reports[val];
                        return  <TableRow key={val}>
                            <TableRowColumn>{reportName}</TableRowColumn>
                            <TableRowColumn>{cityName}</TableRowColumn>
                            <TableRowColumn>{contactNo}</TableRowColumn>
                            <TableRowColumn>{desc}</TableRowColumn>
                            <TableRowColumn>{
                                this.props.type === 2 ? status : 
                               <TextField type="text" name="status"
                                    fullWidth onChange={this.props.inputHandler} />
                                }
                            </TableRowColumn>
                        </TableRow>
                      })  
                      }
                </TableBody>
            </Table>
        )
    }
} 