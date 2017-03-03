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
import { LoginAppBar } from "./../components/index.js";

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
        this.state = {}
        this.InputHandler = this.InputHandler.bind(this)
        this.onsubmit = this.onsubmit.bind(this)

    }
    InputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    onsubmit(e) {
        e.preventDefault();
        this.props.login(this.state.email, this.state.password)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isLoggedIn) {
            browserHistory.push('/dashboard')
        }
    }
    render() {
        return (
            <div>
                <LoginAppBar />
                <div style={{ maxWidth: "500px", margin: '0 auto', marginTop: '50px' }}>
                    <Card style={{ padding: 20 }}>
                        <form onSubmit={this.onsubmit}>
                            <TextField id="" name="email" type="email" hintText="Please Enter Email" fullWidth style={{ marginBottom: 20 }} onChange={this.InputHandler} />
                            <TextField id="" name="password" type="password" hintText="Please Enter Password" fullWidth style={{ marginBottom: 20 }} onChange={this.InputHandler} />
                            <RaisedButton label="Sign in" type="submit" primary={true} />
                        </form>
                    </Card>
                </div>
            </div>
        )

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Signin);