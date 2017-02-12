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
    type = 3;
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
                gpa: this.state.gpa,
                year: this.state.year,
                status: this.state.status,
                type: this.state.type
            }
            if (this.state.gpa != '' || this.state.year != '') {
                newObj['status'] = true
            }
            multipath[`users/${this.state.uid}`] = newObj;
            FirebaseService.saveMultipath(multipath).then(() => {
                console.log("Savedddddddddddd", multipath)
                newObj['uid'] = this.state.uid
                console.log("newObj",newObj)
                 localStorage.setItem('Campus-Recruitment-System', JSON.stringify(JSON.stringify(newObj)));
                this.context.router.push({
                    pathname: "/home"
                })
            }, (err) => { console.log("ERROR: ", err) })
        } else {
            let obj = Object.assign({}, this.state);
            obj['type'] = 3;
            obj['gpa'] = "";
            obj['year'] = "";
            obj['status'] = false;
            this.props.signUp(obj);
            this.context.router.push({
                pathname: "/signin"
            })
        }
        // browserHistory.push("/signin")
        console.log("inputHandler", this.state)
    }
    componentWillReceiveProps() {
        setTimeout(() => {
            console.log('propsssssss................ ', this.props)
            // if (this.props.counterReg > 0 && this.props.activeUser.type == 'admin') {
            //     browserHistory.push('/home');
            // }
            // if (this.props.isRegistered && this._flag && this.props.activeUser.type != 'admin') {
            //     this._flag = false;
            //     browserHistory.push('/login');
            // } else if (!this.props.isRegistered && !this._flag) {
            //     this._flag = true;
            // }
        }, 5);
    }
    componentWillMount() {
        let user = JSON.parse(localStorage.getItem("Campus-Recruitment-System"));

        if (this.props.location.pathname === '/profile') {
            this.isProfileRoute = true;
            user = JSON.parse(user)
            this.type = user.type;
            this.setState(user)
        }
        console.log("ssssssssssssssssssssss", this.props.user)
    }
    render() {
        return (
            <div>
                {this.isProfileRoute ? <Navbar type={this.type}></Navbar> : <NavLoginBar></NavLoginBar>}
                <SignupComponent user={this.state} isProfileRoute={this.isProfileRoute} _inputHandler={this.inputHandler} _submit={this.submit} />
            </div>
        )
    }
}
Signup.contextTypes = {
    router: React.PropTypes.object.isRequired
}
export default connect(mapStatetToProps, mapDispatchToProps)(Signup);