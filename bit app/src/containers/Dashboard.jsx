import * as React from "react";
class Dashboard extends React.Component {
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

export default Dashboard;