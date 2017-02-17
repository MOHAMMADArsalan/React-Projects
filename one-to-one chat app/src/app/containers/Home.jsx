import * as React from "react";
import Dashboard from "./../components/Dashboard.jsx";
import { connect } from "react-redux";
import { FirebaseService } from "./../services/FirebaseService.js";
import { AuthActions } from "./../store/actions/auth.js"
function mapStateToProps(state) {
    return {
        users: state.authReducer['users'],
        user: state.authReducer['user'],
        conversationIds: state.chatReducer['conversationIds']
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getAllUsers: () => { dispatch(AuthActions.getAllUser()) }
    }
}
class Home extends React.Component {
    constructor() {
        super();
        this.state = {
        }
        this.getUserConversation = this.getUserConversation.bind(this);
    }
    componentWillMount() {
        if (!this.props.location.state) {
            let user = JSON.parse(localStorage.getItem("chat-app"));
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
    getUserConversation(userConId, otherConId) {
        // if(this.props.conversationIds) {

        // }
        console.log("getUserConversation", userConId, otherConId)
    }
    componentDidMount() {
        this.props.getAllUsers();
    }
    render() {
        return (
            <div>
                <Dashboard
                    users={this.props.users}
                    currentUser={Object.keys(this.props.user).length ? this.props.user : this.state.user}
                    getUserConversation={this.getUserConversation}
                ></Dashboard>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);


