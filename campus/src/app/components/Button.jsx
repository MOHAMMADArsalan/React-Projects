import * as React from "react";

class Button extends React.Component {
    render() {
        return (
            <button className="btn btn-default"
                onClick={() => { this.props._startTimer(this.props.children) }}>
                {this.props.children} seconds
            </button>
        )
    }
}
Button.PropTypes = {
    _startTimer: React.PropTypes.func.isRequired
}
export default Button;