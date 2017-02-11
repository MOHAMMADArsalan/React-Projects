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
            return <AdminData 
            tab={this.props.tab} 
            _companies={this.props._companies} 
            showData={this.props.showData}
            _studentList={this.props._studentList}
            _post={this.props._post}
            ></AdminData>

        } else if (this.props.userType === 2) {
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