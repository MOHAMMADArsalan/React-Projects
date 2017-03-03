import * as React from "react";
import TextField from "material-ui/TextField";
import { Card } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import { connect } from "react-redux";
import { AuthActions } from "./../store/actions/index.js"
import { LoginAppBar } from "./../components/index.js"

function mapStateToProps(state) {
    return {
        isRegister: state['authReducer'].isRegister
    }
}

function mapDispatchToProps(dispatch) {
    return {
        register: (object) => dispatch(AuthActions.register(object))
    }
}
class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
        }
        this.inputHandler = this.inputHandler.bind(this);
        this.onsubmit = this.onsubmit.bind(this);
    }
    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onsubmit(e) {
        e.preventDefault()
        this.props.register(this.state)
    }
    render() {
        return (
            <div>
                <LoginAppBar />
                <div style={{ maxWidth: "800px", margin: '0 auto', marginTop: '25px' }}>
                    <Card style={{ padding: 20 }}>
                        <form onSubmit={this.onsubmit}>
                            <TextField id="" type="text" name="username" hintText="Please Enter Username" fullWidth style={{ marginBottom: 20 }} onChange={this.inputHandler} />
                            <TextField id="" type="text" name="firstname" hintText="Please Enter First Name" fullWidth style={{ marginBottom: 20 }} onChange={this.inputHandler} />
                            <TextField id="" type="text" name="lastname" hintText="Please Enter Last Name" fullWidth style={{ marginBottom: 20 }} onChange={this.inputHandler} />
                            <TextField id="" type="email" name="email" hintText="Please Enter Email" fullWidth style={{ marginBottom: 20 }} onChange={this.inputHandler} />
                            <TextField id="" type="password" name="password" hintText="Please Enter Password" fullWidth style={{ marginBottom: 20 }} onChange={this.inputHandler} />
                            <RaisedButton label="Sign up" type="submit" primary={true} />
                        </form>
                    </Card>
                </div>

            </div>
        )

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Signup);