import * as React from "react";
import { NavBar, DashboardComponent } from "./../components/index.js";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { connect } from "react-redux";
import { AuthActions, ProductActions } from "./../store/actions/index.js"
import { FirebaseService } from "./../services/firebaseService.js"
function mapStateToProps(state) {
    return {
        user: state.authReducer.user,
        isLoggedIn: state.authReducer.isLoggedIn,
        category: state.productReducer.category,
        product: state.productReducer.product
        
    }
}
function mapDispatchToProps(dispatch) {
    return {
        logout: () => { dispatch(AuthActions.logout()) },
        getCategory: () => { dispatch(ProductActions.getCategory()) },
        getProduct: () => { dispatch(ProductActions.getProduct()) }
        
    }
}

class Home extends React.Component {
    constructor() {
        super();
        this.state = { open: true };
        this.addPost = this.addPost.bind(this)
    }
    addPost(multipath) {

        FirebaseService.saveMultipath(multipath).then(() => {
            console.log("multipath savedddddddddddddddddd")
        }, (err) => { console.log("ERROR: ", err) })
    }

    logout() {
        this.props.logout()
    }

    componentWillMount() {
        if (!Object.keys(this.props.user).length) {
            let user = JSON.parse(localStorage.getItem("blood-app"));
            user = JSON.parse(user);
            this.setState({
                user: user
            })
        }
    }
    componentWillReceiveProps(newProps) {
        console.log("componentWillReceiveProps", newProps)
    }
    componentDidMount() {
        this.props.getCategory();
        this.props.getProduct()
    }
    render() {
        return (
            <div>
                <NavBar logout={this.props.logout} />
                <DashboardComponent
                    currentUser={Object.keys(this.props.user).length > 0 ? this.props.user : this.state.user}
                    addPost={this.addPost} category={this.props.category} 
                    product={this.props.product}/>

            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);