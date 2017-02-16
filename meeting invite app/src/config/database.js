import firebase from "firebase";
const config = {
    apiKey: "AIzaSyCgF-EpfvRnZREVL656nxV2Wh2YjOXQ-Xo",
    authDomain: "meeting-invite-app.firebaseapp.com",
    databaseURL: "https://meeting-invite-app.firebaseio.com",
    storageBucket: "meeting-invite-app.appspot.com",
    messagingSenderId: "173040245968"
}
firebase.initializeApp(config);
const database = firebase.database();
export default database;
