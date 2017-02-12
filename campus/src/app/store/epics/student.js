import {
    StudentAction
} from "./../actions";
import {
    Observable
} from "rxjs";
import * as firebase from "firebase"
export class StudentEpics {
    constructor() {}

    static getStudents = (action$) =>
        action$.ofType('GET_STUDENTS')
        .switchMap((payload) => {
            if (payload) {
                firebase.database().ref("/").child('users').off('value')
                firebase.database().ref("/").child('users').orderByChild('type').equalTo(3).on('value', (snapshot) => {
                    if (snapshot.val()) {
                        for (let key in snapshot.val()) {
                            let obj = Object.assign({}, snapshot.val()[key]);
                            obj['$key'] = key
                            StudentAction.addStudent(obj);
                        }
                        // let obj = Object.assign({}, snapshot.val());
                        // obj['$key'] = snapshot.key
                        // StudentAction.addStudent(obj);
                    }
                })
            }
            return Observable.of({
                type: StudentAction.NULL
            })
        })
}