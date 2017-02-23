import { Route, Router, browserHistory, IndexRoute } from "react-router";
import * as React from "react";
// Components
import { Signin, Signup, Main } from "./../containers/index.js"

// material UI Component And Config
import injectTabEventPlugin from "react-tap-event-plugin";
import AppBar from 'material-ui/AppBar';
import { deepOrange500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// call Tab Event Plugin
injectTabEventPlugin()

// Redux Store
import { Provider } from "react-redux";
import store from "./../store/index.js"

// getting Theme
const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});

//routes
export const routes = (
    <MuiThemeProvider muiTheme={muiTheme} >
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={Main}>
                    <IndexRoute component={Signin} />
                    <Route path="signin" component={Signin} />
                    <Route path="/signup" component={Signup} />
                </Route>
            </Router>
        </Provider>
    </MuiThemeProvider>
)
