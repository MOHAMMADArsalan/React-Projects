import * as React from "react";
import ParkingList from "./ParkingList.jsx"

class UserData extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">
                <h1>PARKING LIST </h1>
                <ParkingList _parkings={this.props._parkings}
                    _currentUser={this.props._currentUser}
                    ></ParkingList>
            </div>
        )
    }
}
export default UserData;