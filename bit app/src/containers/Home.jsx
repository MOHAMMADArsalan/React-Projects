import * as React from "react";
import { NavBar, DashboardComponent } from "./../components/index.js";
import { connect } from "react-redux"
import { AuthActions } from "./../store/actions/index.js"
import { FirebaseService } from "./../services/firebaseService.js"

function mapStateToProps(state) {
    return {
        user: state.authReducer.user,
        isLoggedIn: state.authReducer.isLoggedIn
    }
}
function mapDispatchToProps(dispatch) {
    return {
        logout: () => { dispatch(AuthActions.logout()) }
    }
}

class Home extends React.Component {
    constructor() {
        super();
        console.log("Homewwwwwwwwwwwwwwwwwwwwwwww")
        this.state = {}
        this.addPost = this.addPost.bind(this)
    }
    addPost(multipath) {
        console.log("multipath savedddddddddddddddddd", multipath)

        FirebaseService.saveMultipath(multipath).then(() => {
            console.log("multipath savedddddddddddddddddd")
        }, (err) => { console.log("ERROR: ", err) })
    }
    logout() {
        this.props.logout()
    }
    componentWillMount() {
        if (!Object.keys(this.props.user).length) {
            let user = JSON.parse(localStorage.getItem("bidding-app"));
            user = JSON.parse(user);
            this.setState({
                user: user
            })
        }
    }
    render() {
        return (
            <div>
                <NavBar logout={this.props.logout} />
                <DashboardComponent 
                currentUser={Object.keys(this.props.user).length > 0 ? this.props.user : this.state.user} 
                addPost={this.addPost}/>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);