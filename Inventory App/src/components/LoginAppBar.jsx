import * as React from "react";
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";
import { Link } from "react-router"
const LoginAppBar = () => (
    <AppBar
        title="Inventory App"
        iconElementRight={
            <div>
                
                <Link to="/signin">
                    <FlatButton label="Signin" labelStyle={{ color: 'white' }} />
                </Link>
               

            </div>
        }
    />
);

export default LoginAppBar;