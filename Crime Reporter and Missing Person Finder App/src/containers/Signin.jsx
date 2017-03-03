// others lib import 
import * as React from "react";
import { connect } from "react-redux"
import { AuthActions } from "./../store/actions/index.js";
import { browserHistory } from "react-router"
// material Ui Component
import TextField from "material-ui/TextField";
import { Card } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";

// Custom Component
import { LoginAppBar, SignInFrom } from "./../components/index.js";

//Validations
import Validator from "validator";
import validatorInput from "./../validation/signin"

//connet container with redux configiration
function mapStateToProps(state) {
    return {
        isLoggedIn: state['authReducer'].isLoggedIn,
        isLoading: state['authReducer'].isLoading
    }
}
function mapDispatchToProps(dispatch) {
    return {
        login: (email, password) => { dispatch(AuthActions.login(email, password)) }
    }
}

class Signin extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
    }
    InputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    isValid() {
        const { errors, isValid} = validatorInput(this.state);

        if (!isValid) this.setState({ errors: errors });

        return isValid
    }
    onsubmit = (e) => {
        e.preventDefault();
        this.setState({ errors: {} }, () => {
            if (this.isValid()) {
                this.props.login(this.state.email, this.state.password)
            }
        });
    }

    componentWillReceiveProps(newProps) {
        if (newProps.isLoggedIn) {
            browserHistory.push('/dashboard')
        }
    }
    render() {
        return (
            <div>
                <LoginAppBar />
                <div style={{ maxWidth: "500px", margin: '0 auto', marginTop: '50px' }}>
                    <Card style={{ padding: 20 }} onSubmit={this.onsubmit} onChange={this.InputHandler}>
                        <SignInFrom
                            isLoading={this.props.isLoading}
                            errors={this.state.errors} />
                    </Card>
                </div>
            </div>
        )

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Signin);