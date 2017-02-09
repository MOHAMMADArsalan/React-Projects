import React from "react";
import styles from "./../styles/index.jsx"
class Headers extends React.Component {
    render() {
        return (
            <thead onClick={this.props._sort}>
                <tr>
                    {this.props.headers.map((val, i) => {
                        if (this.props.sortby === i) {
                            val += this.props.descending ? ' \u2191' : ' \u2193'
                        }
                        return <th key={i} style={styles.textCenter}>{val}</th>
                    })}
                </tr>
            </thead>
        )
    }
}
Headers.PropTypes = {
    headers: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    sortby: React.PropTypes.number.isRequired,
    descending: React.PropTypes.bool.isRequired


}
export default Headers;
