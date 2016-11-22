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
    }
    componentDidMount() {
        let query = this.props.location.query;
        githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
            .then((players) => {
                this.setState({
                    loading: false,
                    playerInfo:[...players]
                })
            });
        //Fetch Info from github then update state
    }
    render() {
        return (
            <ConfirmBattle
                isLoading={this.state.loading}
                playerInfo={this.state.playerInfo}
                />
        );
    }
};
ConfirmBattleContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
}
export default ConfirmBattleContainer;
