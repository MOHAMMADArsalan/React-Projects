import * as React from "react";

class Feedback extends React.Component {
    constructor() {
        super();
    }
    deleteFeedback(feedbackKey) {
        let multipath = {}
        multipath[`feedback/${feedbackKey}`] = null;
        this.props.deleteFeedback(multipath)
    }
    render() {
        return (
            <div className="container">
                <h1>Feedback List</h1>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    {(Object.keys(this.props._feedbacks)).map((feedbackKey) => {
                        return < div className="panel panel-default fadeInDown" key={feedbackKey}>
                            <div className="panel-body">
                                <p><strong>Email: <a >{this.props._feedbacks[feedbackKey]['email']} </a></strong></p>
                                <p className="flexSpaceBetween"><b>Name:{this.props._feedbacks[feedbackKey]['name']}</b> <button className="btn btn-danger" onClick={() => { this.deleteFeedback (feedbackKey)} }><i className="glyphicon glyphicon-trash"></i> delete</button></p>
                                <p>{this.props._feedbacks[feedbackKey]['feedback']}</p>
                            </div >
                        </div >
                    })}
                </div >
            </div >
        )
    }
}
export default Feedback;
