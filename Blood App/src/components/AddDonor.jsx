import * as React from "react";
import { Modal } from "./index.js"
import { FirebaseService } from "./../services/firebaseService.js";
import validator from "validator";
// import validatorInput from "./../validation/signup.js"
class AddDonor extends React.Component {
    constructor() {
        super()
        this.InputHandler = this.InputHandler.bind(this);
        this.dateHandler = this.dateHandler.bind(this);
        this.startTimeHandler = this.startTimeHandler.bind(this);
        this.endTimeHandler = this.endTimeHandler.bind(this);
        this.addDonorHandler = this.addDonorHandler.bind(this);

        this.state = {
            bloodGroup: 1,
            Name: '',
            Address: '',
            ContactNo: '',
            date: '',


        }
    }
    dateHandler(e, date) {
        let fullDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        this.setState({
            date: fullDate
        })
    }
    startTimeHandler(e, date) {
        let fullTime = `${date.getHours()}:${date.getMinutes()}`
        this.setState({
            startTime: fullTime
        })
    }
    endTimeHandler(e, date) {
        let fullTime = `${date.getHours()}:${date.getMinutes()}`
        this.setState({
            endTime: fullTime
        })
    }

    InputHandler(e, date) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    bloodGroupHandler = (event, index, value) => {
        this.setState({ bloodGroup: value })
    }
    isValid() {
        // const {errors, isValid} = validatorInput(this.state);
        if (!isValid) {
            this.setState({ errors })
        }
        return isValid
    }
    addDonorHandler(e) {
        e.preventDefault();
        if (this.isValid()) {
            let multipath = {};
            // let  pushKey = FirebaseService.getPushKey('/user-posts').key;
            // multipath[`donors/${pushKey}`] = this.state;
            // multipath[`category/${pushKey}`] = this.state.category;
            // let obj = Object.assign({},this.state)
            // obj['posted-by'] = this.props.currentUser.uid
            // multipath[`posts/${pushKey}`] = obj
            console.log("currentUser", this.state)
            // this.props.addPost(multipath)

        }
    }
    render() {
        { console.log("this.stateeeeeeeeeeeeeeeeeeeee", this.state) }
        return (
            <Modal
                InputHandler={this.InputHandler}
                dateHandler={this.dateHandler}
                startTimeHandler={this.startTimeHandler}
                endTimeHandler={this.endTimeHandler}
                addDonorHandler={this.addDonorHandler}
                bloodGroupHandler={this.bloodGroupHandler}
                bloodGroup={this.state.bloodGroup}
            />
        )
    }
}
export default AddDonor;