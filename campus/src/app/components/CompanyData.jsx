import * as React from "react";
import Model from "./Model.jsx"
import Table from "./Table.jsx"

class CompanyData extends React.Component {
    constructor() {
        super();
        this.state = {
            showModel: false
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        console.log("toggle", this.state)
        this.setState({
            showModel: !this.state.showModel
        })
    }
    componentWillReceiveProps(newProps) {
        if (newProps._posted) {
            this.setState({
                showModel: false
            })
        }
    }
    render() {
         let headers = ["address", "applied-count", "desc", "email", "name", "salary", "title","delete"]
        return (
            <div className="container">
                <div className="flexSpaceBetween">
                    <h1>POST LIST</h1>
                    <button type="button" className="btn btn-primary height35px marginTop20px" data-toggle="modal"
                        data-target="#myModal" onClick={this.toggle}>ADD POST</button>
                </div>
                    <Table headers={headers} data={this.props._companyPost} type={'post'} ></Table>
                <Model
                    showModel={this.state.showModel}
                    _InputHandler={this.props._InputHandler}
                    _PostHandler={this.props._PostHandler}
                    ></Model>
            </div>
        )
    }
}
export default CompanyData;