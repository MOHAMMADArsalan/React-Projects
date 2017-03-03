import * as React from "react";
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";
import { Link } from "react-router"
const LoginAppBar = () => (
    <AppBar
        title="Crime App"
        iconElementRight={
            <div>
                <Link to="/home">
                    <FlatButton label="Home" labelStyle={{ color: 'white' }} />
                </Link>
                <Link to="/signin">
                    <FlatButton label="Signin" labelStyle={{ color: 'white' }} />
                </Link>
                <Link to="/signup">
                    <FlatButton label="Signup" labelStyle={{ color: 'white' }} />
                </Link>

            </div>
        }
    />
);

export default LoginAppBar;