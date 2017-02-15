const React = require('react')
const ReactDOM = require('react-dom')
const Password = require('./password.jsx')
class App extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <Password upperCase={true}
                lowerCase={true}
                special={true}
                number={true}
                over6={true}
                />
        )
    }
}
ReactDOM.render(<App />, document.getElementById("react-container"));