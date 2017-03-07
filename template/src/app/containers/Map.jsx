import * as React from "react";
import { MapComponent } from "./../components/index.js"
class MapContainer extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="wrapper">
                <MapComponent />
            </div>
        )
    }
}
export default MapContainer;