import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

import { ReportFrom, DetailForm } from "./index"
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
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <RaisedButton
                label="Add"
                onClick={() => { console.log("2222222222222222222ssssssssssssssss", this.props.detailModel); this.props.addReport(this.props.type, this.props.detailModel) }}
                primary={true}
                keyboardFocused={true}
            />,
            this.props.state.isLoading && <CircularProgress size={20} style={{ top: 10, right: 5, left: 5 }} />
        ];
        return (
            <div style={{ paddingTop: 20 }}
            >
                <Dialog
                    title={'Add ' + this.props.type}
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                >
                    {!this.props.detailModel ? <ReportFrom
                        state={this.props.state}
                        addReport={this.props.addReport}
                        inputHandler={this.props.inputHandler}
                        type={this.props.type}
                    /> : <DetailForm
                            addReport={this.props.addReport}
                            selectedStore={this.props.selectedStore}
                            dateHandler={this.props.dateHandler}
                            storeKey={this.props.storeKey} store={this.props.store}
                            selectedProduct={this.props.selectedProduct}
                            productKey={this.props.productKey}
                            products={this.props.products}
                            inputHandler={this.props.inputHandler}

                        />}
                </Dialog>
            </div>
        );
    }
}