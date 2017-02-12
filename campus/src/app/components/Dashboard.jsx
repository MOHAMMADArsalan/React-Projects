import * as React from "react";
import AdminData from "./AdminData.jsx";
import UserData from "./UserData.jsx";
import CompanyData from "./CompanyData.jsx";
import Navbar from "./NavBar.jsx"
class Dashboard extends React.Component {
    constructor() {
        super();
    }

    checkUsetType() {
        if (this.props.userType === 1) {
            return <AdminData
                tab={this.props.tab}
                _companies={this.props._companies}
                showData={this.props.showData}
                _studentList={this.props._studentList}
                _post={this.props._post}
                _currentUser={this.props._currentUser}
                _deletePost={this.props._deletePost}
                ></AdminData>

        } else if (this.props.userType === 2) {
            return <CompanyData
                _deletePost={this.props._deletePost}
                _companyPost={this.props._companyPost} 
                _currentUser={this.props._currentUser}
                _posted={this.props._posted} _PostHandler={this.props._PostHandler} _InputHandler={this.props._InputHandler} />
        }
        else if (this.props.userType === 3) {
            console.log("_currentUser", this.props._currentUser)
            return <UserData
                _post={this.props._post}
                _currentUser={this.props._currentUser}
                _apply={this.props._apply}
                />
        }
    }
    render() {
        return (
            <div>
                <Navbar type={this.props.userType} />
                <div className="container">
                    {this.checkUsetType()}
                </div>
            </div>
        )
    }
}
export default Dashboard;