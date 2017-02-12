import * as React from "react";

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar-wrapper">
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
                    <a className="navbar-brand" >Campus Recruitment System</a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li ><a >Dashboard</a></li>
                        {this.props.type === 1 && <li ><a >Add Company</a></li>}
                        {this.props.type === 3 && <li><a> Profile</a></li>}
                        <li  className="cursor"><a >Logout</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</div>
        )
    }
}
export default Navbar;