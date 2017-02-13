import * as React from "react";

class TableHeader extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <thead>
                <tr>
                    {this.props.headers.map((heading, i) => {
                        return <th key={i} className="text-center">{heading}</th>
                    })}
                </tr>
            </thead>
        )
    }
}
export default TableHeader;
/*
<tr>
    <th className="text-center">#</th>
    <th className="text-center">Company Name</th>
    <th className="text-center">Address</th>
    <th className="text-center">Email</th>
</tr>
    <tr>
        <th className="text-center">#</th>
        <th className="text-center">First Name</th>
        <th className="text-center">Last Name</th>
        <th className="text-center">Email</th>
    </tr>
    <tr>
        <th className="text-center">#</th>
        <th className="text-center">Title</th>
        <th className="text-center">Desc</th>
        <th className="text-center">Salary</th>
        <th className="text-center">Posted Date</th>
        <th className="text-center">Applied</th>
        <th className="text-center">Delete</th>
    </tr>
    <tr>
        <th className="text-center">#</th>
        <th className="text-center">Title</th>
        <th className="text-center">Desc</th>
        <th className="text-center">Salary</th>
        <th className="text-center">Posted Date</th>
        <th className="text-center">Applied</th>
    </tr>*/