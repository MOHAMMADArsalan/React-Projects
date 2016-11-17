import React from "react";
import ReactDOM  from "react-dom";
import Avatar from "./Avatar.Component.jsx";
import routes from "./config/routers.jsx";

const User_DATA = {
    name: "MOHAMMAD Arsalan Rajput",
    username: "MOHAMMADArsalan",
    image: "https://avatars1.githubusercontent.com/u/14179110?v=3&s=460"
}
class App extends React.Component {
    render() {
        return( 
            <div>
                <Avatar user={User_DATA}/>
            </div>
        )
    }
}

ReactDOM.render(routes,document.getElementById("react-container"))