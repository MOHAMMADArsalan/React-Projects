import * as React from "react";
import { ParkingAction } from "./../store/actions/parking.js"
import { connect } from "react-redux";
import UserParkingDetail from "./../components/UserParkingDetail.jsx"
import { FirebaseService } from "./../services/FirebaseService.js"

function mapStateToProps(state) {
    return {
        'parkingDetail': state.parkingReducer['parking-detail']
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getParkingDetailByUser: (uid) => { dispatch(ParkingAction.getParkingDetailByUser(uid)) }
    }
}
class ParkingDetail extends React.Component {
    constructor() {
        super();
        this.state = {

        }
        this.delete = this.delete.bind(this)
    }
    delete(multipath) {
        FirebaseService.saveMultipath(multipath).then(() => {
            console.log("deleteddddddddddddddddd")
        }, (err) => { console.log("ERROR: ", err) })
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
    }
    componentDidMount() {
        if (this.state.user) {
            this.props.getParkingDetailByUser(this.state.user.uid)
        }
    }
    render() {
        return (
            <div>
                <UserParkingDetail type={this.state.userType}
                    parkingDetail={this.props.parkingDetail}
                    _currentUser={this.state.user}
                    delete={this.delete} />
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ParkingDetail);
