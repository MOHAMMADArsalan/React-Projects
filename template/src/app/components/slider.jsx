import React, { Component } from "react";
import { Link } from "react-router"
export default class Slider extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-wrapper">
                    <div className="logo">
                        <a href="http://www.creative-tim.com" className="simple-text">
                            <div className="logo-img">
                                <img src="http://coenraets.org/present/react/img/react.png" />
                            </div>
                           React
            </a>
                    </div>
                    <ul className="nav">
                        <li>
                            <Link to="/">
                                <i className="fa fa-tachometer"></i>
                                <p>Dashboard</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/user">
                                <i className="fa fa-user"></i>
                                <p>User profile</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/table-list">
                                <i className="fa fa-table"></i>
                                <p>Table List</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/typography">
                                <i className="fa fa-newspaper-o"></i>
                                <p>Typography</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/icons">
                                <i className="fa-font-awesome"></i>
                                <p>Icons</p>
                            </Link>
                        </li>
                        <li>
                            <Link  to="/maps">
                                <i className="fa-map-marker"></i>
                                <p>Maps</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/notifications">
                                <i className="fa fa-globe "></i>
                                <p>Notifications</p>
                            </Link>
                        </li>
                        <li style={{position: "absolute",width: "100%",bottom: "10px"}}>
                            <Link to="/pro">
                                <i className="fa-rocket"></i>
                                <p>Upgrade to PRO</p>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>

        )
    }
}