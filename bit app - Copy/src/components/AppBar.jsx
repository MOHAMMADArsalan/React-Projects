import * as React from "react";
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton"
const NavBar = (props) => (
    <AppBar
        title="Bidding App"
        iconElementRight={
            <div>
                <FlatButton label="Dashboard" labelStyle={{ color: 'white' }} />
                <FlatButton label="Logout" onClick={props.logout} labelStyle={{ color: 'white' }} />
            </div>
        }
    />
);

export default NavBar;