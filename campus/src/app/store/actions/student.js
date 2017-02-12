import { store } from "./../index.js"

export class StudentAction {
    static ADD_STUDENT = 'ADD_STUDENT';

    static GET_STUDENTS = 'GET_STUDENTS';
    static GET_STUDENTS_SUCCESS = 'GET_STUDENTS_SUCCESS';
    static GET_STUDENTS_FAIL = 'GET_STUDENTS_FAIL';

    static UPDATE_STUDENTS = 'UPDATE_STUDENTS';
    static UPDATE_STUDENTS_SUCCESS = 'UPDATE_STUDENTS_SUCCESS';
    static UPDATE_STUDENTS_FAIL = 'UPDATE_STUDENTS_FAIL';

    static NULL = 'NULL'
    constructor() { }
      static addStudent(payload) {
        store.dispatch({
            type: StudentAction.ADD_STUDENT,
            payload
        })
    }
    static getStudentsList() {
        return {
            type: StudentAction.GET_STUDENTS
        }
    }

}