import React from "react";
import MainContainer from "../containers/MainContainer.jsx";
import Headers from "./Headers.jsx";
import TableBody from "./tBody.jsx";
import Toolbar from "./Toolbar.jsx"
class Table extends React.Component {
    _log = [];

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
            edit: null,
            search: false,
            old_data: null
        }
        this.sort = this.sort.bind(this);
        this.showEditor = this.showEditor.bind(this);
        this.save = this.save.bind(this);
        this.toggleSearch = this.toggleSearch.bind(this);
        this.renderSearch = this.renderSearch.bind(this);
        this.search = this.search.bind(this);
        this.download = this.download.bind(this);

    }
    componentDidMount() {
        document.onkeydown = (e) => {
            if (e.altKey && e.shiftKey && e.keyCode === 82) {
                this._reply()
            }
        }
    }
    _reply() {
        if (this._log.length === 0) {
            console.warn("No State to replay yet");
            return;
        }
        let idx = -1;
        let interval = setInterval(() => {
            idx++;
            if (idx === this._log.length - 1) {
                clearInterval(interval);
            }
            this.setState(this._log[idx]);
        }, 1000)
    }
    _logSetState(newState) {
        //remember the old state in a clone;
        this._log.push(JSON.parse(JSON.stringify(this._log.length === 0 ? this.state : newState)));
        this.setState(newState)
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
        this.setState({
            edit: {
                row: parseInt(e.target.dataset.row, 10),
                cell: e.target.cellIndex
            }
        })
        // var edit = this.state.edit;
    }
    toggleSearch() {
        if (this.state.search) {
            this.setState({
                dataArray: this.state.old_data,
                search: false,
                old_data: null
            })
        } else {
            this.setState({
                old_data: this.state.dataArray,
                search: true
            })
        }
    }
    search(e) {
        let needle = e.target.value.toLowerCase();
        if (!needle) {
            this._logSetState({
                dataArray: this.state.old_data
            })
            return;
        }
        var idx = e.target.dataset.idx;
        let searchData = this.state.old_data.filter((row) => {
            return row[idx].toString().toLowerCase().indexOf(needle) > -1
        })
        this._logSetState({
            dataArray: searchData
        })
    }
    save(e) {
        e.preventDefault();
        let input = e.target.firstChild;
        let data = this.state.dataArray.slice();
        console.log("input.value",input.value,e.target)
        data[this.state.edit.row][this.state.edit.cell] = input.value;
        console.log("save", data)
        this.setState({
            edit: null,
            dataArray: data
        })
    }
    renderSearch() {
        if (!this.state.search) {
            return null;
        }
        return (<tr onChange={this.search}>
            {this.state.headers.map((_ignore, idx) => {
                return <td key={idx}>
                    <div className="form-group">
                        <input type="text" className="form-control" data-idx={idx} />
                    </div>
                </td>
            })}
        </tr>)
    }
    download(format, ev) {
        let contents = format === 'json'
            ? JSON.stringify(this.state.dataArray)
            : this.state.dataArray.reduce((result, row) => {
                return result
                    + row.reduce((rowResult, cell, idx) => {
                        return rowResult
                            + '"'
                            + cell.replace(/"/g, '""')
                            + '"'
                            + (idx < row.length - 1 ? ',' : '');
                    }, '')
                    + '\n';
            }, '');
        let URL = window.URL || window.webkitURL;
        let blob = new Blob([contents], { type: 'text/' + format });
        ev.target.href = URL.createObjectURL(blob);
        ev.target.download = 'data.' + format;
    }
    render() {
        return (

            <MainContainer>
                <h1>Fancy Table</h1>
                <div className="container">
                    <Toolbar _toggleSearch={this.toggleSearch}
                        _download={this.download}
                        ></Toolbar>
                    <table className="table table-hover">
                        <Headers
                            headers={this.state.headers}
                            _sort={this.sort}
                            sortby={this.state.sortby}
                            descending={this.state.descending}
                            />
                        <TableBody data={this.state.dataArray}
                            _edit={this.state.edit}
                            _showEditor={this.showEditor} _save={this.save}
                            _renderSearch={this.renderSearch}
                            />
                    </table>
                </div>
            </MainContainer>
        )
    }
}

export default Table