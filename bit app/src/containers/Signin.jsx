import * as React from "react";
import TextField from "material-ui/TextField";
import { Card } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
class Signin extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div style={{ maxWidth: "500px", margin: '0 auto', marginTop: '50px' }}>
                <Card style={{ padding: 20 }}>
                    <TextField id="" name="email" hintText="Please Enter Email" fullWidth style={{ marginBottom: 20 }}/>
                    <TextField id="" name="password" hintText="Please Enter Password" fullWidth style={{ marginBottom: 20 }}/>
                    <RaisedButton label="Sign in" primary={true}/>
                </Card>
            </div>
        )

    }
}


export default Signin;