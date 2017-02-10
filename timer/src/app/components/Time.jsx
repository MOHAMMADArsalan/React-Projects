import * as React from "react";

class Time extends React.Component {
    render() {
        if (this.props.timeLeft == 0 || this.props.timeLeft == null) {
            document.getElementById("end-of-time").play();
            return <div></div>
        }
        return <h1>Time left: {this.props.timeLeft}</h1>
    }
}

export default Time; 