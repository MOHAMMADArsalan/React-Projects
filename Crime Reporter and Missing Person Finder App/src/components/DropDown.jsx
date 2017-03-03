import React, { Component } from "react"
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

const DropDownList = (props) => {
    return (
        <DropDownMenu value={props.value} style={styles.width} name={props.name} onChange={props.selectedReport}>
            <MenuItem value={1} label="Select One Report" disabled={true} primaryText="Select One Report" />
            {props.options.map((value, index) => {
                return <MenuItem value={value} label={value} primaryText={value} key={index} />
            })}
        </DropDownMenu>
    )
}

DropDownList.PropTypes = {
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    options: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    selectedReport: React.PropTypes.func.isRequired
}

export default DropDownList;