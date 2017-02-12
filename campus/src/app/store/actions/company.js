import { store } from "./../index.js"
export class CompanyAction {
    static ADD_COMPANY = 'ADD_COMPANY';
    static ADD_POST = 'ADD_POST';
    static ADD_COMPANY_POST = 'ADD_COMPANY_POST';

    static GET_COMPANY = 'GET_COMPANY';
    static GET_COMPANY_SUCCESS = 'GET_COMPANY_SUCCESS';
    static GET_COMPANY_FAIL = 'GET_COMPANY_FAIL';

    static UPDATE_COMPANY = 'UPDATE_COMPANY';
    static UPDATE_COMPANY_SUCCESS = 'UPDATE_COMPANY_SUCCESS';
    static UPDATE_COMPANY_FAIL = 'UPDATE_COMPANY_FAIL';

    static GET_POST = 'GET_POST';
    static GET_POST_SUCCESS = 'GET_POST_SUCCESS';
    static GET_POST_FAIL = 'GET_POST_FAIL';

    static GET_POST_BY_COMPANY = 'GET_POST_BY_COMPANY';
    static GET_POST_BY_COMPANY_SUCCESS = 'GET_POST_BY_COMPANY_SUCCESS';
    static GET_POST_BY_COMPANY_FAIL = 'GET_POST_BY_COMPANY_FAIL';

    static GET_ONE_POST_BY_COMPANY = 'GET_ONE_POST_BY_COMPANY';
    static GET_ONE_POST_BY_COMPANY_SUCCESS = 'GET_ONE_POST_BY_COMPANY_SUCCESS';
    static GET_ONE_POST_BY_COMPANY_FAIL = 'GET_ONE_POST_BY_COMPANY_FAIL';
    static NULL = 'NULL'
    constructor() { }
    static addCompany(payload) {
        console.log("sssssssssssssssssssssssssssss")
        store.dispatch({
            type: CompanyAction.ADD_COMPANY,
            payload
        })
    }
      static addPost(payload) {
        console.log("sssssssssssssssssssssssssssss")
        store.dispatch({
            type: CompanyAction.ADD_POST,
            payload
        })
    } static addCompanyPost(payload) {
        console.log("sssssssssssssssssssssssssssss")
        store.dispatch({
            type: CompanyAction.ADD_COMPANY_POST,
            payload
        })
    }
    static getCompany() {
        return {
            type: CompanyAction.GET_COMPANY
        }
    }
    static getPostByCompany(uid) {
        return {
            type: CompanyAction.GET_POST_BY_COMPANY,
            payload: { uid }
        }
    }
    static getPosts() {
        return {
            type: CompanyAction.GET_POST
        }
    }
    static getOnePostByCompany(coId, key) {
        return {
            type: CompanyAction.GET_ONE_POST_BY_COMPANY,
            payload: { coId, key }
        }
    }
}