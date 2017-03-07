import store from "./../index"

export class ProductActions {

    constructor() { }

    static GET_PRODUCT = 'GET_PRODUCT';
    static GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
    static GET_PRODUCT_FAIL = 'GET_PRODUCT_FAIL';

    static GET_STORE = 'GET_STORE';
    static GET_STORE_SUCCESS = 'GET_STORE_SUCCESS';
    static GET_STORE_FAIL = 'GET_STORE_FAIL';

    static GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';
    static GET_PRODUCT_DETAIL_SUCCESS = 'GET_PRODUCT_DETAIL_SUCCESS';
    static GET_PRODUCT_DETAIL_FAIL = 'GET_PRODUCT_DETAIL_FAIL';

    static GET_STORE_DETAIL = 'GET_STORE_DETAIL';
    static GET_STORE_DETAIL_SUCCESS = 'GET_STORE_DETAIL_SUCCESS';
    static GET_STORE_DETAIL_FAIL = 'GET_STORE_DETAIL_FAIL';

    static GET_STOCK = 'GET_STOCK';
    static GET_STOCK_SUCCESS = 'GET_STOCK_SUCCESS';
    static GET_STOCK_FAIL = 'GET_STOCK_FAIL';
    // static GET_PRODUCT = 'GET_PRODUCT'
    // static GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS'
    // static GET_PRODUCT_FAIL = 'GET_PRODUCT_FAIL'

    static getProduct = () => {
        return {
            type: ProductActions.GET_PRODUCT
        }
    }

    static addProduct = (payload) => {
        store.dispatch({
            type: ProductActions.GET_PRODUCT_SUCCESS,
            payload: payload
        })
    }

    static getStock = () => {
        return {
            type: ProductActions.GET_STOCK
        }
    }

    static addStock = (payload) => {
        store.dispatch({
            type: ProductActions.GET_STOCK_SUCCESS,
            payload: payload
        })
    }

    static getStore = () => {
        return {
            type: ProductActions.GET_STORE
        }
    }

    static addStore = (payload) => {
        store.dispatch({
            type: ProductActions.GET_STORE_SUCCESS,
            payload: payload
        })
    }
    static getProductDetail = () => {
        return {
            type: ProductActions.GET_PRODUCT_DETAIL
        }
    }
    static addProductDetail = (payload) => {
        store.dispatch({
            type: ProductActions.GET_PRODUCT_DETAIL_SUCCESS,
            payload: payload
        })
    }

    static getStoreDetail = () => {
        return {
            type: ProductActions.GET_STORE_DETAIL
        }
    }
    static addStoreDetail = (payload) => {
        store.dispatch({
            type: ProductActions.GET_STORE_DETAIL_SUCCESS,
            payload: payload
        })
    }
}