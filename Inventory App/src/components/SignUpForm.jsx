import React, { Component } from "react"
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import CircularProgress from 'material-ui/CircularProgress';
const SignUpFrom = (props) => {
    return (
        <form >
            <TextField type="text" name="username"
                hintText="Please Enter Username"
                errorText={props.errors.username}
                fullWidth style={{ marginBottom: 20 }}
            />
            <TextField type="text" name="firstname"
                hintText="Please Enter First Name"
                errorText={props.errors.firstname}
                fullWidth style={{ marginBottom: 20 }}
            />
            <TextField type="text" name="lastname"
                hintText="Please Enter Last Name"
                errorText={props.errors.lastname}
                fullWidth style={{ marginBottom: 20 }}
            />
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
            <RaisedButton label="Sign up" type="submit" primary={true} />
            {props.isLoading && <CircularProgress size={30} style={{ top: 10, left: 10 }} />}
        </form>
    )
}

export default SignUpFrom;