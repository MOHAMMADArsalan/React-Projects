import * as React from "react";

let Time = (props) => {
    if (props.timeLeft == 0 || props.timeLeft == null) {
        // document.getElementById("end-of-time").play();
        return <div></div>
    }
    return <h1>Time left: {props.timeLeft}</h1>

}

export default Time; 