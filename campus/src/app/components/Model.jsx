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
                            <h4 className="modal-title">
                            </h4>
                        </div>
                        <form className="col-sm-12" onSubmit={this.props._PostHandler}>
                            <div className="modal-body">
                                <div >
                                    <label htmlFor="title">Title</label><br />
                                    <input onChange={this.props._InputHandler} type="text" name="title" id="title" className="form-control" placeholder="Enter Title here.."
                                        required autoFocus  />
                                </div>
                                <br />
                                <div >
                                    <label htmlFor="desc">Description</label><br />
                                    <input type="text" name="desc" onChange={this.props._InputHandler} id="desc" className="form-control" placeholder="Enter Description here.."
                                        required />
                                </div>
                                <br />
                                <div >
                                    <label htmlFor="salary">Salary</label><br />
                                    <input type="number" onKeyUp={this.props._InputHandler} name="salary" id="salary" className="form-control" placeholder="Enter Salary here.."
                                        required />
                                </div>
                                <br />
                                <button className="btn btn-primary pull-right" type="submit" >Post</button>
                            </div>
                        </form>
                        <div className="modal-footer"></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Model;