import React from "react";
import ProfilePic from "./ProfliePic.Component.jsx";
import ProfileLink from "./ProfileLink.Component.jsx";
import ProfileName from "./ProfileName.Component.jsx";

class Avatar extends React.Component {
    render() {
        return <div>
        <ProfilePic imgUrl={this.props.user.image}/>
        <ProfileName name={this.props.user.name}/>
        <ProfileLink username={this.props.user.username}/>
        </div>
    }
}

export default Avatar;