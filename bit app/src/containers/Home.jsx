import * as React from "react";
import { NavBar, DashboardComponent } from "./../components/index.js";
import { connect } from "react-redux"
import { AuthActions } from "./../store/actions/index.js"

function mapStateToProps(state) {
    return {
        user: state.authReducer.user,
        isLoggedIn: state.authReducer.isLoggedIn
    }
}
function mapDispatchToProps(dispatch) {
    return {
        logout: () => { dispatch(AuthActions.logout()) }
    }
}

class Home extends React.Component {
    constructor() {
        super();
    }

    logout() {
        this.props.logout()
    }

    render() {
        return (
            <div>
                <NavBar logout={this.props.logout} />
                <DashboardComponent />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);