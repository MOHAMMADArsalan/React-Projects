import * as React from "react";
import ChatInputBox from "./chatInputBox.jsx";
import ChatReceiverItem from "./chatTo.jsx";
import ChatSenderItem from "./chatFrom.jsx";

class ChatBox extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <h1>Chat Box</h1>
                <div className="chatList">
                    <div className="panel-body">
                        <ul className="chat">
                            {this.props.chats[this.props.activeMessageId] && Object.keys(this.props.chats[this.props.activeMessageId]).map((messageId) => {
                                if (this.props.chats[this.props.activeMessageId][messageId]['senderId'] != this.props.currentUser.uid) {
                                    return <ChatReceiverItem key={messageId} message={this.props.chats[this.props.activeMessageId][messageId]} />

                                } else {
                                    return <ChatSenderItem key={messageId} message={this.props.chats[this.props.activeMessageId][messageId]} />
                                }
                            })}
                        </ul>
                    </div>
                    <div>
                        <ChatInputBox
                            chatInputHandler={this.props.chatInputHandler}
                            activeMessageId={this.props.activeMessageId}
                            sendMessage={this.props.sendMessage}
                            message={this.props.message}
                            chatImageHandler={this.props.chatImageHandler}
                            isSending={this.props.isSending}
                        />
                    </div>
                </div>
            </div>

        )
    }
}

export default ChatBox;