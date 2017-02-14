import * as React from "react";

class TableBody extends React.Component {
    constructor() {
        super();
        this.delete = this.delete.bind(this);
    }
    convertTime (time) {
        if(time) {
            let fullTime = (new Date(1487169624000)).toISOString()
            let date =  fullTime.split("T")[0];
            let time =  fullTime.split("T")[1];
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
    render() {
        return (
            <tbody>
                {this.props.data.map((list, index) => {
                    return <tr key={index}>
                        <td>{list['slot']}</td>
                        <td>{list['location']}</td>
                        <td>{this.convertTime(list['start-time'])}</td>
                        <td>{this.convertTime(list['end-time'])}</td>
                        <td><button className="btn btn-danger" onClick={() => { this.delete(list['$key'],list['location'],list['slot'],list['date'])} } ><i className="glyphicon glyphicon-trash"></i> Delete</button></td>
                        <td><button className="btn btn-primary">Print</button></td>
                    </tr>
                })}
            </tbody>
        )
    }
}
export default TableBody;