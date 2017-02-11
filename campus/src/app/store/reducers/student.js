import { StudentAction } from "./../actions/student.js";

const InitailState = {
    students: [],
    isLoading: false
}

export const studentReducer = (state = InitailState, action) => {
    let newState;
    switch (action.type) {
        case 'ADD_STUDENT':
            newState = state.students;
            newState.push({ value: action.payload });
            return Object.assign({}, state, { students: newState });
        case StudentAction.GET_STUDENTS:
            return Object.assign({}, state, { isLoading: true });
        case StudentAction.GET_STUDENTS_SUCCESS:
            newState = state;
            newState.students = action.payload;
            newState.isLoading = false;
            return Object.assign({}, state, newState)
        case StudentAction.GET_STUDENTS_FAIL:
            return Object.assign({}, state, { isLoading: false })
        default:
            return state;
    }
}