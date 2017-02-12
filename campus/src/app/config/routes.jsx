import * as React from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Signin from "./../containers/Signin.jsx"
import Signup from "./../containers/Signup.jsx";
import Main from "./../containers/Main.jsx";
import Dashboard from "./../containers/Dashboard.jsx"
import Home from "./../containers/Home.jsx"
import { store } from "./../store/index.js";
import { Provider } from "react-redux";
function check(nextState, replace) {
    let user = localStorage.getItem("Campus-Recruitment-System");
    if (!user) {
        replace({
            pathname: 'signin',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}
let routes = (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={Signin}></IndexRoute>
                <Route path="signin" component={Signin}></Route>
                <Route path="signup" component={Signup}></Route>
                <Route component={Dashboard} onEnter={check}>
                    <IndexRoute component={Home}></IndexRoute>
                    <Route path="home" component={Home}></Route>
                    <Route path="profile" component={Signup}></Route>

                </Route>
            </Route>
        </Router>
    </Provider>
)
export default routes;