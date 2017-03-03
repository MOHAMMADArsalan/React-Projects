// React 
import * as React from "react";

// custom Component
import { ReportFrom, Modal, ReportTable } from "./index.js";

// material UI
import { Card } from "material-ui/Card";

import { GridList, GridTile } from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';


const styles = {
    marginRight10px: {
        marginRight: "10px"
    }
}
const statusArray = ['Working', 'Will Work','Completed']
class DashboardComponent extends React.Component {
    constructor() {
        super();
    }
    openDialog = () => {
        this.refs.dialog.handleOpen();
    }
    componentWillReceiveProps(nextProps) {
        if (!nextProps.state.isLoading && nextProps.state.isRegisted) {
            this.refs.dialog.handleClose();
        }
    }
    render() {
        return (
            <div style={{ marginTop: 20 }}>
                
                {this.props.currentUser.type == 2 && <RaisedButton label="Add Report" primary={true} style={styles.marginRight10px} onClick={this.openDialog} />}
                {/*<RaisedButton label="Add Complain" primary={true} style={styles.marginRight10px} />
                <RaisedButton label="Add Missing Report" primary={true} style={styles.marginRight10px} />*/}
                <div style={{ padding: 20, maxWidth: "800px", margin: '0 auto', marginTop: '25px' }} >
                    <Modal selectedReport={this.props.selectedReport} ref="dialog"
                        selectedCity={this.props.selectedCity}
                        state={this.props.state}
                        inputHandler={this.props.inputHandler}
                        addReport={this.props.addReport}
                    />
                </div>
                <ReportTable 
                reports={this.props.reports} 
                type={this.props.currentUser.type} 
                inputHandler={this.props.inputHandler}
                saveStatus={this.props.saveStatus}
                />
            </div>

        )
    }
}
export default DashboardComponent;