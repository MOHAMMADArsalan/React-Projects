import * as React from "react";
import AddSlot from "./../components/AddSlot.jsx"
import { connect } from "react-redux";
import { ParkingAction } from "./../store/actions/parking.js";
import { FirebaseService } from "./../services/FirebaseService.js"
function mapStateToProps(state) {
    return {
        temp: state.parkingReducer['temp'],
        avail: state.parkingReducer['avail']
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getOneParkingData: (locationId, slotId) => { dispatch(ParkingAction.getOneParkingData(locationId, slotId)) },
        getParkingAvailablity: (locationId, slotId, data) => { dispatch(ParkingAction.getParkingAvailablity(locationId, slotId, data)) }
    }
}
class Slot extends React.Component {
    constructor() {
        super();
        this.state = {
            invalid: false
        }
        this.SlotSelectHandler = this.SlotSelectHandler.bind(this);
        this.addSlot = this.addSlot.bind(this);

    }
    hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    selectHours = [1, 2, 3, 4, 5, 6];
    location = '';
    slot = '';
    hour = 0;
    selecthour = 1;
    date = new Date().toISOString().substring(0, 10);
    selectedDate = new Date().toISOString().split('T')[0]
    componentWillMount() {
        if (this.props.location && this.props.location.query) {
            this.location = this.props.location.query.location
            this.slot = this.props.location.query.slot.split("slot")[1]
        }
    }
    componentDidMount() {
        let user = JSON.parse(localStorage.getItem("online-parking-system"));
        user = JSON.parse(user)
        this.props.getOneParkingData(this.location, this.slot);
        this.props.getParkingAvailablity(this.location, this.slot, new Date().toISOString().split('T')[0])
        setTimeout(() => {
            this.setState({
                temp: this.props.temp,
                avail: this.props.avail,
                user: user
            })
        }, 2000)
    }
    SlotSelectHandler(userSelect, type) {
        if (type === 'hour' && (this.date == new Date().toISOString().split('T')[0])) {
            this.hour = parseInt(userSelect);
            if (this.state.avail.length && this.state.avail[this.state.avail.indexOf(+userSelect)] != -1) {
                this.setState({ invalid: true })
            } else {
                this.setState({ invalid: false })

            }
        } else if (type === 'selecthour' && (this.date == new Date().toISOString().split('T')[0])) {
            this.selecthour = parseInt(userSelect);
            let sh = parseInt(userSelect) + parseInt(this.hour);
            let flag = false;
            for (let i = this.hour + 1; i <= sh; i++) {
                if (this.state.avail.length && this.state.avail[this.state.avail.indexOf(i)] != -1) {
                    this.setState({ invalid: true })
                    break;
                } else {
                    this.setState({ invalid: false })
                }
            }
        } else if (type == 'date') {
            if (userSelect != new Date().toISOString().split('T')[0]) {
                this.selectedDate = userSelect;
                this.setState({ invalid: false })
            } else {
                if (this.state.avail.length && this.state.avail[this.state.avail.indexOf(+this.hour) != -1]) {
                    this.setState({ invalid: true })
                } else {
                    this.setState({ invalid: false })
                    this.selectedDate = userSelect;
                }
                let sh = parseInt(this.selecthour) + parseInt(this.hour);
                for (let i = this.hour + 1; i <= sh; i++) {
                    if (this.state.avail.length && this.state.avail[this.state.avail.indexOf(i)] != -1) {
                        this.setState({ invalid: true })
                        break;
                    } else {
                        this.setState({ invalid: false })
                        this.selectedDate = userSelect;
                    }
                }
            }
        }
    }
    addSlot() {
        if (this.state.invalid) {
            return false;
        }
        let multipath = {};
        let date = this.selectedDate.split("-")
        let key = FirebaseService.getPushRef("/parking-location").key //this._fb.getPushRef("/parking-location").push().key;
        let EndTime = new Date(+date[0], date[1] - 1, +date[2], (new Date().getHours() + (this.selecthour)), new Date().getMinutes(), new Date().getSeconds());
        EndTime = new Date(EndTime).getTime();

        let StartTime = new Date(+date[0], date[1] - 1, +date[2], (new Date().getHours() + (this.hour)), new Date().getMinutes(), new Date().getSeconds());
        StartTime = new Date(StartTime).getTime();

        multipath[`parking-location/${this.location}/${this.slot}/status`] = 1;
        multipath[`parking-location/${this.location}/${this.slot}/booked-by`] = this.state.user.uid;
        multipath[`parking-location/${this.location}/${this.slot}/start-time`] = StartTime;
        multipath[`parking-location/${this.location}/${this.slot}/end-time`] = EndTime;
        multipath[`parking-location/${this.location}/${this.slot}/key`] = key;
        multipath[`parking-location/${this.location}/${this.slot}/date`] = this.selectedDate;
        multipath[`parking-location/${this.location}/${this.slot}/startHours`] = this.hour;
        multipath[`parking-location/${this.location}/${this.slot}/selectHours`] = this.selecthour;
        let loopLength = this.selecthour;
        for (let i = 0; i < loopLength; i++) {
            let loopLength = this.selecthour - this.hour;
            multipath[`parking-availablity/${this.location}/${this.slot}/${this.selectedDate}/${key}/${i}`] = (this.hour) + i;
        }
        multipath[`user-parking/${this.state.user.uid}/${key}/status`] = 1;
        multipath[`user-parking/${this.state.user.uid}/${key}/date`] = this.selectedDate;
        multipath[`user-parking/${this.state.user.uid}/${key}/slot`] = "Slot" + " " + this.slot;
        multipath[`user-parking/${this.state.user.uid}/${key}/location`] = this.location;
        multipath[`user-parking/${this.state.user.uid}/${key}/booked-by`] = this.state.user.uid;
        multipath[`user-parking/${this.state.user.uid}/${key}/start-time`] = StartTime;
        multipath[`user-parking/${this.state.user.uid}/${key}/end-time`] = EndTime;
        FirebaseService.saveMultipath(multipath).then(
            () => {
                this.context.router.push({
                    pathname: "/home"
                })
            },
            (err) => {
                console.log("errrrrrrrrrrrrrrrrrrr", err)
            })
    }
    render() {
        // {console.log("this.props.avail",this.props.avail)}
        return (
            <div className="container" style={{ marginTop: '100px' }}>
                <AddSlot
                    _slots={this.slots}
                    _hours={this.hours}
                    _selectHours={this.selectHours}
                    _temp={this.state.temp}
                    _avail={this.state.avail}
                    _SlotSelectHandler={this.SlotSelectHandler}
                    _invalid={this.state.invalid}
                    _addSlot={this.addSlot}
                    ></AddSlot>
            </div>
        )
    }
}
Slot.contextTypes = {
    router: React.PropTypes.object.isRequired
}
export default connect(mapStateToProps, mapDispatchToProps)(Slot);