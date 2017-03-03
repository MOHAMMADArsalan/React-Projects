import store from "./../index"

export class ProductActions {

    constructor() { }

    static GET_CATEGORY = 'GET_CATEGORY';
    static GET_CATEGORY_SUCCESS = 'GET_CATEGORY_SUCCESS';
    static GET_CATEGORY_FAIL = 'GET_CATEGORY_FAIL';

    static GET_PRODUCT = 'GET_PRODUCT'
    static GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS'
    static GET_PRODUCT_FAIL = 'GET_PRODUCT_FAIL'

    static getCategory = () => {
        return {
            type: ProductActions.GET_CATEGORY
        }
    }

    static addCategory = (payload) => {
        store.dispatch({
            type: ProductActions.GET_CATEGORY_SUCCESS,
            payload: payload
        })
    }
    static addProduct = (payload) => {
        store.dispatch({
            type: ProductActions.GET_PRODUCT_SUCCESS,
            payload: payload
        })
    }

    static getProduct = () => {
        return {
            type: ProductActions.GET_PRODUCT
        }
    }
}