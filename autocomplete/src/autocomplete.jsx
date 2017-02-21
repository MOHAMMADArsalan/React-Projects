const React = require("react"),
    ReactDOM = require("react-dom"),
    request = require("axios");

const fD = ReactDOM.findDOMNode;


class Autocomplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: this.props.options,
            filteredOptions: this.props.options,
            currentOption: ''
        }
        this.filter = this.filter.bind(this);
        this.addOption = this.addOption.bind(this);
    }

    componentDidMount() {
        console.log("__autocomplete_data",this.props.url)
        if (this.props.url == 'test') return true;
        request({ url: this.props.url })
            .then(response => response.data)
            .then(body => {
                if (!body) {
                    return console.error("FAILED TO LOAD DATA!!!");
                }
                this.setState({
                    options: body
                })
            })
            .catch(console.error)
    }
    filter(event) {
        this.setState({
            currentOption: event.target.value,
            filteredOptions: (this.state.options.filter((option, index, list) => {
                return (event.target.value === option.name.substr(0, event.target.value.lengthD))
            }))
        })
    }

    addOption(event) {
        let currentOption = this.state.currentOption
        request
            .post(this.props.url, { name: currentOption })
            .then(response => response.data)
            .then((body) => {
                if (!body) {
                    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
                    return console.error("FAILED TO SAVE")
                }
                this.setState({
                    options: [body].concat(this.state.options)
                }, () => {
                    this.filter({ target: { value: currentOption } })
                })
            })
            .catch(error => { return console.error("FAILED TO SAVE") })
    }
    render() {
        return (
            <div className="form-group">
                <input type="text"
                    onKeyUp={(event) => (event.keyCode == 13) ? this.addOption() : ''}
                    className="form-control option-name"
                    onChange={this.filter}
                    value={this.currentOption}
                    placeholder="React.js">
                </input>
                {this.state.filteredOptions.map(function (option, index, list) {
                    return <div key={option._id}>
                        <a className="btn btn-default option-list-item"
                            href={'/#/' + option.name} target="_blank">
                            #{option.name}
                        </a>
                    </div>
                })}
                {(() => {
                    if (this.state.filteredOptions.length == 0 && this.state.currentOption != '')
                        return <a className="btn btn-info option-add" onClick={this.addOption}>
                            Add #{this.state.currentOption}
                        </a>
                })()}
            </div>
        )
    }
}
module.exports = Autocomplete