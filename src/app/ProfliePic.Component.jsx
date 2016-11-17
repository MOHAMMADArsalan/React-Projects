import React from "react";

class ProfilePic extends React.Component {
    render() {
        return (
            <img src={this.props.imgUrl} style={{width:100,height:100}}/>
        )
    }
}

export default ProfilePic;