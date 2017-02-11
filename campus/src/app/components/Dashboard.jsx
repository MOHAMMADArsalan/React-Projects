import * as React from "react";
import AdminData from "./AdminData.jsx";
import UserData from "./UserData.jsx";
import CompanyData from "./CompanyData.jsx";

class Dashboard extends React.Component {
    constructor() {
        super();
    }

    checkUsetType() {
        if (this.props.userType === 1) {
            return <AdminData tab={this.props.tab} showData={this.props.showData}></AdminData>

        } else if (this.props.userType === 2) {
            console.log("abc@c.com", this.props.userType)
            return <CompanyData _InputHandler={this.props._InputHandler}/>
        }
        else if (this.props.userType === 3) {
            return <UserData />
        }
    }
    render() {
        return (
            <div className="container">
                {this.checkUsetType()}
            </div>
        )
    }
}
export default Dashboard;

//  <div className="container">
//                     <h1>POST LIST </h1>

//                 </div>
//                 <div className="container" >
//                     <div className="flex">
//                         <h1>POST LIST</h1>
//                         <button type="button" className="btn btn-primary height35px marginTop20px" data-toggle="modal"
//                             data-target="#myModal">ADD POST</button>
//                     </div>
//                 </div>