import * as React from "react";
import TableHeader from "./TableHeader.jsx";
import TableBody from "./TableBody.jsx"
class Table extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="table-responsive text-center">
                <table className="table table-striped">
                    <TableHeader headers={this.props.headers} />
                    <TableBody data={this.props.data} type={this.props.type}/>
                </table>
            </div>
        )
    }
}
export default Table;