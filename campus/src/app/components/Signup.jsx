import * as React from "react";

class SignupComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="container text-center" style={{ marginTop: "50px" }}>
                <h2 className="form-signin-heading col-sm-4 col-sm-offset-4">{(this.props.isProfileRoute) ? <span>Edit</span> : <span>Register</span>}</h2>
                <form className="col-sm-4 col-sm-offset-4 auth-form-body" onSubmit={this.props._submit} >
                    <div>
                        <label htmlFor="Username" className="pull-left">{this.props.isCompanyRoute ? <span> Name</span> : <span>Username</span>}</label>
                        <input type="text" name="name"
                            id="Username" className="form-control"
                            placeholder="Username"
                            required autoFocus
                            value={this.props.user.name}
                            onChange={this.props._inputHandler}
                            />
                        <br />
                    </div>

                    {!this.props.isCompanyRoute && <div>
                        <label htmlFor="Firstname" className="pull-left">Firstname</label>
                        <input type="text" name="firstname"
                            id="Firstname" className="form-control"
                            placeholder="Firstname"
                            required autoFocus
                            value={this.props.user.firstname}
                            onChange={this.props._inputHandler}
                            />
                    </div>}

                    {!this.props.isCompanyRoute && <div>
                        <br />
                        <label htmlFor="Lastname" className="pull-left">Lastname</label>
                        <input type="text" name="lastname"
                            id="Lastname" className="form-control"
                            placeholder="Lastname"
                            required autoFocus
                            value={this.props.user.lastname}
                            onChange={this.props._inputHandler}
                            />
                        <br />
                    </div>}
                    {this.props.isCompanyRoute && <div>
                        <br />
                        <label htmlFor="Address" className="pull-left">Address</label>
                        <input type="text" name="address"
                            id="Address" className="form-control"
                            placeholder="Address"
                            required autoFocus
                            // value={this.props.user.address}
                            onChange={this.props._inputHandler}
                            />
                        <br />
                    </div>}
                    {this.props.isCompanyRoute && <div>
                        <label htmlFor="inputEmail" className="pull-left">Email address</label>
                        <input type="email" name="email"
                            id="inputEmail" className="form-control"
                            placeholder="Email address"
                            required
                            // disabled={this.props.isProfileRoute}
                            // value={this.props.user.email}
                            onChange={this.props._inputHandler}
                            />
                    </div>}
                    {this.props.isProfileRoute &&  <div>
                        <label htmlFor="inputEmail" className="pull-left">Email address</label>
                        <input type="email" name="email"
                            id="inputEmail" className="form-control"
                            placeholder="Email address"
                            required
                            disabled={this.props.isProfileRoute}
                            value={this.props.user.email}
                            onChange={this.props._inputHandler}
                            />
                    </div>}
                    <br />
                    {!this.props.isProfileRoute &&
                        <div >
                            <label htmlFor="inputPassword" className="pull-left">Password</label>
                            <input type="password" name="password"
                                id="inputPassword" className="form-control"
                                placeholder="Password"
                                required
                                onChange={this.props._inputHandler}
                                />
                        </div>
                    }

                    {this.props.isProfileRoute &&
                        <div>
                            <label htmlFor="Year" className="pull-left">Year</label>
                            <input type="text" name="year"
                                id="Year" className="form-control"
                                placeholder="Year"
                                required
                                value={this.props.user.year}

                                onChange={this.props._inputHandler}
                                />
                        </div>
                    }
                    <br />
                    {this.props.isProfileRoute &&
                        <div >
                            <label htmlFor="gpa" className="pull-left">GPA</label>
                            <input type="text" name="gpa"
                                id="gpa" className="form-control"
                                placeholder="GPA"
                                required
                                value={this.props.user.gpa}
                                onChange={this.props._inputHandler}
                                />
                        </div>
                    }
                    <br />
                    <button className="btn btn-lg btn-primary btn-block" type="submit" >
                        {this.props.isProfileRoute ? <span>Update</span> : <span>Sign up</span>}
                    </button>
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