import * as React from "react";
import { TypographyComponent } from "./../components/index.js"
class Typography extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="wrapper">
                <TypographyComponent />
            </div>
        )
    }
}
export default Typography;