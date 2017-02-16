import React from "react";
class TodoList extends React.Component {
    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.props.todos.map((val, index) => {
                        return <li key={index} className="list-group-item" style={{marginBottom: '3px'}}>{val}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default TodoList;