import React, { Component } from "react"
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import CircularProgress from 'material-ui/CircularProgress';
const SignInFrom = (props) => {
    return (
        <form>
            <TextField type="text" name="email"
                hintText="Please Enter Email"
                errorText={props.errors.email}
                fullWidth style={{ marginBottom: 20 }}
            />
            <TextField type="password" name="password"
                hintText="Please Enter Password"
                errorText={props.errors.password}
                fullWidth style={{ marginBottom: 20 }}
            />
           <RaisedButton label="Sign in" type="submit" primary={true} />
            {props.isLoading && <CircularProgress size={30} style={{ top: 10, left: 10 }} />}
        </form>
    )
}

export default SignInFrom;