import * as React from "react";
import { Modal } from "./index.js"
import { FirebaseService } from "./../services/firebaseService.js"
class AddProduct extends React.Component {
    constructor() {
        super()
        this.InputHandler = this.InputHandler.bind(this);
        this.dateHandler = this.dateHandler.bind(this);
        this.startTimeHandler = this.startTimeHandler.bind(this);
        this.endTimeHandler = this.endTimeHandler.bind(this);
        this.addProductHandler = this.addProductHandler.bind(this);

        this.state = {

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
    addProductHandler(e) {
        let multipath = {};
        let  pushKey = FirebaseService.getPushKey('/user-posts').key;
        multipath[`user-posts/${this.props.currentUser.uid}/${pushKey}`] = this.state;
        multipath[`posts/${pushKey}`] = this.state;
        multipath[`category/${pushKey}`] = this.state.category;
        let obj = Object.assign({},this.state)
        obj['posted-by'] = this.props.currentUser.uid
        multipath[`posts/${pushKey}`] = obj
        console.log("currentUser", this.props.currentUser)
        this.props.addPost(multipath)
        // e.preventDefault();
    }
    render() {
        return (
            <Modal
                InputHandler={this.InputHandler}
                dateHandler={this.dateHandler}
                startTimeHandler={this.startTimeHandler}
                endTimeHandler={this.endTimeHandler}
                addProductHandler={this.addProductHandler}
            />
        )
    }
}
export default AddProduct;