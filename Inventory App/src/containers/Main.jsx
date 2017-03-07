import * as React from "react";

export default class Main extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}