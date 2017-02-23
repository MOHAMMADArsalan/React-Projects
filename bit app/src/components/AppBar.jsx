import * as React from "react";
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton"
const NavBar = () => (
    <AppBar
        title="Bidding App"
        iconElementRight={
            <div>
                <FlatButton label="Signin" labelStyle={{ color: 'white' }} />
                <FlatButton label="Signup"  labelStyle={{ color: 'white' }}/>
            </div>
        }
    />
);

export default NavBar;