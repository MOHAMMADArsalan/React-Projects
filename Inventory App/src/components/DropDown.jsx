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
        <DropDownMenu value={props.value} style={styles.width} name={props.name} onChange={props.selected}>
            <MenuItem value={1} label={props.name.toUpperCase()} disabled={true} primaryText={props.name.toUpperCase()} />
            {Object.keys(props.options).map((value, index) => {
                return <MenuItem value={value} label={props.options[value].name} primaryText={props.options[value].name} key={value} />
            })}
        </DropDownMenu>
    )
}

DropDownList.PropTypes = {
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    options: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    selected: React.PropTypes.func.isRequired
}

export default DropDownList;