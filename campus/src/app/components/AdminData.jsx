import * as React from "react";
import Table from "./Table.jsx"
class AdminData extends React.Component {
    constructor() {
        super();
    }
    checkTab() {
        if (this.props.tab === 'company') {
            let headers = ['Address', 'Email', 'Company Name']
            return <div className="tab-pane active" id="tab1" style={{ color: 'black' }}>
                <Table headers={headers} data={this.props._companies} type={'company'}></Table>
            </div>

        } else if (this.props.tab === 'students') {
            let headers = ["email", "gpa", "Username", "year"]
            return <div className="tab-pane active" id="tab2" style={{ color: 'black' }}>
                <Table headers={headers} data={this.props._studentList} type={'student'}></Table>

            </div>

        } else if (this.props.tab === 'posts') {
            let headers = ["address", "applied", "applied-count", "desc", "email", "name", "salary", "title"]
            return <div className="tab-pane active" id="tab3" style={{ color: 'black' }}>
                <Table headers={headers} data={this.props._post} type={'post'} ></Table>
            </div>
        }
    }
    render() {
        return (
            <div className="container">
                <h1>List</h1>
                <ul className="nav nav-tabs nav-justified">
                    <li className="active" onClick={() => { this.props.showData('company') }}><a data-toggle="tab">Companies List</a></li>
                    <li onClick={() => { this.props.showData('students') }} > <a data-toggle="tab">Students List</a></li>
                    <li onClick={() => { this.props.showData('posts') }}  > <a data-toggle="tab">Posts List</a></li>

                </ul>
                <div className="container marginTop20px">
                    <div className="row text-center">
                        <div className="tab-content clearfix">
                            {this.checkTab()}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AdminData;