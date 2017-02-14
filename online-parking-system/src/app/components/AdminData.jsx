import * as React from "react";
import NavBar from "./NavBar.jsx"
import ParkingList from "./ParkingList.jsx"

class AdminData extends React.Component {
    constructor() {
        super();
    }
    render() {
        let headers = ['Slot Name', 'Location', 'Start Time', 'End Time', 'Delete', 'Print']
        return (
            <div className="container">
                <h1>List</h1>
                <ParkingList _parkings={this.props._parkings}
                    _currentUser={this.props._currentUser}
                    ></ParkingList>
            </div>
        )
    }
}
export default AdminData;