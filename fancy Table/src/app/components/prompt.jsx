import React from "react";
import style from "../styles/index.jsx";

let Prompt = (props) => {
    return (
        <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={style.tranparentBg}>
            <h1>{props.header}</h1>
            <div className="col-sm-12">
                <form onSubmit={props.onSubmitUser}>
                    <div className="form-group">
                        <input type="text" className="form-control"
                            placeholder="Github Username"
                            onChange={props.onUpdateUser}
                            value={props.username} />
                    </div>
                    <div className="form-group col-sm-4 col-sm-offset-4">
                        <button className="btn btn-success btn-block" type="submit">
                            Continue
                          </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
Prompt.protoTypes = {
    header: React.PropTypes.string.isRequired,
    username:React.PropTypes.string.isRequired,
    onSubmitUser: React.PropTypes.func.isRequired,
    onUpdateUser: React.PropTypes.func.isRequired
}
export default Prompt;