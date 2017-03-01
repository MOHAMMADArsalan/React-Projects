import * as React from "react";
import Navbar from "./NavBar.jsx";
import UsersList from "./UserList.jsx"
import ChatBox from "./chatBox.jsx"
class Dashboard extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="container flex">
                    <div className="userList">
                        <UsersList
                            users={this.props.users}
                            currentUser={this.props.currentUser}
                            getUserConversation={this.props.getUserConversation}
                        />
                    </div>
                    <div className="chatBox">

                        <ChatBox
                            chatInputHandler={this.props.chatInputHandler}
                            activeMessageId={this.props.activeMessageId}
                            sendMessage={this.props.sendMessage}
                            message={this.props.message}
                            chats={this.props.chats}
                            currentUser={this.props.currentUser}
                            chatImageHandler={this.props.chatImageHandler}
                            isSending={this.props.isSending}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
export default Dashboard;