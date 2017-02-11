import * as React from "react";
import Dashboard from "./../components/Dashboard.jsx";
import { connect } from "react-redux";
import { CompanyAction, StudentAction } from "./../store/actions/index.js"
function mapStateToProps(state) {
    return {
        companies: state.companyReducer['companies'],
        posts: state.companyReducer['posts'],
        studentsList:state.studentReducer['students']
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getCompanies: () => { dispatch(CompanyAction.getCompany()) },
        getStudentsList: () => { dispatch(StudentAction.getStudentsList()) },
        getPosts: () => { dispatch(CompanyAction.getPosts()) }
}
}
class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            tab: 'company',
            post: { salary: '', title: '', desc: '' }
        }

        this.InputHandler = this.InputHandler.bind(this);
        this.showData = this.showData.bind(this);
    }
    showData(type) {
        console.log("showData", type)
        this.setState({
            tab: type
        })
    }
    InputHandler(e) {
        console.log("eeeeeeeeeeeeeeeeeeee", e)
    }
    componentWillMount() {
        if (!this.props.location.state) {
            let user = JSON.parse(localStorage.getItem("Campus-Recruitment-System"));
            console.log("Campus-Recruitment-System", JSON.parse(user))
            if (user) {
                user = JSON.parse(user);
                this.setState({
                    userType: user.type
                })
            }
            // user = JSON.parse(user);
            // if ()
        } else {
            this.setState({
                userType: this.props.location.state.type
            })
        }
        console.log("propsssssssss", this.props)
        // t.location
    }
    componentDidMount() {
        if (this.state.userType) {
            setTimeout(() => { console.log(this.props.posts) }, 5000)
            if (this.state.userType === 1) {
                this.props.getCompanies();
                this.props.getStudentsList();
                this.props.getPosts()
            }
        }
    }
    Post(e) {
        e.preventDefault();
        console.log("this.state", this.state.post)
    }
    render() {
        return (
            <div>
                <Dashboard
                    _InputHandler={this.InputHandler}
                    userType={this.state.userType}
                    tab={this.state.tab}
                    showData={this.showData}
                    _companies={this.props.companies}
                    _studentList={this.props.studentsList}
                    _post={this.props.posts}></Dashboard>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);