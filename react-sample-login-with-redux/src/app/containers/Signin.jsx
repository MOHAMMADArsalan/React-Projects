import * as React from "react";
import SigninComponent from "./../components/Signin.jsx";
import NavLoginBar from "./../components/nav-login.jsx";
import { connect } from "react-redux";
import { AuthActions } from "./../store/actions/index.js";
import { browserHistory } from "react-router";

// material Ui Component
import TextField from "material-ui/TextField";
import { Card } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";

function mapStateToProps(state) {
    return {
        isLoggedin: state.authReducer['isLoggedin'],
        user: state.authReducer['user'],
        isLoading: state['authReducer'].isLoading
    }
}
function mapDispatchToProps(dispatch) {
    return {
        login: (data) => { dispatch(AuthActions.login(data)) },
        Logout: () => { dispatch(AuthActions.logout()) }
    }
}
class Signin extends React.Component {
    // static get PropTypes() {
    //     return {

    //     }
    // }
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
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.isLoggedin) {
            this.context.router.push({
                pathname: '/home',
                state: this.props.user
            })
        }
    }
    componentWillMount() {
        this.props.Logout()
    }
    render() {
        return (
            <div>
                <NavLoginBar></NavLoginBar>
                <div style={{ maxWidth: "500px", margin: '0 auto', marginTop: '50px' }}>
                    <Card style={{ padding: 20 }} onSubmit={this.onsubmit} onChange={this.InputHandler}>
                        {/*<SignInFrom
                            isLoading={this.props.isLoading}
                            errors={this.state.errors} />*/}
                        <SigninComponent
                            isLoading={this.props.isLoading}
                            _inputHandler={this.inputHandler}
                            _submit={this.signin}
                        />
                    </Card>
                </div>
            </div>
        )
    }
}
Signin.contextTypes = {
    router: React.PropTypes.object.isRequired
}
export default connect(mapStateToProps, mapDispatchToProps)(Signin);