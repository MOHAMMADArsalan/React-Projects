import * as React from "react";
import { NotificationComponent } from "./../components/index.js"

class Notification extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="wrapper">
                <NotificationComponent />
            </div>
        )
    }
}
export default Notification;