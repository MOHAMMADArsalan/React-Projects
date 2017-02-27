import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import TextField from "material-ui/TextField";
import TimePicker from 'material-ui/TimePicker';
const styles = {
    radioButton: {
        marginTop: 16,
    },
};

/**
 * Dialog content can be scrollable.
 */
export default class Modal extends React.Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const startDate = new Date();
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                onClick={this.props.addProductHandler}
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
            />,
        ];
        return (
            <div style={{ paddingTop: 20 }}>
                <RaisedButton label="Scrollable Dialog" onTouchTap={this.handleOpen} />
                <Dialog
                    title="Scrollable Dialog"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                >
                    <form >
                        <TextField id="productName" name="productName" type="text" hintText="Please Enter Product Name" fullWidth style={{ marginBottom: 20, marginTop: 20 }} onChange={this.props.InputHandler} />
                        <TextField id="startBidAmount" name="startBidAmount" type="number" hintText="Please Enter Start Bid Amount" fullWidth style={{ marginBottom: 20 }} onChange={this.props.InputHandler} />
                        <TextField id="Category" name="category" type="text" hintText="Please Enter Category" fullWidth style={{ marginBottom: 20 }} onChange={this.props.InputHandler} />
                        <DatePicker id="DatePicker" hintText="Please select Date"  name="date" minDate={new Date()} fullWidth style={{ marginBottom: 20 }} onChange={this.props.dateHandler}
                        />
                        <TimePicker id="startTime" pedantic={true} name="startTime" fullWidth style={{ marginBottom: 20 }} onChange={this.props.startTimeHandler} hintText="Please select Start Time" />
                        <TimePicker id="endTime" pedantic={true} name="endTime" fullWidth style={{ marginBottom: 20 }} onChange={this.props.endTimeHandler} hintText="Please select End Time" />
                    </form>
                </Dialog>
            </div>
        );
    }
}