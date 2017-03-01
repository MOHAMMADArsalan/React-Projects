import * as React from "react";

class ChatSenderItem extends React.Component {
    constructor() {
        super()
    }
    checkIsImageUrl(message) {
        if (message.indexOf('https') != -1) {
            return <img src={message} alt="" className="image"/>
        } else {
          return  <p>
                {message}
            </p>
        }
    }
    render() {
        return (

            <li className="right clearfix"><span className="chat-img pull-right">
                <img src={this.props.message['senderImage']} alt="User Avatar" className="profileImage" />
            </span>
                <div className="chat-body clearfix">
                    <div className="header">
                        <small className=" text-muted"><span className="glyphicon glyphicon-time"></span> {moment(this.props.message['timestamp']).fromNow()}</small>
                        <strong className="pull-right primary-font">{this.props.message['name']}</strong>
                    </div>
                    {this.checkIsImageUrl(this.props.message['message'])}
                </div>
            </li>

        )
    }
}

export default ChatSenderItem;