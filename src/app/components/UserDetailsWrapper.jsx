import React from "react";

let UserDetailsWrapper = (props) => {
    return (
        <div className="col-sm-6">
            <p className="lead">{props.header}</p>
            {props.children}
        </div>
    )
}
export default UserDetailsWrapper;