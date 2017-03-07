import * as React from "react";
class MapComponent extends React.Component {
    constructor() {
        super();

    }
    render() {
        return (
            <div>
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28960.696277510848!2d67.0425571707969!3d24.86087684135425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33eea39c798fb%3A0x52935dff4ed52e94!2sSaylani+Welfare+Trust!5e0!3m2!1sen!2s!4v1488644555002" width="100%" height="450" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
            </div>
        )
    }
}
export default MapComponent;


