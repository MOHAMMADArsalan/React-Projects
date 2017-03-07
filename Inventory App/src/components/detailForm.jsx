import React, { Component } from "react"
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import CircularProgress from 'material-ui/CircularProgress';
import { DropDownList } from "./index.js"
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
const styles = {
    radioButton: {
        marginTop: 16,
    },
    width: {
        width: "100%"
    }
};

const DetailForm = (props) => {
    return (
        <form>
            <DropDownList name="store" selected={props.selectedStore} value={props.storeKey} options={props.store} style={{ marginBottom: 20 }}/>
            <DropDownList name="product" selected={props.selectedProduct} value={props.productKey} options={props.products} style={{ marginBottom: 20 }}/>
            <DatePicker id="DatePicker" hintText="Please select Date" name="date" minDate={new Date()} fullWidth style={{ marginBottom: 20 }} onChange={props.dateHandler}
            />
            <TextField type="number" name="quantity"
                hintText={'Please Enter Quantity'}
                fullWidth style={{ marginBottom: 20, marginTop: 20 }}
                onChange={props.inputHandler}
            />
            <TextField type="number" name="unitPrice"
                hintText="Please Enter Unit Price"
                fullWidth style={{ marginBottom: 20 }}
                multiLine={true}
                rows={2}
                rowsMax={4}
                onChange={props.inputHandler}
            />

            <br />
            <br />
            {/*<RaisedButton label="Submit Report" type="button" primary={true} onClick={props.addReport}/>*/}
            {/*{props.isLoading && <CircularProgress size={30} style={{ top: 10, left: 10 }} />}*/}
        </form>
    )
}

export default DetailForm;