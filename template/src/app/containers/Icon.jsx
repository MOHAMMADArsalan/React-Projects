import * as React from "react";
import { IconComponent } from "./../components/index.js"
class Icon extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="wrapper">
                <IconComponent />
            </div>
        )
    }
}
export default Icon;