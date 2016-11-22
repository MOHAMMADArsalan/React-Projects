import React from "react";
let Puke = (object) => {
    return <pre> 
                {JSON.stringify(object, null, " ")}
            </pre>
}

let ConfirmBattle = (props) => {
    return props.isLoading === true
        ? <p>loading</p>
        : <div>Confirm Battle: {Puke(props)}</div>
}
// class ConfirmBattle extends React.Component {
//     render() {
//         return (
//             <div>Confirm Battle</div>
//         );
//     }
// };

export default ConfirmBattle;