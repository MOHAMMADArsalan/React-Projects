import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import TextField from "material-ui/TextField";
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
                label="Register"
                onClick={this.props.addDonorHandler}
                primary={true}
                keyboardFocused={true}
            />,
        ];
        return (
            <div style={{ paddingTop: 20 }}>
                <RaisedButton label="Register Donor" onTouchTap={this.handleOpen} />
                <Dialog
                    title="Register Donor Form"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                >
                    <form >
                        <TextField id="Name" name="Name" type="text" hintText="Please Enter Name" fullWidth style={{ marginBottom: 20, marginTop: 20 }} onChange={this.props.InputHandler} />
                        <TextField id="Address" name="Address" type="test" hintText="Please Enter Address" fullWidth style={{ marginBottom: 20 }} onChange={this.props.InputHandler} />
                        <TextField id="ContactNo" name="ContactNo" type="text" hintText="Please Enter Contact No" fullWidth style={{ marginBottom: 20 }} onChange={this.props.InputHandler} />
                        <DatePicker id="DatePicker" hintText="Please select Date of Birth" name="date" minDate={new Date()} fullWidth style={{ marginBottom: 20 }} onChange={this.props.dateHandler}
                        />
                        <DropDownMenu value={this.props.bloodGroup} onChange={this.props.bloodGroupHandler} style={styles.width} name="bloodGroup">
                            <MenuItem value={1} label="Blood Group" disabled={true} primaryText="Blood Group"/>
                            <MenuItem value="A+" label="A+" primaryText="A+" />
                            <MenuItem value="B+" label="B+" primaryText="B+" />
                            <MenuItem value="AB+" label="AB+" primaryText="AB+" />
                            <MenuItem value="O+" label="O+" primaryText="O+" />
                            <MenuItem value="A-" label="A-" primaryText="A-" />
                            <MenuItem value="B-" label="B-" primaryText="B-" />
                            <MenuItem value="AB-" label="AB-" primaryText="AB-" />
                            <MenuItem value="O-" label="O-" primaryText="O-" />
                        </DropDownMenu>
                    </form>
                </Dialog>
            </div>
        );
    }
}