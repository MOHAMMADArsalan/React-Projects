const React = require("react"),
    ReactDOM = require("react-dom"),
    Autocomplete = require("./autocomplete.jsx");

const { rooms, url} = window.__autocomplete_data;

ReactDOM.render(<Autocomplete
    options={rooms}
    url={url} />,
    document.getElementById("autocomplete"))