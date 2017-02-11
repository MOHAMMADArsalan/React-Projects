import * as React from "react";
import Model from "./Model.jsx"
class CompanyData extends React.Component {
    constructor() {
        super();
        this.state = {
            showModel: false
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        console.log("toggle",this.state)
        this.setState({
            showModel: !this.state.showModel
        })
    }
    render() {
        return (
            <div className="container">
                <div className="flexSpaceBetween">
                    <h1>POST LIST</h1>
                    <button type="button" className="btn btn-primary height35px marginTop20px" data-toggle="modal"
                        data-target="#myModal" onClick={this.toggle}>ADD POST</button>
                </div>

                <Model showModel={this.state.showModel} _InputHandler={this.props._InputHandler}></Model>
            </div>
        )
    }
}
export default CompanyData;