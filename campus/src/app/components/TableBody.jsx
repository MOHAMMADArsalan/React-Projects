import * as React from "react";

class TableBody extends React.Component {
    constructor() {
        super();
        this.apply = this.apply.bind(this);
    }
    post = {
        address: "address",
        // applied: "applied",
        "applied-count": "applied-count",
        desc: "desc",
        email: "email",
        name: "name",
        salary: "salary",
        title: "title"
    }
    company = {
        address: "address",
        email: "email",
        name: "name"

    }
    postStudents = {
        "address": "address", "desc": "desc", "email": "email", "salary": "salary", "title": "title"
    }
    apply(key, createdBy, count) {
        if (this.props._currentUser.status) {
            this.props._apply({ key, createdBy, count })
            console.log("applyyyyyyyyyyyyyyyyyyy", key, createdBy, count)
            console.log("this.props._currentUser", this.props._currentUser)
        } else { 
            alert("before apply please complete your profile ")
        }
    }
    appliedUser = {}
    render() {
        return (
            <tbody>
                {this.props.data.map((value, rowIndex) => {
                    return <tr key={rowIndex}>
                        {Object.keys(value.value).map((key, cellIndex) => {
                            if (this.props.type === 'company') {
                                if (this.company[key] == key) {
                                    return <td key={cellIndex}> {value.value[key]}</td>
                                }
                            } else if (this.props.type === 'student') {
                                if (key == 'email' || key == 'name' || key == 'year' || key == 'gpa') {
                                    return <td key={cellIndex}> {value.value[key]}</td>
                                }

                            } else if (this.props.type === 'post') {
                                console.log(key, value.value[key])

                                if (key == 'applied' && value.value[key]) {
                                    this.appliedUser = Object.assign({}, this.appliedUser, value.value[key]) // this.appliedUser.push(value.value[key])
                                }
                                if (Object.keys(value.value).length - 1 == cellIndex) {
                                    let user = Object.assign({}, this.appliedUser)
                                    this.appliedUser = {};
                                    return <td key={cellIndex}>
                                        <button className="btn btn-primary" disabled={user[this.props._currentUser.uid]}>
                                            {!user[this.props._currentUser.uid] && <span onClick={() => { this.apply(value.value['$key'], value.value['created-by'], value.value['applied-count']) } }>Apply</span>}
                                            {user[this.props._currentUser.uid] && <span >Applied</span>}
                                        </button>
                                    </td>
                                }
                                if (this.postStudents[key] == key) {
                                    return <td key={cellIndex}> {value.value[key]}</td>
                                }
                            }
                        })}
                    </tr>
                })}
            </tbody>
        )
    }
}
export default TableBody;