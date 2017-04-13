import * as React from "react";

// material-ui
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import CircularProgress from 'material-ui/CircularProgress';

class SignupComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <form >
                <TextField type="text" name="username"
                    hintText="Please Enter Username"
                    fullWidth style={{ marginBottom: 20 }}
                    autoFocus
                />
                <TextField type="text" name="firstname"
                    hintText="Please Enter First Name"
                    fullWidth style={{ marginBottom: 20 }}
                />
                <TextField type="text" name="lastname"
                    hintText="Please Enter Last Name"
                    fullWidth style={{ marginBottom: 20 }}
                />
                <TextField type="text" name="email"
                    hintText="Please Enter Email"
                    fullWidth style={{ marginBottom: 20 }}
                />
                <TextField type="password" name="password"
                    hintText="Please Enter Password"
                    fullWidth style={{ marginBottom: 20 }}
                />
                <RaisedButton label="Sign up" type="submit" primary={true} />
                {this.props.isLoading && <CircularProgress size={30} style={{ top: 10, left: 10 }} />}
            </form>
        )
    }
}
SignupComponent.PropTypes = {
    _inputHandler: React.PropTypes.func.isRequired,
    _submit: React.PropTypes.func.isRequired

}
export default SignupComponent;