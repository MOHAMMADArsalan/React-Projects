import React from "react";
import githubHelpers from "./../utils/githubHelper.jsx"
import Results from "../components/Result.jsx";

class ResultContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            scores: []
        }
    }
    componentDidMount() {
        githubHelpers.battle(this.props.location.state.playerInfo)
            .then((scores) => {
                this.setState({
                    scores: scores,
                    isLoading: false
                })
            })
    }
    render() {
        return (
            <Results
                isLoading={this.state.isLoading}
                scores={this.state.scores}
                playerInfo={this.props.location.state.playerInfo}
                />
        )
    }
}

export default ResultContainer;