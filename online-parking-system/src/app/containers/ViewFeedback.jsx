import * as React from "react";
import Feedback from "./../components/Feedback.jsx";
import { FirebaseService } from "./../services/FirebaseService.js";
import NavBar from "./../components/NavBar.jsx"
import { connect } from "react-redux";
import { ParkingAction } from "./../store/actions/parking.js";

function mapStateToProps(state) {
    return {
        feedback: state.parkingReducer['feedbacks'],
        user: state.authReducer['user']
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getFeedbacks: () => { dispatch(ParkingAction.getFeedbacks()) }
    }
}
class ViewFeedback extends React.Component {
    constructor() {
        super();
        this.deleteFeedback = this.deleteFeedback.bind(this);
    }
    componentWillMount() {
        let user = JSON.parse(localStorage.getItem("online-parking-system"));
        if (user) {
            user = JSON.parse(user);
            this.setState({
                userType: user.type,
                user: user
            })
        }
        this.props.getFeedbacks()
    }
    deleteFeedback(multipath) {
        FirebaseService.saveMultipath(multipath).then(() => {
            console.log("DELETE FEEDBACK")
        }
            , (err) => { console.error("ERROR TO DELETE FEEDBACK") })
    }
    render() {
        return (
            <div>
                <NavBar type={this.state.userType} />
                <Feedback _feedbacks={this.props.feedback}
                    deleteFeedback={this.deleteFeedback}

                    />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewFeedback);