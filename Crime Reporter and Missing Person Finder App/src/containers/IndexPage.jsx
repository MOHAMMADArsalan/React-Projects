import * as React from "react";
import { LoginAppBar, ReportTable } from "./../components/index.js";
import { connect } from "react-redux"
import { ReportActions } from "./../store/actions/index.js";
import { browserHistory } from "react-router";

function mapStateToProps(state) {
    return {
        reports: state.ReportReducer.reports

    }
}
function mapDispatchToProps(dispatch) {
    return {
        getReports: () => { dispatch(ReportActions.getReport()) },
    }
}


class IndexPage extends React.Component {
    constructor() {
        super();
        this.state = {
            filter: "ALL"
        }
    }
    componentDidMount() {
        this.props.getReports()
    }
    render() {
        return (
            <div>
                <LoginAppBar />
                <ReportTable filter={this.state.filter} reports={this.props.reports}/>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);