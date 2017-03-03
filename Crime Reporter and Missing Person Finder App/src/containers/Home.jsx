import * as React from "react";
import { NavBar, DashboardComponent } from "./../components/index.js";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { connect } from "react-redux";
import { AuthActions, ReportActions } from "./../store/actions/index.js"
import { FirebaseService } from "./../services/firebaseService.js";

import { browserHistory } from "react-router"
function mapStateToProps(state) {
    return {
        user: state.authReducer.user,
        isLoggedIn: state.authReducer.isLoggedIn,
        userReports: state.ReportReducer.userReports,
        reports: state.ReportReducer.reports

    }
}
function mapDispatchToProps(dispatch) {
    return {
        logout: () => { dispatch(AuthActions.logout()) },
        getReports: () => { dispatch(ReportActions.getReport()) },
        getUserReport: (uid) => { dispatch(ReportActions.getUserReport(uid)) }
    }
}

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            reportName: 1,
            contactNo: '',
            desc: '',
            cityName: 1,
            isLoading: false,
            isRegisted: false,
            status: ""
        };
        // this.addReport = this.addReport.bind(this)
    }

    allowExtension = {
        "png": "png",
        "jpg": "jpg",
        "gif": "gif",
        "jpeg": "jpeg",
    }
    fileName = ''
    addReport = (e) => {
        this.setState({ isLoading: true, isRegisted: false })
        e.preventDefault()
        let key = FirebaseService.getPushKey("reports").key;
        let multipath = {};
        let obj = Object.assign({}, this.state)
        obj['reported-by'] = this.state.user.uid
        obj['status'] = "Will Working"
        delete obj['user']
        multipath[`user-reports/${this.state.user.uid}/${key}`] = obj;
        multipath[`reports/${key}`] = obj;
        if (this.state.image) {
            this.fileName = this.state.image;
            let file = this.fileName.files[0]
            let extension = this.fileName.value.split(".").pop();
            extension = extension.toLowerCase();
            let image = this.fileName.value.split("\\")[2];
            let fileName = image.split('.')[0];
            fileName += Date.now() + "." + extension;
            if (this.allowExtension[extension] === extension) {
                FirebaseService.uploadImageOnStorageBlob('/report-images/' + fileName, file).then((url) => {
                    this.fileName = url
                    obj['url'] = url;
                    delete obj['image']
                    delete obj['isLoading']
                    delete obj['isRegisted']
                    multipath[`user-reports/${this.state.user.uid}/${key}`] = obj;
                    multipath[`reports/${key}`] = obj;
                    FirebaseService.saveMultipath(multipath).then(() => {
                        this.setState({ isLoading: false, isRegisted: true, image: '' })
                        setTimeout(() => {
                            this.setState({ isLoading: false, isRegisted: false })
                        }, 10)
                    }, (err) => { console.log("ERROR: ", err) })
                })

            }
        } else {
            FirebaseService.saveMultipath(multipath).then(() => {
                this.setState({ isLoading: false, isRegisted: true })
                setTimeout(() => {
                    this.setState({ isLoading: false, isRegisted: false, image: '' })
                }, 10)
            }, (err) => { console.log("ERROR: ", err) })
        }

    }
    selectReportHandler = (event, index, value) => {
        this.setState({ reportName: value })
    }
    selectCityHandler = (event, index, value) => {
        this.setState({ cityName: value })
    }
    logout() {
        this.props.logout()
    }

    componentWillMount() {
        if (!Object.keys(this.props.user).length) {
            let user = JSON.parse(localStorage.getItem("crimereportingapp"));
            user = JSON.parse(user);
            this.setState({
                user: user
            })
        }
    }
    inputHandler = (e) => {
        if (e.target.files) {
            this.setState({ image: e.target })
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }
    componentWillReceiveProps(newProps) {
        if (!newProps.isLoggedIn) {
            browserHistory.push('/signin')
        }
    }
    componentDidMount() {
        if ((this.props.user && this.props.user.type == 2) || (this.state.user && this.state.user.type == 2)) {
            let uid = this.props.user.uid || this.state.user.uid
            this.props.getUserReport(uid)
        } else {
            console.log("this.props.user")
            this.props.getReports();
        }
    }
    changeStatus = (status, key, uuid) => {
        let multipath = {};
        multipath[`user-reports/${uuid}/${key}/status`] = status;
        multipath[`reports/${key}/status`] = status;
        FirebaseService.saveMultipath(multipath).then(() => {
            console.log("Status changed")
        }, (err) => { console.log("ERROR: ", err) })
    }
    doneReport = (completed, key, uuid) => {
        let multipath = {};
        multipath[`user-reports/${uuid}/${key}/completed`] = !completed;
        multipath[`reports/${key}/completed`] = !completed;
        FirebaseService.saveMultipath(multipath).then(() => {
            console.log("Status changed")
        }, (err) => { console.log("ERROR: ", err) })

    }
    render() {
        return (
            <div>
                <NavBar logout={this.props.logout} />
                <DashboardComponent
                    changeStatus={this.changeStatus}
                    inputHandler={this.inputHandler}
                    currentUser={Object.keys(this.props.user).length > 0 ? this.props.user : this.state.user}
                    selectedReport={this.selectReportHandler}
                    selectedCity={this.selectCityHandler}
                    state={this.state}
                    addReport={this.addReport}
                    reports={Object.keys(this.props.userReports).length ? this.props.userReports : this.props.reports}
                    changeStatus={this.changeStatus}
                    doneReport={this.doneReport}
                />

            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);