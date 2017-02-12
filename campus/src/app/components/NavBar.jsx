import * as React from "react";
import { Link } from "react-router";
// import { AuthActions } from "./../store/actions/auth.js";
// import { connect } from "react-redux"
// function mapDispatchToProp(dispatch) {
//     logout: () => { dispatch(AuthActions.logout()) }
// }
class Navbar extends React.Component {
    constructor() {
        super();
        this.goToProfile = this.goToProfile.bind(this)
        this.logout = this.logout.bind(this)

    }
    logout() {
        localStorage.removeItem('Campus-Recruitment-System');
        this.context.router.push({
            pathname: '/signin'
        })
    }
    goToProfile() {
        this.context.router.push({
            pathname: '/profile'
        })
    }
    render() {
        return (
            <div className="navbar-wrapper">
                <div className="">
                    <nav className="navbar navbar-inverse navbar-static-top">
                        <div className="flex">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"
                                    aria-controls="navbar">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand" >Campus Recruitment System</a>
                            </div>
                            <div id="navbar" className="navbar-collapse collapse">
                                <ul className="nav navbar-nav">
                                    <li ><Link to="/home">Dashboard</Link></li>
                                    {this.props.type === 1 && <li ><a >Add Company</a></li>}
                                    {this.props.type === 3 && <li><a onClick={this.goToProfile}> Profile</a></li>}
                                    <li className="cursor"><a onClick={this.logout}>Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
Navbar.contextTypes = {
    router: React.PropTypes.object.isRequired
}
export default Navbar;