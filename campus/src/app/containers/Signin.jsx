import * as React from "react";
import SigninComponent from "./../components/Signin.jsx";
import NavLoginBar from "./../components/nav-login.jsx";
import { connect } from "react-redux";
import { AuthActions } from "./../store/actions/index.js";

function mapStateToProps(state) {
    return {
        isLoggedin: state.authReducer['isLoggedin'],
        user:state.authReducer['user']
    }
}
function mapDispatchToProps(dispatch) {
    return {
        login: (data) => { dispatch(AuthActions.login(data)) }
    }
}
class Signin extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
        this.signin = this.signin.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
    }
    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    signin(e) {
        e.preventDefault();
        this.props.login(this.state)
        console.log("inputHandler", this.state)
    }
    componentWillReceiveProps() {
        setTimeout(() => {
        console.log("Ssssssssssssssssssssssssssssssssssss")
            if (this.props.isLoggedin) {
        console.log("Ssssssssssssssssssssssssss2222222222222ssssssssss")
                
                this.context.router.push({
                    pathname: '/home',
                    state:this.props.user
                })
            }
        },10)
    }
    render() {
        return (
            <div>
                <NavLoginBar></NavLoginBar>
                <SigninComponent
                    _inputHandler={this.inputHandler}
                    _submit={this.signin}
                />
            </div>
        )
    }
}
Signin.contextTypes = {
    router: React.PropTypes.object.isRequired
}
export default connect(mapStateToProps, mapDispatchToProps)(Signin);