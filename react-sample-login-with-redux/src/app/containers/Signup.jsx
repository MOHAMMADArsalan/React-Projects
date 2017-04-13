import * as React from "react";
import SignupComponent from "./../components/Signup.jsx";
import NavLoginBar from "./../components/nav-login.jsx";
import Navbar from "./../components/NavBar.jsx"
import { AuthActions } from "./../store/actions/index.js";
import { connect } from "react-redux";
import { browserHistory } from "react-router";
import { FirebaseService } from "./../services/FirebaseService.js"

// material-ui
import { Card } from "material-ui/Card";

function mapStatetToProps(state) {
    return {
        isRegistered: state.authReducer['isRegistered'],
        user: state.authReducer['user'],
        isLoading: state.authReducer['isLoading']
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
            name: '',
            firstname: '',
            lastname: '',
            password: '',
        }
        this.submit = this.submit.bind(this);
        this.inputHandler = this.inputHandler.bind(this)
    }
    isProfileRoute = false;
    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submit(e) {
        e.preventDefault();
        if (this.isProfileRoute) {
            let multipath = {};
            let newObj = {
                email: this.state.email,
                name: this.state.name,
                firstname: this.state.firstname,
                lastname: this.state.lastname
            }
            multipath[`users/${this.state.uid}`] = newObj;
            FirebaseService.saveMultipath(multipath).then(() => {
                newObj['uid'] = this.state.uid
                localStorage.setItem('upwork-app', JSON.stringify(JSON.stringify(newObj)));
                this.context.router.push({
                    pathname: "/home"
                })
            }, (err) => { console.log("ERROR: ", err) })
        }
        else {
            let obj = Object.assign({}, this.state);
            this.props.signUp(obj);
            this.context.router.push({
                pathname: "/signin"
            })
        }
    }
    render() {
        return (
            <div>
                <NavLoginBar></NavLoginBar>
                <div style={{ maxWidth: "800px", margin: '0 auto', marginTop: '25px' }}>
                    <Card style={{ padding: 20 }} onChange={this.inputHandler} onSubmit={this.submit}>
                        <SignupComponent isLoading={this.props.isLoading}  />
                    </Card>
                </div>
                {/*<SignupComponent user={this.state} isProfileRoute={this.isProfileRoute} />*/}
            </div>
        )
    }
}
Signup.contextTypes = {
    router: React.PropTypes.object.isRequired
}
export default connect(mapStatetToProps, mapDispatchToProps)(Signup);