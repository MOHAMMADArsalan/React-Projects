import * as React from "react";
import NavBar from "./NavBar.jsx"
import Table from "./Table.jsx"
class UserParkingDetail extends React.Component {
    constructor() {
        super();
    }
    render() {
        let headers = ['Slot Name', 'Location', 'Start Time', 'End Time', 'Delete', 'Print']
        return (
            <div>
                <NavBar type={this.props.type} />
                <Table headers={headers}
                    _currentUser={this.props._currentUser}
                    parkingDetail={this.props.parkingDetail} 
                    delete={this.props.delete}/>
            </div>
        )
    }
}
export default UserParkingDetail;