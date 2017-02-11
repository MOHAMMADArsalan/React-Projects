import * as React from "react";
import Dashboard from "./../components/Dashboard.jsx"
class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            tab: 'company',
            post: { salary: '', title: '', desc: '' }
        }

        this.InputHandler = this.InputHandler.bind(this);
        this.showData = this.showData.bind(this);
    }
    showData(type) {
        console.log("showData", type)
        this.setState({
            tab: type
        })
    }
    InputHandler(e) {
        console.log("eeeeeeeeeeeeeeeeeeee", e)
    }
    componentWillMount() {
        if (!this.props.location.state) {
            let user = JSON.parse(localStorage.getItem("Campus-Recruitment-System"));
            console.log("Campus-Recruitment-System", JSON.parse(user))
            if (user) {
                user = JSON.parse(user);
                this.setState({
                    userType: user.type
                })
            }
            // user = JSON.parse(user);
            // if ()
        } else {
            this.setState({
                userType: this.props.location.state.type
            })
        }
        console.log("propsssssssss", this.props)
        // t.location
    }
    Post(e) {
        e.preventDefault();
        console.log("this.state",this.state.post)
    }
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <Dashboard _InputHandler={this.InputHandler} userType={this.state.userType} tab={this.state.tab} showData={this.showData}></Dashboard>
            </div>
        )
    }
}
export default Home;