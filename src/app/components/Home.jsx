import React from "react";
import { Link } from "react-router";
import MainContainer from "../containers/MainContainer.jsx"
class Home extends React.Component {
    render() {
        return (
            <MainContainer>
                <h1>Github Battle</h1>
                <p className="lead"> Some Fancy motto</p>
                <Link to="/playerOne">
                    <button className="btn btn-lg btn-success" type="button">Get Started</button>
                </Link>
            </MainContainer>
        )
    }
}

export default Home;