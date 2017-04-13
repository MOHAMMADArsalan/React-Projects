import * as React from "react";
import { Link } from "react-router"
// material UI
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton"


class Navbar extends React.Component {
    constructor() {
        super();
        this.logout = this.logout.bind(this)
    }
    logout = () => {
        this.props.logout()
    }
    render() {
        return (
            <AppBar
                title="Upwork App"
                showMenuIconButton={false}

                iconElementRight={
                    <div>
                        <Link to="/home">
                            <FlatButton label="Dashboard" labelStyle={{ color: 'white' }} />
                        </Link>
                        <FlatButton label="Logout" onClick={this.logout} labelStyle={{ color: 'white' }} />
                    </div>
                }
            />
        )
    }
}
Navbar.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default Navbar;