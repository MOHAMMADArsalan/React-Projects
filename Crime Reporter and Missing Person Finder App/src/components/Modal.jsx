import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

import { ReportFrom } from "./index"
const styles = {
    radioButton: {
        marginTop: 16,
    },
};

/**
 * Dialog content can be scrollable.
 */
const reports = ["Crime Report", "Complain Report", "Missing Report"];
const citiesArray = ['Los Angeles', 'Washington', 'Hartford', 'Chicago', 'Boston', 'Oxford', 'Denver', 'Beverly Hills', 'Phoenix', 'Atlanta']

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
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <RaisedButton
                label="Submit Report"
                onClick={this.props.addReport}
                primary={true}
                keyboardFocused={true}
            />,
            this.props.state.isLoading && <CircularProgress size={20} style={{ top: 10, right: 5, left: 5 }} />
        ];
        return (
            <div style={{ paddingTop: 20 }} 
            >
                <Dialog
                    title="Add Report"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                >
                    <ReportFrom selectedReport={this.props.selectedReport}
                        selectedCity={this.props.selectedCity}
                        state={this.props.state}
                        addReport={this.props.addReport} reports={reports}
                        citiesArray={citiesArray}
                        inputHandler={this.props.inputHandler}
                    />
                </Dialog>
            </div>
        );
    }
}