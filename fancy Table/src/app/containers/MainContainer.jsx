import React from "react";
import style from "../styles/index.jsx";
let MainContainer = (props) => {
    return (
        <div className="jumbotron col-sm-12 text-center" style={style.tranparentBg}>
            {props.children}
        </div>
    )
}

export default MainContainer;