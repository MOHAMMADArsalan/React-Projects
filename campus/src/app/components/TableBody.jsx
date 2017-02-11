import * as React from "react";

class TableBody extends React.Component {
    constructor() {
        super();
    }
    post = {
        address: "address",
        applied: "applied",
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
                                if (this.post[key] == key) {
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