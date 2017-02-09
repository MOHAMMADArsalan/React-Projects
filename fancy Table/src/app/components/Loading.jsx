import React from "react";
let PropTypes = React.PropTypes;
var styles = {
    container: {
        position: "fixed",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        fontSize: "55px"
    },
    content: {
        textAlign: "center",
        position: "absolute",
        width: "100%",
        marginTop: "30px"
    }
}

class Loading extends React.Component {
    constructor() {
        super();
        this.state = {
            text: "Loading"
        }
    }
    static get defaultProps() {
        return {
            text: 'Loading',
            speed: 300
        }
    }
    componentWillMount() {
        this.setState({
            text : this.props.text
        })
    }
    componentDidMount() {
        this.originalText = this.props.text;
        let stopper = this.originalText + "...";
        this.interval = setInterval(() => {
            if (stopper === this.state.text) {
                this.setState({
                    text: this.originalText
                })
            } else {
                this.setState({
                    text: this.state.text + "."
                })
            }
        }, this.props.speed)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
        return (
            <div style={styles.container}>
                <p style={styles.content}>{this.state.text}</p>
            </div>
        )
    }
}

Loading.PropTypes =  { 
    text: PropTypes.string,
    speed: PropTypes.number
}
export default Loading;