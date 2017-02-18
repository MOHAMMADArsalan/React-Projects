import * as React from "react";

class ChatInputBox extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <form className="flex" onSubmit={this.props.sendMessage} style={{ position: 'relative' }}>
                <label htmlFor="image" className="cameraIcon">
                    <span className="glyphicon glyphicon-camera" ></span>
                </label>
                {this.props.isSending && <span className="glyphicon glyphicon-refresh glyphicon-spin"></span>}
                <input type="file" id="image" style={{ display: 'none' }} onChange={this.props.chatImageHandler} />
                <textarea className="chatInput" onChange={this.props.chatInputHandler}
                    disabled={!this.props.activeMessageId}
                    value={this.props.message}></textarea>
                <button type="submit" className="sendButton" disabled={!this.props.activeMessageId}>Send</button>
            </form>

        )
    }
}

export default ChatInputBox;