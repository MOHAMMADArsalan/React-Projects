import * as React from "react";
class ProComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="wrapper">
                <div className="main-content">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-8 col-md-offset-2">
                <div className="card" >
                    <div className="header text-center">
                        <h4 className="title">LBD PRO React</h4>
                        <p className="category">Looking for more components? Please check our Premium Version of Light Bootstrap Dashboard.</p>
                        <br />
                    </div>
                    <div className="content table-responsive table-full-width table-upgrade">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th className="text-center">Free</th>
                                    <th className="text-center">PRO</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Components</td>
                                    <td>16</td>
                                    <td>115+</td>
                                </tr>
                                <tr>
                                    <td>Plugins</td>
                                    <td>4</td>
                                    <td>14+</td>
                                </tr>
                                <tr>
                                    <td>Example Pages</td>
                                    <td>4</td>
                                    <td>22+</td>
                                </tr>
                                <tr>
                                    <td>Documentation</td>
                                    <td>
                                        <i className="fa fa-times text-danger"></i>
                                    </td>
                                    <td>
                                        <i className="fa fa-check text-success"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>SASS Files</td>
                                    <td><i className="fa fa-times text-danger"></i></td>
                                    <td><i className="fa fa-check text-success"></i></td>
                                </tr>
                                <tr>
                                    <td>Login/Register/Lock Pages</td>
                                    <td><i className="fa fa-times text-danger"></i></td>
                                    <td><i className="fa fa-check text-success"></i></td>
                                </tr>
                                <tr>
                                    <td>Premium Support</td>
                                    <td><i className="fa fa-times text-danger"></i></td>
                                    <td><i className="fa fa-check text-success"></i></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Free</td>
                                    <td>Just $49</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <a href="#" className="btn btn-round btn-fill btn-default disabled">Current Version</a>
                                    </td>
                                    <td>
                                        <a target="_blank" href="https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-angular2/?ref=lbd-angular2-free" className="btn btn-round btn-fill btn-info">Upgrade to PRO</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>

    </div>
</div>

            </div>
        )
    }
}
export default ProComponent;