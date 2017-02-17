import * as React from "react";
import Navbar from "./NavBar.jsx";
import UsersList from "./UserList.jsx"
class Dashboard extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container flex">
                    <div className="userList">
                        <UsersList 
                        users={this.props.users}
                        currentUser={this.props.currentUser}
                       getUserConversation ={this.props.getUserConversation}
                        />
                    </div>
                    <div className="chatBox">
                        chats

                    </div>
                    {/*{this.checkUsetType()}*/}
                </div>
            </div>
        )
    }
}
export default Dashboard;