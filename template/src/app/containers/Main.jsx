import * as React from "react";
import { Slider, Navbar, Footer } from "./../components/index";

class Main extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="wrapper">
                <Slider />
                <div className="main-panel">
                    <Navbar />
                    {this.props.children}
                    <div>
                        <Footer />
                    </div>
                    <div>
                        <div className="fixed-plugin">
            <div className="dropdown show-dropdown open">
                <a data-toggle="dropdown" href="#" aria-expanded="true">
                    <i className="fa fa-cog fa-2x"> </i>
                </a>
                <ul className="dropdown-menu">
                    <li className="header-title">Sidebar Style</li>
                    <li className="adjustments-line">
                        <a className="switch-trigger" href="javascript:void(0)">
                            <p>Background Image</p>
                            <div className="switch has-switch" data-off-label="OFF">
                                <div className="switch-on switch-animate"><input checked="" type="checkbox" /><span className="switch-left">ON</span><label>&nbsp;</label><span className="switch-right">OFF</span></div>
                            </div>
                            <div className="clearfix"></div>
                        </a>
                    </li>
                    <li className="adjustments-line">
                        <a className="switch-trigger" href="javascript:void(0)">
                            <p>Filters</p>
                            <div className="pull-right">
                                <span className="badge filter active" data-color="black"></span>
                                <span className="badge filter badge-azure" data-color="azure"></span>
                                <span className="badge filter badge-green" data-color="green"></span>
                                <span className="badge filter badge-orange" data-color="orange"></span>
                                <span className="badge filter badge-red" data-color="red"></span>
                                <span className="badge filter badge-purple" data-color="purple"></span>
                            </div>
                            <div className="clearfix"></div>
                        </a>
                    </li>
                    <li className="header-title">Sidebar Images</li>
                    <li className="">
                        <a className="img-holder switch-trigger" href="javascript:void(0)">
                            <img src="http://lbd-angular2.creative-tim.com/assets/img/sidebar-1.jpg" />
                        </a>
                    </li>
                    <li className="">
                        <a className="img-holder switch-trigger" href="javascript:void(0)">
                            <img src="http://lbd-angular2.creative-tim.com/assets/img/sidebar-3.jpg" />
                        </a>
                    </li>
                    <li className="">
                        <a className="img-holder switch-trigger" href="javascript:void(0)">
                            <img src="http://lbd-angular2.creative-tim.com/assets/img/sidebar-4.jpg" />
                        </a>
                    </li>
                    <li className="active">
                        <a className="img-holder switch-trigger" href="javascript:void(0)">
                            <img src="http://lbd-angular2.creative-tim.com/assets/img/sidebar-5.jpg" />
                        </a>
                    </li>
                    <li className="button-container">
                        <div>
                            <a className="btn btn-danger btn-block btn-fill" href="https://github.com/creativetimofficial/light-bootstrap-dashboard-angular" target="_blank">
                                <div className="img-container">
                                    <img src="http://coenraets.org/present/react/img/react.png" />
                                </div>
                                Download React
                            </a>
                        </div>
                    </li>
                    <li className="button-container">
                        <div>
                            <a className="btn btn-info btn-block btn-fill" href="https://github.com/creativetimofficial/light-bootstrap-dashboard" target="_blank">
                                <i aria-hidden="true" className="fa fa-html5"></i>
                                Download HTML
                            </a>
                        </div>
                    </li>
                    <li className="button-container">
                        <div>
                            <a className="btn btn-warning btn-block btn-fill" href="https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-angular2/?ref=lbd-angular2-free" target="_blank">
                                <div className="img-container">
                                    <img src="http://coenraets.org/present/react/img/react.png" />
                                </div>
                                Buy PRO Version
                            </a>
                        </div>
                    </li>
                    <li className="button-container text-center">
                        <div className="iframe-container">
                            <iframe frameBorder="0" height="30px" scrolling="0" src="https://ghbtns.com/github-btn.html?user=creativetimofficial&amp;repo=light-bootstrap-dashboard-angular&amp;type=watch&amp;count=true" width="90px"></iframe>

                            <iframe frameBorder="0" height="30px" scrolling="0" src="https://ghbtns.com/github-btn.html?user=creativetimofficial&amp;repo=light-bootstrap-dashboard-angular&amp;type=fork&amp;count=true" width="90px"></iframe>

                        </div>
                    </li>
                    <li className="header-title" id="sharrreTitle">Thank you for sharing!</li>

                    <li className="button-container">
                        <button className="btn btn-social btn-twitter btn-round sharrre" id="twitter"><i className="fa fa-twitter"></i> · 256</button>
                        <button className="btn btn-social btn-facebook btn-round sharrre" id="facebook"><i className="fa fa-facebook-square"></i> · 426</button>
                    </li>
                </ul>
            </div>
        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Main;