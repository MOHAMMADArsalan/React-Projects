import * as React from "react";
import Dashboard from "./../components/Dashboard.jsx";
import { connect } from "react-redux";
import { FirebaseService } from "./../services/FirebaseService.js";
import { AuthActions, ChatAction } from "./../store/actions/index.js";
import Navbar from "./../components/NavBar.jsx";

function mapStateToProps(state) {
    return {
        isLoggedin: state.authReducer['isLoggedin']
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
        this.state = {

        }
    }
    logout = () => {
        this.props.logout()
    }
    componentWillMount() {
        if (!this.props.location.state) {
            let user = JSON.parse(localStorage.getItem("upwork-app"));
            if (user) {
                user = JSON.parse(user);
                this.setState({
                    user: user
                })
            }
        } else {
            this.setState({
                user: this.props.location.state
            })
        }
    }

    componentDidMount() {
    }
    componentWillReceiveProps(nextProps) {
        if (!nextProps.isLoggedin) {
            this.context.router.push("/signin")
        }
    }
    render() {
        return (
            <div>
                <Navbar logout={this.logout} />
                <Dashboard></Dashboard>
            </div>
        )
    }
}

Home.contextTypes = {
    router: React.PropTypes.object.isRequired
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);


