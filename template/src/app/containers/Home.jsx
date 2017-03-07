import * as React from "react";
import { Slider, Navbar, Footer } from "./../components/index";
import { Dashboard } from "./index.js"
class Home extends React.Component {
    constructor() {
        super();

    }
    render() {
        return (
            <div>
                <Slider />
                <div className="main-panel">
                    <Navbar />
                    <Dashboard />
                    <div>
                        <Footer />
                    </div>
                </div>

            </div>
        )
    }
}
export default Home;


