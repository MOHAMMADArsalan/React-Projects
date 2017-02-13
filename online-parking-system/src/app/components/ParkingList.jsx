import * as React from "react";

class ParkingList extends React.Component {
    constructor() {
        super()
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
                                                {(slot['status'] && (slot['booked-by'] == this.props._currentUser.uid || this.props._currentUser.type == 1)) ? <button className="btn btn-primary" disabled={(slot['status'] && slot['booked-by'] != this.props._currentUser.uid)}>Booked <i className="glyphicon glyphicon-ok"></i></button>: null}
                                                {(slot['status'] && this.props._currentUser.type == 1) ?  <button className="btn btn-danger"><i className="glyphicon glyphicon-trash"></i></button> : null}

                                            </span>
                                            <button className="btn btn-primary"  >Apply For Booking</button></li>
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
