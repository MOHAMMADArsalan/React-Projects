import React from "react";
import UserDetails from "./UserDetails.jsx"
import UserDetailsWrapper from "./UserDetailsWrapper.jsx";
import { Link } from "react-router";
import style from "../styles/index.jsx";
import MainContainer from "../containers/MainContainer.jsx";
import Loading from "./Loading.jsx";
let PropTypes = React.PropTypes;

let StartOver = () => {
    return (
        <div className="col-sm-12" style={style.space}>
            <Link to="playerOne">
                <button className="btn btn-danger btn-lg" type="button"> Start Over</button>
            </Link>
        </div>
    )
}

let Results = (props) => {
    if (props.isLoading === true) {
        return <Loading speed={100} text="One Moment" />
    }
    console.log(props.scores[0] === props.scores[1])
    if (props.scores[0] === props.scores[1]) {
        return (
            <MainContainer>
                <h1>It's a tie!</h1>
                <StartOver />
            </MainContainer>
        )
    }
    let winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
    let losingIndex = winningIndex === 0 ? 1 : 0;
    return (
        <MainContainer>
            <h1>Result</h1>
            <div className="col-sm-8 col-sm-offset-2">
                <UserDetailsWrapper header="Winner">
                    <UserDetails
                        score={props.scores[winningIndex]}
                        info={props.playerInfo[winningIndex]}
                        />
                </UserDetailsWrapper>
                <UserDetailsWrapper header="Loser">
                    <UserDetails
                        score={props.scores[losingIndex]}
                        info={props.playerInfo[losingIndex]}
                        />
                </UserDetailsWrapper>
            </div>
            <StartOver />
        </MainContainer>
    )
}
Results.PropTypes = {
    isLoading: PropTypes.bool.isRequired,
    scores: PropTypes.array.isRequired,
    playerInfo: PropTypes.array.isRequired
}
export default Results;