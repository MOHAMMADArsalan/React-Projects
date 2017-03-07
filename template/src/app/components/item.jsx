import React, { Component } from "react";

export default class Item extends Component {
    render() {
        return (
            <li>
                <a href="#"></a>
                <p>{this.props.name}</p>
            </li>

        )
    }
}
Item.PropTypes = {
    name: React.PropTypes.string.isRequired,
}