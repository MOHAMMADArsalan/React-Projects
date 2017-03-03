import * as firebase from "firebase"

// Initialize Firebase
const config = {
    apiKey: "AIzaSyAByI86YjVn-D-hUnoL75E0fnbWcXqjQww",
    authDomain: "crimereportingapp.firebaseapp.com",
    databaseURL: "https://crimereportingapp.firebaseio.com",
    storageBucket: "crimereportingapp.appspot.com",
    messagingSenderId: "92370604842"
};
firebase.initializeApp(config);

export class FirebaseService {
    constructor() { }
    mainRef = firebase.database().ref();
    static firebaseTimeStamp = firebase.database['ServerValue'].TIMESTAMP;
    static storage = firebase.storage().ref();
    static auth = firebase.auth();
    static getPushKey(path) {
        return firebase.database().ref('/').child(path).push();
    }
    static saveMultipath(multipath) {
        return firebase.database().ref().update(multipath)
    }
   
    static uploadImageOnStorageBlob(path, blob) {
        return new Promise(res => {
            this.storage.child(path).put(blob).then((snapshot) => {
                console.log('Uploaded a blob or file!');
                // The promise will resolve with a Download URL provided by Firebase Storage
                res(snapshot.downloadURL);
            })
        });
    }
}