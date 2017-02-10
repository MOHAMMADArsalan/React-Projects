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
        }, 1000)
        console.log("startTimer", startTimer)
        return this.setState({ timeLeft: timeLeft, timer: timer })
    }
    render() {

        return (
            <div className="row-fluid">
                <h2>Timer</h2>
                <div className="btn-group" role="group" >
                    <Button time="5" _startTimer={this.startTimer} />
                    <Button time="10" _startTimer={this.startTimer} />
                    <Button time="15" _startTimer={this.startTimer} />
                </div>
                <Time timeLeft={this.state.timeLeft} />
                <audio id="end-of-time" src="flute_c_long_01.wav" preload="auto"></audio>
            </div>
        )
    }
}

export default TimeWrapper;