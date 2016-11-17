import React from "react";

class ProfileLink extends React.Component {
    render() {
        return (
            <a href={"https://www.github.com/" + this.props.username}>
                {this.props.username}
            </a>
        )
    }
}

export default ProfileLink;