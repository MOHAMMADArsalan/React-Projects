import React from "react";
import ReactDOM from "react-dom";
import routes from "./config/routes.jsx";
import * as firebase from "firebase";
var config = {
    apiKey: "AIzaSyDt4iyN5Z7R3ipQH-niVxU6datrLfgWcmg",
    authDomain: "campus-recruitment-system.firebaseapp.com",
    databaseURL: "https://campus-recruitment-system.firebaseio.com",
    storageBucket: "campus-recruitment-system.appspot.com",
    messagingSenderId: "837785737302"
};
firebase.initializeApp(config);
ReactDOM.render(routes, document.getElementById("react-container"))
