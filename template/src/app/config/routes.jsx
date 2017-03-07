import * as React from "react";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import { Home, Main, Dashboard, User, Table, Typography, Icon,MapContainer,Notification ,Upgrade} from "./../containers/index.js"
let routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Dashboard}></IndexRoute>
            <Route path="dashboard" component={Dashboard}></Route>
            <Route path="user" component={User}></Route>
            <Route path="table-list" component={Table}></Route>
            <Route path="icons" component={Icon}></Route>
            <Route path="typography" component={Typography}></Route>
            <Route path="maps" component={MapContainer}></Route>
            <Route path="notifications" component={Notification}></Route>
            <Route path="pro" component={Upgrade}></Route>

        </Route>
    </Router>
)
export default routes;