import * as React from "react";
import { UserComponent } from "./../components/index.js"
class User extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="wrapper">
                <UserComponent />
            </div>
        )
    }
}
export default User;