import * as React from "react";
import { DashboardComponent } from "./../components/index.js"
class Dashboard extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="wrapper">
                <DashboardComponent />
            </div>
        )
    }
}
export default Dashboard;