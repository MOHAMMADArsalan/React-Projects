import { ProductActions } from "./../actions/index.js"
import * as firebase from "firebase";
import { FirebaseService } from "./../../services/firebaseService.js"
import { Observable } from "rxjs"
export class ProductEpic {
    constructor() { }
    static getCategory = (actions$) =>
        actions$.ofType('GET_CATEGORY')
            .switchMap(({payload}) => {
                if (!payload) {
                    firebase.database().ref("/category").on("child_added", (snapshot) => {
                        if (snapshot.val()) {
                            console.log("category", snapshot.val())
                            ProductActions.addCategory({ key: snapshot.key, name: snapshot.val() })
                        }
                    })
                }
                return Observable.of({
                    type: 'GET_CATEGORY_FAIL',
                    payload: {}
                })
            })

    static getProduct = (actions$) =>
        actions$.ofType('GET_PRODUCT')
            .switchMap(({payload}) => {
                if (!payload) {
                    firebase.database().ref("/posts").on("child_added", (snapshot) => {
                        if (snapshot.val()) {
                            ProductActions.addProduct({ key: snapshot.key, value: snapshot.val() })
                        }
                    })
                }
                return Observable.of({
                    type: 'GET_PRODUCT_FAIL',
                    payload: {}
                })
            })

}


