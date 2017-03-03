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
            <DropDownList name="report"
                value={props.state.reportName}
                options={props.reports}
                selectedReport={props.selectedReport} />
            <TextField type="text" name="contactNo"
                hintText="Please Enter Contact No"
                fullWidth style={{ marginBottom: 20, marginTop: 20 }}
                onChange={props.inputHandler}
            />
            <TextField type="text" name="desc"
                hintText="Please Enter Details Description about Report"
                fullWidth style={{ marginBottom: 20 }}
                multiLine={true}
                rows={2}
                rowsMax={4}
                onChange={props.inputHandler}
            />
            {(props.state.reportName === ('Crime Report') || props.state.reportName === 'Missing Report') 
            && <TextField type="file" name="image" onChange={props.inputHandler}
                fullWidth style={{ marginBottom: 20 }}
            />}
            <DropDownList name="city" value={props.state.cityName} options={props.citiesArray} selectedReport={props.selectedCity} />
            <br />
            <br />
            {/*<RaisedButton label="Submit Report" type="button" primary={true} onClick={props.addReport}/>*/}
            {/*{props.isLoading && <CircularProgress size={30} style={{ top: 10, left: 10 }} />}*/}
        </form>
    )
}

export default ReportFrom;