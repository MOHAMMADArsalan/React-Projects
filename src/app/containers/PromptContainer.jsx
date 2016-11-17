import React from "react";
import style from "../styles/index.jsx";
import Prompt from "../components/prompt.jsx";
class PromptContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            username: ""
        }

        this.handlerUpdateUser = this.handlerUpdateUser.bind(this);
        this.handlerSubmitUser = this.handlerSubmitUser.bind(this);
    }
    handlerUpdateUser(e) {
        this.setState({
            username: e.target.value
        })
    }
    handlerSubmitUser(e) {
        e.preventDefault();
        console.log(this.state)
        let userName = this.state.username;
        this.setState({
            username: ""
        });
        if (this.props.routeParams.playerOne) {
            this.context.router.push({
                pathname: "/battle",
                query: {
                    playerOne: this.props.routeParams.playerOne,
                    playerTwo: this.state.username
                }
            });
        } else {
            this.context.router.push("/playerTwo/" + this.state.username);
        }
    }
    render() {
        return (
        <Prompt 
            onSubmitUser={this.handlerSubmitUser}
            onUpdateUser={this.handlerUpdateUser}
            header={this.props.route.header}
            username={this.state.username}/>
        )
    }
}
 PromptContainer.contextTypes = {
        router: React.PropTypes.object.isRequired
}
export default PromptContainer;