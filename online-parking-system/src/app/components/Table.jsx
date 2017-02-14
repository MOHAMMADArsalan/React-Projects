import * as React from "react";
import TableHeader from "./TableHeader.jsx";
import TableBody from "./TableBody.jsx"
class Table extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="table-responsive text-center container">
                <table className="table table-striped">
                    <TableHeader headers={this.props.headers} />
                    <TableBody _currentUser={this.props._currentUser}
                        data={this.props.parkingDetail} delete={this.props.delete}/>
                </table>
            </div>
        )
    }
}
export default Table;