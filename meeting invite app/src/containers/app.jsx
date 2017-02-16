import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./../store/index.js"
import InviteContainer from "./inviteContainer.jsx"

const main = (
    <Provider store={store}>
        <InviteContainer />
    </Provider>
)

ReactDOM.render(main,
    document.getElementById("meeting-invite-app"))