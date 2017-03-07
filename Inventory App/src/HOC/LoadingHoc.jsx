import React, { Component } from "react";
import CircularProgress from 'material-ui/CircularProgress';

const LoadingHOC = (propName) => (WrapperComponent) => {
    return class LoadingHOC extends Component {
        isEmpty(prop) {
            return (
                prop === null || prop === undefined ||
                (prop.hasOwnProperty('length') && prop.length === 0) ||
                (prop.constructor === Object && Object.keys(prop).length === 0)
            )
        }
        render() {
            return this.isEmpty(this.props[propName]) ?

                <div style={{textAlign:'center'}}>
                    <CircularProgress style={{ marginTop: 25, marginLeft: 50 }} />
                </div>

                : <WrapperComponent {...this.props} />
        }
    }
}
export default LoadingHOC;