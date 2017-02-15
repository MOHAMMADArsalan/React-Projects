import * as React from "react";

class TableBody extends React.Component {
    constructor() {
        super();
        this.delete = this.delete.bind(this);
    }
    convertTime(time) {
        if (time) {
            let fullTime = (new Date(1487169624000)).toISOString()
            let date = fullTime.split("T")[0];
            let time = fullTime.split("T")[1];
            time = time.split('.')[0]
            return date + " " + time;
        }
    }
    delete(key, location, slotId, date) {
        let slot = slotId.split(" ")[1];
        let multipath = {};
        multipath[`user-parking/${this.props._currentUser.uid}/${key}`] = null;
        multipath[`parking-location/${location}/${slot}/booked-by`] = "";
        multipath[`parking-availablity/${location}/${slot}/${date}/${key}`] = null;

        multipath[`parking-location/${location}/${slot}/end-time`] = "";
        multipath[`parking-location/${location}/${slot}/start-time`] = "";
        multipath[`parking-location/${location}/${slot}/status`] = 0;
        multipath[`parking-location/${location}/${slot}/key`] = "";
        this.props.delete(multipath)
    }
    print() {
        window.print()
    }
    render() {
        return (
            <tbody>
                {Object.keys(this.props.data).map((parkingKey, index) => {
                    return <tr key={index}>
                        <td>{this.props.data[parkingKey]['slot']}</td>
                        <td>{this.props.data[parkingKey]['location']}</td>
                        <td>{this.convertTime(this.props.data[parkingKey]['start-time'])}</td>
                        <td>{this.convertTime(this.props.data[parkingKey]['end-time'])}</td>
                        <td><button className="btn btn-danger" onClick={() => { this.delete(parkingKey, this.props.data[parkingKey]['location'], this.props.data[parkingKey]['slot'], this.props.data[parkingKey]['date']) } } ><i className="glyphicon glyphicon-trash"></i> Delete</button></td>
                        <td><button className="btn btn-primary" onClick={this.print}>Print</button></td>
                    </tr>
                })}
            </tbody>
        )
    }
}
export default TableBody;