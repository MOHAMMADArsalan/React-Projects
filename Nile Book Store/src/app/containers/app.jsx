import * as React from "react";
import { Heading } from "./../components/Heading.jsx";
import { Modal } from "./index.js"
class App extends React.Component {
    constructor() {
        super();
    }
    isModal;
    previousChildren;
    componentWillReceiveProps(nextProps) {
        this.isModal = (nextProps.location.state && nextProps.location.state.modal)
        if (this.isModal && nextProps.location.key != this.props.location.key) {
            this.previousChildren = this.props.children
        }
    }
    render() {
        console.log("this.isModal", this.isModal)
        return (
            <div className="well">
                <Heading />
                <div>
                    {(this.isModal) ? this.previousChildren : this.props.children}
                    {(this.isModal) ? <Modal isOpen={true}
                        returnTo={this.props.location.state.returnTo}>
                        {this.props.children}
                    </Modal> : ''}
                </div>
            </div>
        )
    }
}
export default App;