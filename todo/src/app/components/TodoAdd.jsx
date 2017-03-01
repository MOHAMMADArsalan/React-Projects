import * as React from "react";
import * as ReactDOM from "react-dom";
class TodoAdd extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <input type="text" className="form-control" id="usr" defaultValue={this.props.value} onChange={this.props.inputHandler} />
                </div>
                <button className="btn btn-primary" onClick={this.props.addTodo}>Add Item</button>
                <br />
                <br />
                <br />
            </div>
        )
    }
}

export default TodoAdd;