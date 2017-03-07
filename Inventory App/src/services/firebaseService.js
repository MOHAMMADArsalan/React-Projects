import * as firebase from "firebase"

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDEfGuFxv4sIHXsMMPTyTX6MTjgw-kYQk0",
    authDomain: "inventoryapp-b678b.firebaseapp.com",
    databaseURL: "https://inventoryapp-b678b.firebaseio.com",
    storageBucket: "inventoryapp-b678b.appspot.com",
    messagingSenderId: "155362124677"
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