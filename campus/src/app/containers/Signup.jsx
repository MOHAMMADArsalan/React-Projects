import * as React from "react";
import SignupComponent from "./../components/Signup.jsx";
import NavLoginBar from "./../components/nav-login.jsx";
import { AuthActions } from "./../store/actions/index.js";
import { connect } from "react-redux";
import { browserHistory } from "react-router"
function mapStatetToProps(state) {
    return {
        isRegistered: state.authReducer['isRegistered']
    }
}
function mapDispatchToProps(dispatch) {
    return {
        signUp: (data) => { dispatch(AuthActions.register(data)) }
    }
}
class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            username: '',
            password: '',
            type: 2
        }
        this.submit = this.submit.bind(this);
        this.inputHandler = this.inputHandler.bind(this)
    }
    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submit(e) {
        e.preventDefault();
        console.log(" this.state ", this.state )
        this.props.signUp(this.state);
        this.context.router.push({
            pathname: "/signin"
        })
        // browserHistory.push("/signin")
        console.log("inputHandler", this.state)
    }
    componentWillReceiveProps() {
        setTimeout(() => {
            console.log('propsssssss................ ', this.props)
            // if (this.props.counterReg > 0 && this.props.activeUser.type == 'admin') {
            //     browserHistory.push('/home');
            // }
            // if (this.props.isRegistered && this._flag && this.props.activeUser.type != 'admin') {
            //     this._flag = false;
            //     browserHistory.push('/login');
            // } else if (!this.props.isRegistered && !this._flag) {
            //     this._flag = true;
            // }
        }, 5);
        console.log("sssssssssssssssssssssssssssssssss", this.props.isRegistered)
        // if (this.props.isRegistered) {
        //     browserHistory.push("/signin")
        // }
    }
    componentWillUnmount() {

    }
    render() {
        return (
            <div>
                <NavLoginBar></NavLoginBar>
                <SignupComponent _inputHandler={this.inputHandler} _submit={this.submit} />
            </div>
        )
    }
}
Signup.contextTypes = {
    router: React.PropTypes.object.isRequired
}
export default connect(mapStatetToProps, mapDispatchToProps)(Signup);