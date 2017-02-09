import React from "react";
import MainContainer from "../containers/MainContainer.jsx";
import Headers from "./Headers.jsx";
import TableBody from "./tBody.jsx"
class Table extends React.Component {
    constructor() {
        super();
        this.state = {
            headers: ["Book", "Author", "Language", "Published", "Sales"],
            dataArray: [
                ["The Lord of the Rings", "J. R. R. Tolkien",
                    "English", "1954–1955", "150 million"],
                ["Le Petit Prince (The Little Prince)", "Antoine de Saint-Exupéry",
                    "French", "1943", "140 million"],
                ["Harry Potter and the Philosopher's Stone", "J. K. Rowling",
                    "English", "1997", "107 million"],
                ["And Then There Were None", "Agatha Christie",
                    "English", "1939", "100 million"],
                ["Dream of the Red Chamber", "Cao Xueqin",
                    "Chinese", "1754–1791", "100 million"],
                ["The Hobbit", "J. R. R. Tolkien",
                    "English", "1937", "100 million"],
                ["She: A History of Adventure", "H. Rider Haggard",
                    "English", "1887", "100 million"]
            ],
            sortby: null,
            descending: false,
            edit: null
        }
        this.sort = this.sort.bind(this);
        this.showEditor = this.showEditor.bind(this);
        this.save = this.save.bind(this);
    }
    sort(e) {
        let column = e.target.cellIndex;
        let descending = this.state.sortby === column && !this.state.descending;
        let data = Array.from(this.state.dataArray.slice());
        data.sort((a, b) => {
            return descending ? (a[column] < b[column] ? 1 : -1) : (a[column] > b[column] ? 1 : -1)
        })
        this.setState({
            dataArray: data,
            sortby: column,
            descending: descending
        })
    }
    showEditor(e) {
        console.log("eeeeeeeeeeeeeeeeee", e.target.dataset.row, e.target.cellIndex)
        this.setState({
            edit: {
                row: parseInt(e.target.dataset.row, 10),
                cell: e.target.cellIndex
            }
        })
        // var edit = this.state.edit;
    }
    save(e) {
        e.preventDefault();
        let input = e.target.firstChild;
        let data = this.state.dataArray.slice();
        data[this.state.edit.row][this.state.edit.cell] = input.value;
        this.setState({
            edit: null,
            data: data
        })
        console.log("wewewewewewewewewewe", e)
    }
    render() {
        return (

            <MainContainer>
                <h1>TABLE</h1>
                <div className="container">
                    <table>
                        <Headers
                            headers={this.state.headers}
                            _sort={this.sort}
                            sortby={this.state.sortby}
                            descending={this.state.descending}
                            />
                        <TableBody data={this.state.dataArray}
                            _edit={this.state.edit}
                            _showEditor={this.showEditor} _save={this.save} />
                    </table>
                </div>
            </MainContainer>
        )
    }
}

export default Table