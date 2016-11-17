import React from "react";
import style from "../styles/index.jsx";
import {Link} from "react-router"
class Home extends React.Component {
    render() {
        return (
          <div className="jumbotron col-sm-12 text-center" style={style.tranparentBg}>
              <h1>Github Battle</h1>
              <p className="lead"> Some Fancy motto</p>
              <Link to="/playerOne">
                <button className="btn btn-lg btn-success" type="button">Get Started</button>
              </Link>
          </div>
        )
    }
}

export default Home;