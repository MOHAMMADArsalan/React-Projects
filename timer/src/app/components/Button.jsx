import * as React from "react";

class Button extends React.Component {
    render() {
        return (
            <button>{this.props.children}</button>
        )
     }
}
Button.PropTypes = {
    _startTimer: React.PropTypes.func.isRequired
}
export default Button;