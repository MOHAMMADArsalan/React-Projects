import * as React from "react";

class Model extends React.Component {
    constructor() {
        super();
    }

    render() {
        let style = {
            display: this.props.showModel ? 'block' : 'none',
            opacity: this.props.showModel ? 1 : 0,
            top: "50px"
        }
        return (

            <div className="modal fade" id="myModal" role="dialog" style={style}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title"></h4>
                        </div>
                        <form className="col-sm-12" onSubmit={this.props._PostHandler}>
                            <div className="modal-body">
                                <div >
                                    <label htmlFor="Feedback">Feedback</label><br />
                                    <textarea style={{ width: '100%', reSize: 'none' }}
                                        id="Feedback" cols="30" rows="10"
                                        placeholder="Please Enter Your Feedback Here....."
                                        onChange={this.props.feedBackHandler}
                                        defaultValue={this.props.feedback}
                                        ></textarea>
                                    <button className="btn btn-primary pull-right" type="button" onClick={(e) => { e.preventDefault(); this.props.sendFeedBack() } }>Feedback</button>
                                </div>
                            </div>
                        </form>
                        <div className="modal-footer"></div>
                    </div>
                </div >
            </div >
        )
    }
}
export default Model;