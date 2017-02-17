import * as React from "react";

class Main extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <div className="main-container">
            {this.props.children}
        </div>
    }
}
export default Main;