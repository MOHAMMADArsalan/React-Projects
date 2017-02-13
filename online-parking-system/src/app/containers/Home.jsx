import * as React from "react";
import Dashboard from "./../components/Dashboard.jsx";
import { connect } from "react-redux";
import { ParkingAction } from "./../store/actions/index.js";
import { FirebaseService } from "./../services/FirebaseService.js"
function mapStateToProps(state) {
    return {
        parkings: state.parkingReducer['parkings']
        // posts: state.companyReducer['posts'],
        // companyPost: state.companyReducer['companyPost']
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getParkingLocation: () => { dispatch(ParkingAction.getParking()) }
        // getCompanies: () => { dispatch(CompanyAction.getCompany()) },
        // getPosts: () => { dispatch(CompanyAction.getPosts()) },
        // getPostByCompany: (uid) => { dispatch(CompanyAction.getPostByCompany(uid)) }
    }
}
class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            tab: 'company',
            post: { salary: '', title: '', desc: '' },
            posted: false,
            posts: []
        }

        // this.InputHandler = this.InputHandler.bind(this);
        this.showData = this.showData.bind(this);
        // this.PostHandler = this.PostHandler.bind(this);
        // this.apply = this.apply.bind(this);
        // this.deletePost = this.deletePost.bind(this);

    }
    showData(type) {
        this.setState({
            tab: type
        })
    }
    InputHandler(e) {
        let post = this.state.post;
        post[e.target.name] = e.target.value;
        this.setState({
            post: post
        })
    }
    componentWillMount() {
        if (!this.props.location.state) {
            let user = JSON.parse(localStorage.getItem("Campus-Recruitment-System"));
            if (user) {
                user = JSON.parse(user);
                this.setState({
                    userType: user.type,
                    user: user
                })
            }
            // user = JSON.parse(user);
            // if ()
        } else {
            this.setState({
                userType: this.props.location.state.type,
                user: this.props.location.state
            })
        }
    }
    componentDidMount() {
        setTimeout(() => {
            // this.setState({
            //     // posts: this.props.posts
            // })
            if (this.state.userType === 2) {
                console.log("propssssssssssssssssssssss", this.props.parkings)
            }
        }, 3000)
        if (this.state.userType) {
            if (this.state.userType === 1) {
                // this.props.getCompanies();
                // this.props.getPosts()
            } else if (this.state.userType === 2) {
                this.props.getParkingLocation()
                // this.props.getPostByCompany(this.state.user.uid)
            }
        }
    }
    // PostHandler(e) {
    //     e.preventDefault();
    //     let pushKey = FirebaseService.getPushRef('/posts').key;
    //     let multipath = {};
    //     let Obj = this.state.post;
    //     Obj['applied-count'] = 0;
    //     Obj['timestamp'] = FirebaseService.firebaseTimeStamp;
    //     Obj['name'] = this.state.user.name;
    //     Obj['address'] = this.state.user.address;
    //     Obj['email'] = this.state.user.email;
    //     Obj['applied'] = "";
    //     multipath[`company-posts/${this.state.user.uid}/${pushKey}`] = Obj;
    //     let newObj = Object.assign({}, Obj);
    //     newObj['created-by'] = this.state.user.uid;
    //     multipath[`posts/${pushKey}`] = newObj;
    //     FirebaseService.saveMultipath(multipath).then(() => {
    //         this.setState({
    //             posted: true
    //         })
    //     }, (err) => {
    //         console.log("ERROR: ", err)
    //     })
    // }
    // apply(multipath) {
    //     FirebaseService.saveMultipath(multipath).then(() => {
    //         console.log("applieddddddddddddd")
    //     },
    //         (err) => { console.log("ERROR: ", err) })
    // }
    // deletePost(multipath) {
    //     FirebaseService.saveMultipath(multipath).then(() => {
    //         console.log("deletePost")
    //      },
    //         (err) => { console.log("ERROR: ", err) })
    // }
    render() {
        return (
            <div>
                <Dashboard
                    _InputHandler={this.InputHandler}
                    userType={this.state.userType}
                    _currentUser={this.state.user}
                    _parkings={this.props.parkings}
                    ></Dashboard>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);


