import React, {Component} from 'react';
import './footer.css';


class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer_content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 footer_col">


                                <div className="logo">
                                    <a href="#"></a>
                                    <div>crossfit <span>x</span></div>
                                    <div>the next level</div>
                                </div>

                                <div className="footer_text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                        gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                </div>
                                <div className="social">
                                    <ul className="d-flex flex-row align-items-center justify-content-start">
                                        <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-behance" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-2 offset-lg-1 footer_col">
                                <div className="footer_column">
                                    <div className="footer_title"><h3>Useful Links</h3></div>
                                    <div className="footer_list">
                                        <ul>
                                            <li><a href="about.html">About us</a></li>
                                            <li><a href="#">Testimonials</a></li>
                                            <li><a href="#">Subscriptions</a></li>
                                            <li><a href="#">Plans</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-2 footer_col">
                                <div className="footer_column">
                                    <div className="footer_title"><h3>Features</h3></div>
                                    <div className="footer_list">
                                        <ul>
                                            <li><a href="about.html">About us</a></li>
                                            <li><a href="#">Testimonials</a></li>
                                            <li><a href="#">Subscriptions</a></li>
                                            <li><a href="#">Plans</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-2 footer_col">
                                <div className="footer_column">
                                    <div className="footer_title"><h3>About us</h3></div>
                                    <div className="footer_list">
                                        <ul>
                                            <li><a href="#">About us</a></li>
                                            <li><a href="#">Testimonials</a></li>
                                            <li><a href="#">Subscriptions</a></li>
                                            <li><a href="#">Plans</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

Footer.propTypes = {};

export default Footer;