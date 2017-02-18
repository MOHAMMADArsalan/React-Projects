import * as React from "react";
import Dashboard from "./../components/Dashboard.jsx";
import { connect } from "react-redux";
import { FirebaseService } from "./../services/FirebaseService.js";
import { AuthActions, ChatAction } from "./../store/actions/index.js"
function mapStateToProps(state) {
    return {
        users: state.authReducer['users'],
        user: state.authReducer['user'],
        conversationIds: state.chatReducer['conversationIds'],
        chats: state.chatReducer['chats']
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getAllUsers: () => { dispatch(AuthActions.getAllUser()) },
        getUserConversation: (userConId, otherConId, messageId) => { dispatch(ChatAction.getUserConversation(userConId, otherConId, messageId)) }
    }
}
class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            activeMessageId: '',
            message: '',
            senderId: '',
            receiverId: '',

        }
        this.getUserConversation = this.getUserConversation.bind(this);
        this.chatInputHandler = this.chatInputHandler.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.chatImageHandler = this.chatImageHandler.bind(this);

    }
    isSending = false;
    fileName = ''
    allowExtension = {
        "png": "png",
        "jpg": "jpg",
        "gif": "gif",
        "jpeg": "jpeg",
    }
    componentWillMount() {
        if (!this.props.location.state) {
            let user = JSON.parse(localStorage.getItem("chat-app"));
            if (user) {
                user = JSON.parse(user);
                this.setState({
                    user: user
                })
            }
        } else {
            this.setState({
                user: this.props.location.state
            })
        }
    }
    getUserConversation(userConId, otherConId, receiverName, receiverImage) {
        let messageId = userConId + otherConId;
        messageId = messageId.split("").sort().join("")
        this.setState({
            activeMessageId: messageId,
            senderId: userConId,
            receiverId: otherConId,
            receiverName: receiverName,
            receiverImage: receiverImage
        }, () => {
            this.props.getUserConversation(userConId, otherConId, messageId)
        })
    }
    componentDidMount() {
        this.props.getAllUsers();
    }
    chatInputHandler(e) {
        this.setState({
            message: e.target.value
        })
    }
    sendMessage(e) {
        if (e) e.preventDefault();
        let key = FirebaseService.getPushRef("messages").key;
        let multipath = {};
        let obj = {
            message: this.state.message,
            senderId: this.state.senderId,
            receiverId: this.state.receiverId,
            timestamp: FirebaseService.firebaseTimeStamp,
            receiverName: this.state.receiverName,
            senderName: this.state.user.name,
            receiverImage: this.state.receiverImage,
            senderImage: this.state.user.profileImage
        }
        if (this.fileName) {
            obj['message'] = this.fileName
        }
        multipath[`messages/${this.state.activeMessageId}/${key}`] = obj;
        FirebaseService.saveMultipath(multipath).then(() => {
            this.setState({
                message: '',
                isSending: false
            })
            this.isSending = false;
            this.fileName = '';
        }, (err) => {
            console.log("ERROR : ", err)
        })
    }
    chatImageHandler(e) {
        this.setState({
            isSending: true
        })
        this.fileName = e;
        let file = this.fileName.target.files[0]
        let extension = this.fileName.target.value.split(".").pop();
        extension = extension.toLowerCase();
        let image = this.fileName.target.value.split("\\")[2];
        let fileName = image.split('.')[0];
        fileName += Date.now() + "." + extension;
        if (this.allowExtension[extension] === extension) {
            FirebaseService.uploadImageOnStorageBlob('/chat/' + fileName, file).then((url) => {
                this.fileName = url
                this.sendMessage()
            })

        }
    }
    render() {
        return (
            <div>
                <Dashboard
                    users={this.props.users}
                    currentUser={Object.keys(this.props.user).length ? this.props.user : this.state.user}
                    getUserConversation={this.getUserConversation}
                    activeMessageId={this.state.activeMessageId}
                    chatInputHandler={this.chatInputHandler}
                    sendMessage={this.sendMessage}
                    message={this.state.message}
                    chats={this.props.chats}
                    chatImageHandler={this.chatImageHandler}
                    isSending={this.state.isSending}
                ></Dashboard>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);


