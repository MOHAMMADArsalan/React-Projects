import * as fb from 'firebase';
import {
    BehaviorSubject
} from 'rxjs';

var config = {
    apiKey: "AIzaSyDt4iyN5Z7R3ipQH-niVxU6datrLfgWcmg",
    authDomain: "campus-recruitment-system.firebaseapp.com",
    databaseURL: "https://campus-recruitment-system.firebaseio.com",
    storageBucket: "campus-recruitment-system.appspot.com",
    messagingSenderId: "837785737302"
};
fb.initializeApp(config);
export class FirebaseService {

    static firebaseTimeStamp = fb.database['ServerValue'].TIMESTAMP;
    static ref = fb.database().ref();
    static storage = fb.storage().ref();
    static auth = fb.auth();

    constructor() {}

    static saveMultipath(multipath) {
            // console.log("his.state.user", multipath)
            return this.ref.update(multipath);
        } // saveMultipath

    static getPushRef(path) {
        return this.ref.child(path).push();
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