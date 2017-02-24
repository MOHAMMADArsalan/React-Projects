import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
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
export default class DialogExampleScrollable extends React.Component {
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
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
            />,
        ];

        const radios = [];
        for (let i = 0; i < 30; i++) {
            radios.push(
                <RadioButton
                    key={i}
                    value={`value${i + 1}`}
                    label={`Option ${i + 1}`}
                    style={styles.radioButton}
                />
            );
        }

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
                    <form>
                        <TextField id="" name="productName" type="text" hintText="Please Enter Product Name" fullWidth style={{ marginBottom: 20, marginTop: 20 }} onChange={this.InputHandler} />
                        <TextField id="" name="startBidAmount" type="number" hintText="Please Enter Start Bid Amount" fullWidth style={{ marginBottom: 20 }} onChange={this.InputHandler} />
                        <TextField id="" name="Category" type="text" hintText="Please Enter Product Name" fullWidth style={{ marginBottom: 20 }} onChange={this.InputHandler} />
                        <TimePicker pedantic="true" name="startTime"  fullWidth style={{ marginBottom: 20 }} onChange={this.InputHandler}   hintText="24hr Format" />
                        <TimePicker pedantic="true" name="endTime" fullWidth style={{ marginBottom: 20 }} onChange={this.InputHandler}  hintText="24hr Format" />
                    </form>
                </Dialog>
            </div>
        );
    }
}