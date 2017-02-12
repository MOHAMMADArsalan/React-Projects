import * as React from "react";
import Table from "./Table.jsx"

class UserData extends React.Component {
    constructor() {
        super();
    }

    render() {
                 let headers = ["address","Desc", "email", "Salary", "Title","Apply"]
        return (
            <div className="container">
                <h1>POST LIST </h1>
             <div className="tab-pane active" id="tab3" style={{ color: 'black' }}>
                <Table _apply={this.props._apply} _currentUser={this.props._currentUser} headers={headers} data={this.props._post} type={'post-student'} ></Table>
            </div>
            </div >
        )
    }
}
export default UserData;