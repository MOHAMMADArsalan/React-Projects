import * as React from "react";
import { Link } from "react-router";
// material ui
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";

let NavLoginBar = () => {
    return (
        <AppBar
            title="upwork App"
            showMenuIconButton={false}
            iconElementRight={
                <div>
                    <Link to="/signin">
                        <FlatButton label="Signin" labelStyle={{ color: 'white' }} />
                    </Link>
                    <Link to="/signup">
                        <FlatButton label="Signup" labelStyle={{ color: 'white' }} />
                    </Link>

                </div>
            }
        />

    )
}

export default NavLoginBar;