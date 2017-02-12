import { StudentAction } from "./../actions";
import { Observable } from "rxjs";
import * as firebase from "firebase"
export class StudentEpics {
    constructor() { }

    static getStudents = (action$) =>
        action$.ofType('GET_STUDENTS')
            .switchMap((payload) => {
                if (payload) {
                    firebase.database().ref("/").child('users').off('child_added')
                    firebase.database().ref("/").child('users').orderByChild('type').equalTo(3).on('child_added', (snapshot) => {
                        if (snapshot.val()) {
                            let obj = Object.assign({}, snapshot.val());
                            obj['$key'] = snapshot.key
                            StudentAction.addStudent(obj);
                        }
                    })
                }
                return Observable.of({
                    type: StudentAction.NULL
                })
            })
}