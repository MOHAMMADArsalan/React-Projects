import * as React from "react";

class ChatReceiverItem extends React.Component {
    constructor() {
        super()
    }
    checkIsImageUrl(message) {
        if (message.indexOf('https') != -1) {
            return <img src={message} alt="" className="image" />
        } else {
            return <p>
                {message}
            </p>
        }
    }
    render() {
        return (

            <li className="left clearfix"><span className="chat-img pull-left">
                <img src={this.props.message['senderImage']} alt="User Avatar" className="profileImage" />
            </span>
                <div className="chat-body clearfix">
                    <div className="header">
                        <strong className="primary-font">{this.props.message['name']}</strong>
                        <small className="pull-right text-muted">
                            <span className="glyphicon glyphicon-time"></span>
                            {moment(this.props.message['timestamp']).fromNow()}</small>
                    </div>
                    {this.checkIsImageUrl(this.props.message['message'])}
                </div>
            </li>

        )
    }
}

export default ChatReceiverItem;