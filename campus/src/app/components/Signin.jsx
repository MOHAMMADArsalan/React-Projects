import * as React from "react";

class SigninComponent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container text-center" style={{ marginTop: "50px" }}>
                <h2 className="form-signin-heading col-sm-4 col-sm-offset-4">Please Sign in</h2>
                <form className="col-sm-4 col-sm-offset-4 auth-form-body" onSubmit={this.props._submit}>
                    <div>
                        <label htmlFor="inputEmail" className="pull-left">Email address</label>
                        <input type="email" name="email"
                            id="inputEmail" className="form-control"
                            placeholder="Email address"
                            required autoFocus
                            onChange={this.props._inputHandler}
                        />
                    </div>
                    <br />
                    <div >
                        <label htmlFor="inputPassword" className="pull-left">Password</label>
                        <input type="password" name="password"
                            id="inputPassword" className="form-control"
                            placeholder="Password"
                            required
                            onChange={this.props._inputHandler}
                        />
                    </div>
                    <br />
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>
                <div className="col-sm-4 col-sm-offset-4 text-center" style={{ marginTop: "10px" }}> Don't have account?? <a className="cursor-pointer">Create an account.</a>
                </div>
            </div>
        )
    }
}
SigninComponent.PropTypes = {
    _inputHandler : React.PropTypes.func.isRequired,
    _submit : React.PropTypes.func.isRequired

}
export default SigninComponent;