import * as React from "react";
import { Link } from "react-router";
// material UI
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import CircularProgress from 'material-ui/CircularProgress';

class SigninComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <form onSubmit={this.props._submit}>
                <TextField type="text" name="email"
                    hintText="Please Enter Email"
                    fullWidth style={{ marginBottom: 20 }}
                    required autoFocus
                    onChange={this.props._inputHandler}
                />
                <TextField type="password" name="password"
                    hintText="Please Enter Password"
                    fullWidth style={{ marginBottom: 20 }}
                     required
                    onChange={this.props._inputHandler}
                />
                <RaisedButton label="Sign in" type="submit" primary={true} />
                {this.props.isLoading && <CircularProgress size={30} style={{ top: 10, left: 10 }} />}
            </form>
        )
    }
}
SigninComponent.PropTypes = {
    _inputHandler: React.PropTypes.func.isRequired,
    _submit: React.PropTypes.func.isRequired

}
export default SigninComponent;