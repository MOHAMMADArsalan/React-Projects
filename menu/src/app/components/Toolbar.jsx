import * as React from "react";
import Button from "./Button.jsx";
class Toolbar extends React.Component {
    render() {
        return (
            <div style={{ textAlign: "left" }}>
                <Button _toggleSearch={this.props._toggleSearch}>Search</Button>
                <Button>
                    <a style={{color: 'white'}} href="data.json" onClick={(e) => { this.props._download('json', e) } }>Export Json</a>
                </Button>
                <Button>
                    <a style={{color: 'white'}}  href="data.csv" onClick={(e) => { this.props._download('csv', e) } }>Export CSV</a>
                </Button>

            </div>
        )

    }
}
export default Toolbar;