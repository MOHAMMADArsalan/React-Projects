import * as React from "react";

class Link extends React.Component {
    render() {
        const url = `/${this.props.label.toLowerCase().trim().replace('', '-')}`
        return (
            <div>
                <a href={url}>{this.props.label}</a>
                <br />
            </div>
        )
    }
}
export default Link;