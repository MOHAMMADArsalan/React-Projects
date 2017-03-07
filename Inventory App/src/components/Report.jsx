import React, { Component } from "react"
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import CircularProgress from 'material-ui/CircularProgress';
import { DropDownList } from "./index.js"
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
    radioButton: {
        marginTop: 16,
    },
    width: {
        width: "100%"
    }
};

const ReportFrom = (props) => {
    return (
        <form>
            <TextField type="text" name="name"
                hintText={'Please Enter' + props.type + "Name"}
                fullWidth style={{ marginBottom: 20, marginTop: 20 }}
                onChange={props.inputHandler}
            />
           { props.type == 'Store' && <TextField type="text" name="location"
                hintText={'Please Enter Store location'}
                fullWidth style={{ marginBottom: 20, marginTop: 20 }}
                onChange={props.inputHandler}
            />}
            {props.type == 'Product' && <TextField type="text" name="manufacturer"
                hintText={'Please Enter Manufacturer'}
                fullWidth style={{ marginBottom: 20, marginTop: 20 }}
                onChange={props.inputHandler}
            />}
            {props.type == 'Product' && <TextField type="text" name="desc"
                hintText="Please Enter Details Description about Product"
                fullWidth style={{ marginBottom: 20 }}
                multiLine={true}
                rows={2}
                rowsMax={4}
                onChange={props.inputHandler}
            />}

            <br />
            <br />
            {/*<RaisedButton label="Submit Report" type="button" primary={true} onClick={props.addReport}/>*/}
            {/*{props.isLoading && <CircularProgress size={30} style={{ top: 10, left: 10 }} />}*/}
        </form>
    )
}

export default ReportFrom;