import * as React from "react";
import { Link} from "react-router"
let NavLoginBar = () => {
    return ( <div className="navbar-wrapper">
            <div className="">
                <nav className="navbar navbar-inverse navbar-static-top">
                    <div className="flex">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"
                                aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" >Online Parking System</a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li><Link to="/signin"> Login </Link> </li>
                                <li ><Link to="/signup"> Signup </Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        </div>
    )
}

export default NavLoginBar;