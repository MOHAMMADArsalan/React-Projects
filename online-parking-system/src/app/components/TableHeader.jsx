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