import * as firebase from "firebase"

// Initialize Firebase
const config = {
    apiKey: "AIzaSyCGxLNOLnWioykxjWjF-FaGBm-wnewCbXs",
    authDomain: "bloodapp-e64e4.firebaseapp.com",
    databaseURL: "https://bloodapp-e64e4.firebaseio.com",
    storageBucket: "bloodapp-e64e4.appspot.com",
    messagingSenderId: "1022425772957"
};
firebase.initializeApp(config);

export class FirebaseService {
    constructor() { }
    mainRef = firebase.database().ref();
    static getPushKey(path) {
        return firebase.database().ref('/').child(path).push();
    }
    static saveMultipath(multipath) {
        return firebase.database().ref().update(multipath)
    }
}