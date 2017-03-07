import React, {Component} from "react";

export default class UserComponent extends Component {
    render() {
        return (
            <div className="main-content" >
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-8">
                <div className="card">
                    <div className="header">
                        <h4 className="title">Edit Profile</h4>
                    </div>
                    <div className="content">
                        <form>
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="form-group">
                                        <label>Company (disabled)</label>
                                        <input type="text" className="form-control" disabled placeholder="Company" value="Creative Code Inc." />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="text" className="form-control" placeholder="Username" value="michael23" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" placeholder="Email" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input type="text" className="form-control" placeholder="Company" value="Mike" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input type="text" className="form-control" placeholder="Last Name" value="Andrew" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input type="text" className="form-control" placeholder="Home Address" value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>City</label>
                                        <input type="text" className="form-control" placeholder="City" value="Mike" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Country</label>
                                        <input type="text" className="form-control" placeholder="Country" value="Andrew" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Postal Code</label>
                                        <input type="number" className="form-control" placeholder="ZIP Code" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>About Me</label>
                                        <textarea rows="5" className="form-control" placeholder="Here can be your description" value="Mike">Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</textarea>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-info btn-fill pull-right">Update Profile</button>
                            <div className="clearfix"></div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card card-user">
                    <div className="image">
                        <img src="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400" alt="..."/>
                    </div>
                    <div className="content">
                        <div className="author">
                            <a href="#">
                                <img className="avatar border-gray" src="http://lbd-angular2.creative-tim.com/assets/img/faces/face-3.jpg" alt="..."/>

                                <h4 className="title">Mike Andrew<br />
                                    <small>michael24</small>
                                </h4>
                            </a>
                        </div>
                        <p className="description text-center"> "Lamborghini Mercy <br />
                            Your chick she so thirsty <br />
                            I'm in that two seat Lambo"
                        </p>
                    </div>
                    <hr />
                    <div className="text-center">
                        <button href="#" className="btn btn-simple"><i className="fa fa-facebook-square"></i></button>
                        <button href="#" className="btn btn-simple"><i className="fa fa-twitter"></i></button>
                        <button href="#" className="btn btn-simple"><i className="fa fa-google-plus-square"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

        )
    }
}