import React from "react";
import style from "../styles/index.jsx";
import TodoAdd from "./../components/TodoAdd.jsx"
import TodoList from "./../components/Todo.jsx"
class Todo extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: [],
            value: ''
        }
        this.inputHandler = this.inputHandler.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }
    item = ''
    inputHandler(e) {
        this.item = e.target.value
    }
    addTodo() {
        if (this.item) {
            let todo = this.state.todos;
            todo.push(this.item)
            this.setState({
                todos: todo,
                value: ''
            })

        }
    }
    render() {
        return (
            <div className="jumbotron col-sm-offset-2 col-sm-8 text-center">
                <TodoAdd
                    inputHandler={this.inputHandler}
                    addTodo={this.addTodo}
                    value={this.state.value}
                    />
                <TodoList todos={this.state.todos} />
            </div>
        )
    }
}
export default Todo;