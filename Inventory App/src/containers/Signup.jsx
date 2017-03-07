// React Dependencies
import * as React from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router"
// material-ui
import { Card } from "material-ui/Card";
//Store
import { AuthActions } from "./../store/actions/index.js"

//Validations
import Validator from "validator";
import validatorInput from "./../validation/signup.js"

//custom components
import { LoginAppBar, SignUpFrom } from "./../components/index.js"


function mapStateToProps(state) {
    return {
        isRegister: state['authReducer'].isRegister,
        isLoading: state['authReducer'].isLoading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        register: (object) => dispatch(AuthActions.register(object))
    }
}
class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            type: 2,
            username: '',
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            errors: {}
        }
        // this.inputHandler = this.inputHandler.bind(this);
        // this.onsubmit = this.onsubmit.bind(this);
    }
    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentWillReceiveProps(nextProps) {

        if (nextProps.isRegister) {
            browserHistory.push('/signin')
        }
    }
    isValid = () => {
        const {errors, isValid} = validatorInput(this.state);

        if (!isValid) {
            this.setState({ errors })
        }

        return isValid;

    }
    onsubmit = (e) => {
        this.setState({ errors: {} })
        e.preventDefault()
        if (this.isValid()) {
            this.props.register(this.state)
        }
    }
    render() {
        return (
            <div>
                <LoginAppBar />
                <div style={{ maxWidth: "800px", margin: '0 auto', marginTop: '25px' }}>
                    <Card style={{ padding: 20 }} onSubmit={this.onsubmit} onChange={this.inputHandler}>
                        <SignUpFrom isLoading={this.props.isLoading} errors={this.state.errors} />
                    </Card>
                </div>

            </div>
        )

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Signup);