import * as React from "react";
import AdminData from "./AdminData.jsx";
import UserData from "./UserData.jsx";
import Navbar from "./NavBar.jsx"
class Dashboard extends React.Component {
    constructor() {
        super();
    }

    checkUsetType() {
        if (this.props.userType === 1) {
            return <AdminData
                _currentUser={this.props._currentUser}
                _parkings={this.props._parkings}
                 deleteUserBookedParking={this.props.deleteUserBookedParking}
                ></AdminData>

        }
        else if (this.props.userType === 2) {
            return <UserData
                _currentUser={this.props._currentUser}
                _parkings={this.props._parkings}
                feedBackHandler={this.props.feedBackHandler}
                sendFeedBack={this.props.sendFeedBack}
                isFeedbackSend={this.props.isFeedbackSend}
                feedback={this.props.feedback}
               
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