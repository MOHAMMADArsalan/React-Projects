import * as React from "react";
import ParkingList from "./ParkingList.jsx"
import Model from "./../components/Model.jsx"
class UserData extends React.Component {
    constructor() {
        super();
        this.state = {
            showModel: false
        }
        this.toggler = this.toggler.bind(this);
    }
     componentWillReceiveProps(newProps) {
        if (newProps.isFeedbackSend) {
            this.setState({
                showModel: false
            })
        }
    }
    toggler() {
        this.setState({
            showModel: !this.state.showModel
        })

    }
    render() {
        return (
            <div className="container">
                <div className="flexSpaceBetween">
                    <h1>PARKING LIST </h1>
                    <button className="btn btn-primary height35px" onClick={this.toggler}> Feed back</button>
                </div>
                <Model showModel={this.state.showModel}
                    sendFeedBack={this.props.sendFeedBack}  
                    feedBackHandler={this.props.feedBackHandler}
                     feedback={this.props.feedback}
                    />

                <ParkingList _parkings={this.props._parkings}
                    _currentUser={this.props._currentUser}
                    ></ParkingList>
            </div>
        )
    }
}
export default UserData;