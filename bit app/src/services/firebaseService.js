// Initialize Firebase
const config = {
    apiKey: "AIzaSyAFsDdNeUrIc1aa27o-2_LGZNT2DQomMcg",
    authDomain: "bidding-app-c54e8.firebaseapp.com",
    databaseURL: "https://bidding-app-c54e8.firebaseio.com",
    storageBucket: "bidding-app-c54e8.appspot.com",
    messagingSenderId: "351081120921"
};
firebase.initializeApp(config);

export class FirebaseService {
    constructor() { }
    static mainRef = firebase.database().ref('/');
}