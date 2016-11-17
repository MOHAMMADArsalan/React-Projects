import React from "react";
let PropTypes = React.PropTypes;
class Main extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
// class Greet extends React.Component {
//     static get propTypes() {
//         return {
//             name: PropTypes.string.isRequired
//         }
//     }
//     render() {
//         return (
//             <h1>Hello from Main Component</h1>
//         )
//     }
// }
export default Main;