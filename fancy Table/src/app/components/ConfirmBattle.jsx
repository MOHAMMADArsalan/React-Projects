import React from "react";
import style from "../styles/index.jsx";
import { Link } from "react-router";
import UserDetails from "./UserDetails.jsx"
import UserDetailsWrapper from "./UserDetailsWrapper.jsx";
import MainContainer from "../containers/MainContainer.jsx"
import Loading from "./Loading.jsx";
let ConfirmBattle = (props) => {
    return props.isLoading === true
        ? <Loading text="Wait" speed={500} />
        : <MainContainer>
            <h1>Confirm Players</h1>
            <div className="col-sm-8 col-sm-offset-2">
                <UserDetailsWrapper header="Player One">
                    <UserDetails info={props.playerInfo[0]} />
                </UserDetailsWrapper>
                <UserDetailsWrapper header="Player Two">
                    <UserDetails info={props.playerInfo[1]} />
                </UserDetailsWrapper>
            </div>
            <div className="col-sm-8 col-sm-offset-2">
                <div className="col-sm-12" style={style.space}>
                    <button
                        type="button"
                        className="btn btn-success btn-lg"
                        onClick={props.onInitiateBattle}>
                        Initiate Battle
                    </button>
                </div>
                <div className="col-sm-12" style={style.space}>
                    <Link to="/PlayerOne">
                        <button
                            type="button"
                            className="btn btn-danger btn-lg">
                            Reselect Players
                         </button>
                    </Link>
                </div>
            </div>
        </MainContainer>
}

ConfirmBattle.PropTypes = {
    isLoading: React.PropTypes.bool.isRequired,
    playerInfo: React.PropTypes.array.isRequired,
    onInitiateBattle: React.PropTypes.func.isRequired
}
export default ConfirmBattle;