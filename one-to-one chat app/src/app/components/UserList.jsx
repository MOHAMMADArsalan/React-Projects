import * as React from "react";

class UsersList extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <ul className="list-group" style={{ padding: '10px' }}>
                {Object.keys(this.props.users).map((uid, index) => {
                    if (uid != this.props.currentUser.uid) {
                        return <li onClick={() => { this.props.getUserConversation(this.props.currentUser.uid,this.props.users[uid]['conversationId']) }} className="list-group-item flex" key={index} style={{ marginBottom: "5px" }}>
                                    <div>
                                        <img className="profileImage" src={this.props.users[uid]['profileImage']} alt="" />
                                    </div>
                                    <div className="userName">
                                        {this.props.users[uid]['firstname'] + " " + this.props.users[uid]['lastname']}
                                    </div>
                        </li>

                    }
                })}
            </ul >
        )
    }
}
export default UsersList;