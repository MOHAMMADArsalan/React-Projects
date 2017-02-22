import * as React from "react";
import * as ReactDOM from "react-dom";
import * as injectTabEventPlugin from "react-tap-event-plugin";
injectTabEventPlugin();




import Signup from "./containers/Signup.jsx";
import Signin from "./containers/Signin.jsx";
import AppBarIcon from "./components/AppBar.jsx"



import AppBar from 'material-ui/AppBar';
import { deepOrange500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});


const styles = {
    container: {
        textAlign: 'center',
        paddingTop: 200,
    },
};
class App extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <AppBarIcon />
                    <Signup />
                </div>
            </MuiThemeProvider>
        )
    }
}


ReactDOM.render(<App />, document.getElementById("bitting-app"))