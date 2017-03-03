import Validator from "validator";
function isEmpty(object) {
    return Object.keys(object).length === 0 ? true : false
}
function validatorInput(data) {
    let errors = {};
    if (Validator.isEmpty(data.username)) {
        errors.username = 'User Name is Required'
    }
    if (Validator.isEmpty(data.firstname)) {
        errors.firstname = 'First Name is Required'
    }
    if (Validator.isEmpty(data.lastname)) {
        errors.lastname = 'Last Name is Required'
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email is Required'
    }
    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is not Valid'
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password is Required'
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}
export default validatorInput