import * as React from "react";
import AppBar from "material-ui/AppBar";
import { Link } from "react-router"
import FlatButton from "material-ui/FlatButton"
const NavBar = (props) => (
    <AppBar
        title="Inventory App"
        iconElementRight={
            <div>
                <FlatButton label="Dashboard" labelStyle={{ color: 'white' }} />
                {/*<Link to="/dashboard/storedetail">
                    <FlatButton label="Store Detail" labelStyle={{ color: 'white' }} />
                </Link>*/}


                <FlatButton label="Logout" onClick={props.logout} labelStyle={{ color: 'white' }} />
            </div>
        }
    />
);

export default NavBar;