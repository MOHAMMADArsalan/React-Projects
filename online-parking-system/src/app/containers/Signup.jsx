import * as React from "react";
import SignupComponent from "./../components/Signup.jsx";
import NavLoginBar from "./../components/nav-login.jsx";
import Navbar from "./../components/NavBar.jsx"
import { AuthActions } from "./../store/actions/index.js";
import { connect } from "react-redux";
import { browserHistory } from "react-router";
import { FirebaseService } from "./../services/FirebaseService.js"
function mapStatetToProps(state) {
    return {
        isRegistered: state.authReducer['isRegistered'],
        user: state.authReducer['user'],

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
            password: ''
        }
        this.submit = this.submit.bind(this);
        this.inputHandler = this.inputHandler.bind(this)
    }
    isProfileRoute = false;
    // isCompanyRoute = false;
    // type = 3;
    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submit(e) {
        e.preventDefault();
        // let obj = Object.assign({}, this.state);
        if (this.isProfileRoute) {
            let multipath = {};
            let newObj = {
                email: this.state.email,
                name: this.state.name,
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                type: this.state.type
            }
            multipath[`users/${this.state.uid}`] = newObj;
            FirebaseService.saveMultipath(multipath).then(() => {
                newObj['uid'] = this.state.uid
                localStorage.setItem('online-parking-system', JSON.stringify(JSON.stringify(newObj)));
                this.context.router.push({
                    pathname: "/home"
                })
            }, (err) => { console.log("ERROR: ", err) })
        }
        else {
            let obj = Object.assign({}, this.state);
            obj['type'] = 2;
            console.log("objjjjjjjjjjjjjjjjjjjjjjjjjjj", obj)
            this.props.signUp(obj);
            this.context.router.push({
                pathname: "/signin"
            })
        }
    }
    componentWillMount() {
        let user = JSON.parse(localStorage.getItem("online-parking-system"));

        // if (this.props.location.pathname === '/profile') {
        //     this.isProfileRoute = true;
        //     user = JSON.parse(user)
        //     this.type = user.type;
        //     this.setState(user)
        // }
        // else if (this.props.location.pathname === '/add-company') {
        //     this.isCompanyRoute = true;
        //     user = JSON.parse(user)
        //     this.type = user.type;
        //     this.setState(user)
        // }
    }
    render() {
        return (
            <div>
                {(this.isProfileRoute) ? <Navbar type={this.type}></Navbar> : <NavLoginBar></NavLoginBar>}
                <SignupComponent user={this.state} isProfileRoute={this.isProfileRoute} _inputHandler={this.inputHandler} _submit={this.submit} />
            </div>
        )
    }
}
Signup.contextTypes = {
    router: React.PropTypes.object.isRequired
}
export default connect(mapStatetToProps, mapDispatchToProps)(Signup);