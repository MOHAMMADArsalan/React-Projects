import * as fb from 'firebase';
import {
    BehaviorSubject
} from 'rxjs';

var config = {
   apiKey: "AIzaSyBwBmBmbyJK-gEtyx8ipvHSK-R7J059RkA",
    authDomain: "chatapp-407b8.firebaseapp.com",
    databaseURL: "https://chatapp-407b8.firebaseio.com",
    storageBucket: "chatapp-407b8.appspot.com",
    messagingSenderId: "98069853876"
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