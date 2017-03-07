import { ProductActions } from "./../actions/index.js"
import * as firebase from "firebase";
import { FirebaseService } from "./../../services/firebaseService.js"
import { Observable } from "rxjs"
export class ProductEpic {
    constructor() { }
    static getProduct = (actions$) =>
        actions$.ofType('GET_PRODUCT')
            .switchMap(({payload}) => {
                if (!payload) {
                    firebase.database().ref("/product").on("value", (snapshot) => {
                        if (snapshot.val()) {
                            ProductActions.addProduct(snapshot.val())
                        }
                    })
                }
                return Observable.of({
                    type: 'GET_PRODUCT_FAIL',
                    payload: {}
                })
            })
    static getProductDetail = (actions$) =>
        actions$.ofType('GET_PRODUCT_DETAIL')
            .switchMap(({payload}) => {
                if (!payload) {
                    firebase.database().ref("/product-detail").on("value", (snapshot) => {
                        if (snapshot.val()) {
                            ProductActions.addProductDetail(snapshot.val())
                        }
                    })
                }
                return Observable.of({
                    type: 'GET_PRODUCT_DETAIL_FAIL',
                    payload: {}
                })
            })
    static getStoreDetail = (actions$) =>
        actions$.ofType('GET_STORE_DETAIL')
            .switchMap(({payload}) => {
                if (!payload) {
                    firebase.database().ref("/sales-detail").on("value", (snapshot) => {
                        let dateArray = [];
                        let twoKeyList = [];
                        if (snapshot.val()) {
                            for (let key in snapshot.val()) {
                                let i = 0;
                                for (let data in snapshot.val()[key]) {
                                    console.log("aaaaaaaaaaaaaa", snapshot.val()[key][data])
                                    let total = snapshot.val()[key][data]["total"]
                                    let date = snapshot.val()[key][data]["date"]
                                    twoKeyList.push({ name: date, uv: total })
                                    i++;
                                    dateArray.push([i, total])
                                }
                            }
                            ProductActions.addStoreDetail({ value: snapshot.val(), data: dateArray, twoKeyList})
                        }
                    })
                }
                return Observable.of({
                    type: 'GET_STORE_DETAIL_FAIL',
                    payload: {}
                })
            })
    static getStock = (actions$) =>
        actions$.ofType('GET_STOCK')
            .switchMap(({payload}) => {
                if (!payload) {
                    firebase.database().ref("/stock").on("value", (snapshot) => {
                        let headers = {};
                        if (snapshot.val()) {
                            for (let key in snapshot.val()) {
                                for (let header in snapshot.val()[key]) {
                                    headers[header] = header
                                }
                            }
                            ProductActions.addStock({ headers, value: snapshot.val() })
                        }
                    })
                }
                return Observable.of({
                    type: 'GET_STOCK_FAIL',
                    payload: {}
                })
            })
    static getStore = (actions$) =>
        actions$.ofType('GET_STORE')
            .switchMap(({payload}) => {
                if (!payload) {
                    firebase.database().ref("/stores").on("value", (snapshot) => {
                        if (snapshot.val()) {
                            ProductActions.addStore(snapshot.val())
                        }
                    })
                }
                return Observable.of({
                    type: 'GET_STORE_FAIL',
                    payload: {}
                })
            })
}


