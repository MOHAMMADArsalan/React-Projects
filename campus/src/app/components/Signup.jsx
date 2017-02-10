import * as React from "react";

class SignupComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="container text-center" style={{ marginTop: "50px" }}>
                <h2 className="form-signin-heading col-sm-4 col-sm-offset-4">Please Sign up</h2>
                <form className="col-sm-4 col-sm-offset-4 auth-form-body" onSubmit={this.props._submit} >
                    <div>
                        <label htmlFor="Username" className="pull-left">Username</label>
                        <input type="text" name="username"
                            id="Username" className="form-control"
                            placeholder="Username"
                            required autoFocus
                            onChange={this.props._inputHandler}
                        />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="inputEmail" className="pull-left">Email address</label>
                        <input type="email" name="email"
                            id="inputEmail" className="form-control"
                            placeholder="Email address"
                            required
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
                    <button className="btn btn-lg btn-primary btn-block" type="submit" >Sign up</button>
                </form>
            </div>
        )
    }
}
SignupComponent.PropTypes = {
    _inputHandler: React.PropTypes.func.isRequired,
    _submit: React.PropTypes.func.isRequired

}
export default SignupComponent;