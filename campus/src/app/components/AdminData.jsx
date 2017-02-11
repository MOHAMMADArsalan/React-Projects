import * as React from "react";
class AdminData extends React.Component {
    constructor() {
        super();
    }
    checkTab() {
        if (this.props.tab === 'company') {
            return <div className="tab-pane" id="tab1">
                <h1>Company</h1>
            </div>

        } else if (this.props.tab === 'students') {
            console.log("students", this.props.tab)
            return <div className="tab-pane" id="tab2">
                <h1>students</h1>
            </div>

        } else if (this.props.tab === 'posts') {
            return <div className="tab-pane" id="tab3">
                <h1>posts</h1>
            </div>
        }
    }
    render() {
        return (
            <div className="container">
                <h1>List</h1>
                <ul className="nav nav-tabs nav-justified">
                    <li className="active" onClick={() => { this.props.showData('company') } }><a data-toggle="tab">Companies List</a></li>
                    <li onClick={() => { this.props.showData('students') } } > <a data-toggle="tab">Students List</a></li>
                    <li onClick={() => { this.props.showData('posts') } }  > <a data-toggle="tab">Posts List</a></li>

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