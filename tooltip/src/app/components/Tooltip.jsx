import * as React from "react";
import * as ReactDOM from "react-dom";
class Tooltip extends React.Component {
    constructor() {
        super();
        this.state = {
            opacity: false
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        const tooltipNode = ReactDOM.findDOMNode(this);
        console.log("toggle", tooltipNode)
        this.setState({
            opacity: !this.state.opacity,
            top: tooltipNode.offsetTop,
            left: tooltipNode.offsetLeft
        })
    }
    render() {
        let style = {
            zIndex: (this.state.opacity) ? 1000 : -1000,
            opacity: +this.state.opacity,
            top: (this.state.top || 0) + 20,
            left: (this.state.left || 0) - 30
        }
        return (
            <div style={{ display: 'inline' }}>
                <span style={{ color: 'blue' }}
                    onMouseEnter={this.toggle}
                    onMouseOut={this.toggle}
                    >
                    {this.props.children}
                </span>
                <div className="tooltip bottom" style={style} role="tooltip">
                    <div className="tooltip-arrow"></div>
                    <div className="tooltip-inner">
                        {this.props.text}
                    </div>
                </div>
            </div>
        )
    }
}


// let Tooltip = (props) => {
//     return (
//         <button style={{marginRight: '20px'}} className="btn btn-primary" onClick={props._toggleSearch}>{props.children}</button>
//     )
// }
export default Tooltip;