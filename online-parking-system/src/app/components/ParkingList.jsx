import * as React from "react";
import { Link } from "react-router"
class ParkingList extends React.Component {
    constructor() {
        super()
        this.deleteUserBookedParking = this.deleteUserBookedParking.bind(this);
    }
    deleteUserBookedParking(locationId, slotNo, uuid, key) {
        let multipath = {};
        multipath[`user-parking/${uuid}/${key}`] = null;
        multipath[`parking-location/${locationId}/${slotNo}/booked-by`] = "";
        multipath[`parking-location/${locationId}/${slotNo}/end-time`] = "";
        multipath[`parking-location/${locationId}/${slotNo}/start-time`] = "";
        multipath[`parking-location/${locationId}/${slotNo}/status`] = 0;
        multipath[`parking-location/${locationId}/${slotNo}/key`] = "";
        this.props.deleteUserBookedParking(multipath)
    }
    render() {
        return (
            <div className="panel-group" id="accordion">
                {Object.keys(this.props._parkings).map((location, locationIndex) => {
                    return <div className="panel panel-default" key={locationIndex}>
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href={'#collapse' + locationIndex}>
                                    {location}
                                </a>
                            </h4>
                        </div>
                        <div id={'#collapse' + locationIndex} className="panel-collapse collapse in">
                            <div className="panel-body">
                                <ul className="list-group">
                                    {this.props._parkings[location].map((slot, slotIndex) => {
                                        return <li className="list-group-item list-item" key={slotIndex}>Name: {slot['name']}
                                            <span>
                                                {(slot['status'] && (slot['booked-by'] == this.props._currentUser.uid || this.props._currentUser.type == 1)) ? <button className="btn btn-primary" disabled={(slot['status'] && slot['booked-by'] != this.props._currentUser.uid)}>Booked <i className="glyphicon glyphicon-ok"></i></button> : null}
                                                {(slot['status'] && this.props._currentUser.type == 1) ? <button className="btn btn-danger" onClick={() => { this.deleteUserBookedParking(location, slotIndex, slot['booked-by'], slot['key']) } }><i className="glyphicon glyphicon-trash"></i></button> : null}
                                            </span>
                                            {(this.props._currentUser.type != 1 && slot['booked-by'] != this.props._currentUser.uid) && <Link className="btn btn-primary" to={{ pathname: '/add-slot', query: { location: location, slot: 'slot' + slotIndex } }}>Apply For Booking</Link>}

                                        </li>
                                    })}
                                </ul>
                            </div>
                        </div >
                    </div>
                })}
            </div>

        )
    }
}
export default ParkingList;