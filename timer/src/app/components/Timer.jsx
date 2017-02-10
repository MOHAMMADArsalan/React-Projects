import * as React from "react";
import * as ReactDOM from "react-dom";
import Button from "./Button.jsx";
import Time from "./Time.jsx";
class TimeWrapper extends React.Component {
    constructor() {
        super();
        this.state = {
            timeLeft: null,
            timer: null
        }
        this.startTimer = this.startTimer.bind(this);
    }
    startTimer(timeLeft) {
        clearInterval(this.state.timer);
        let time = setInterval(() => {
            var timeLeft = this.state.timeLeft - 1;
            if (timeLeft == 0) clearInterval(timer);
            this.setState({ timeLeft: timeLeft })
        })
        console.log("startTimer", startTimer)
    }
    render() {

        return (
            <div >
                <h1>Hello World</h1>
                <Button _startTimer={this.startTimer}>Click</Button>
                <Time></Time>
            </div>
        )
    }
}

export default TimeWrapper;