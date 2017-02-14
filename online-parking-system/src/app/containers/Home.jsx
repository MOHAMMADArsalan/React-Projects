import * as React from "react";
import Dashboard from "./../components/Dashboard.jsx";
import { connect } from "react-redux";
import { ParkingAction } from "./../store/actions/index.js";
import { FirebaseService } from "./../services/FirebaseService.js";
function mapStateToProps(state) {
    return {
        parkings: state.parkingReducer['parkings']
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getParkingLocation: () => { dispatch(ParkingAction.getParking()) },
        getParkingDetailByUser: (uid) => { dispatch(ParkingAction.getParkingDetailByUser(uid)) },
    }
}
class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            tab: 'company',
            post: { salary: '', title: '', desc: '' },
            posted: false,
            posts: [],
            isFeedbackSend: false,
            feedback: ''
        }

        this.showData = this.showData.bind(this);
        this.feedBackHandler = this.feedBackHandler.bind(this);
        this.sendFeedBack = this.sendFeedBack.bind(this);
    }
    showData(type) {
        this.setState({
            tab: type
        })
    }
    InputHandler(e) {
        let post = this.state.post;
        post[e.target.name] = e.target.value;
        this.setState({
            post: post
        })
    }
    componentWillMount() {
        if (!this.props.location.state) {
            let user = JSON.parse(localStorage.getItem("online"));
            if (user) {
                user = JSON.parse(user);
                this.setState({
                    userType: user.type,
                    user: user
                })
            }
        } else {
            this.setState({
                userType: this.props.location.state.type,
                user: this.props.location.state
            })
        }
    }
    feedBackHandler(e) {
        this.setState({
            feedback: e.target.value
        })
    }
    sendFeedBack() {
        let multipath = {};
        let Obj = {};
        let key = FirebaseService.getPushRef("/feedback").key
        Obj['feedback'] = this.state.feedback;
        Obj['timestamp'] = FirebaseService.firebaseTimeStamp;
        Obj['name'] = this.state.user.firstname + " " + this.state.user.lastname;
        Obj['feedback-by'] = this.state.user.uid;
        Obj['email'] = this.state.user.email;
        multipath[`feedback/${key}`] = Obj;
        FirebaseService.saveMultipath(multipath).then(() => {
            this.setState({
                isFeedbackSend: true,
                feedback: ''
            })
        }, (err) => { console.log("ERROR: ", err) })
    }
    componentDidMount() {
        if (this.state.userType) {
            if (this.state.userType === 1) {
            } else if (this.state.userType === 2) {
                this.props.getParkingDetailByUser(this.state.user.uid)
                this.props.getParkingLocation()
            }
        }
    }

    render() {
        return (
            <div>
                <Dashboard
                    _InputHandler={this.InputHandler}
                    userType={this.state.userType}
                    _currentUser={this.state.user}
                    _parkings={this.props.parkings}
                    feedBackHandler={this.feedBackHandler}
                    sendFeedBack={this.sendFeedBack}
                    isFeedbackSend={this.state.isFeedbackSend}
                    feedback={this.state.feedback}
                    ></Dashboard>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);


