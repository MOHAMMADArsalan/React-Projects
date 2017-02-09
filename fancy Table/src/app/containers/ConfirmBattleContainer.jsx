import React from "react";
import ConfirmBattle from "../components/ConfirmBattle.jsx";
import githubHelpers from "../utils/githubHelper.jsx";
class ConfirmBattleContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            playerInfo: []
        }
        this.handlerInitiateBattle = this.handlerInitiateBattle.bind(this);
    }
    componentDidMount() {
        let query = this.props.location.query;
        githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
            .then((players) => {
                this.setState({
                    loading: false,
                    playerInfo: [...players]
                })
            });
        //Fetch Info from github then update state
    }
    handlerInitiateBattle() {
        this.context.router.push({
            pathname:"/results",
            state: {
                playerInfo: this.state.playerInfo
            }
        })
    }
    render() {
        return (
            <ConfirmBattle
                isLoading={this.state.loading}
                onInitiateBattle={this.handlerInitiateBattle}
                playerInfo={this.state.playerInfo}
                />
        );
    }
};
ConfirmBattleContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
}
export default ConfirmBattleContainer;
