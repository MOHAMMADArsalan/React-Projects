import * as React from "react";

let Button = (props) => {
    return (
        <button style={{marginRight: '20px'}} className="btn btn-primary" onClick={props._toggleSearch}>{props.children}</button>
    )
}
export default Button;