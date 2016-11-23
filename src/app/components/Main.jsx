import React from "react";
import "./../main.css";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

let PropTypes = React.PropTypes;

class Main extends React.Component {
    render() {
        return (
            <div className="main-container">
                <ReactCSSTransitionGroup
                    transitionName="appear"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                    >
                    {React.cloneElement(this.props.children, { key: this.props.location.pathname })}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default Main;