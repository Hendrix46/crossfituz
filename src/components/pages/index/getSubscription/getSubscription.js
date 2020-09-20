import React, {Component} from 'react';
import './getSubscription.css'

class GetSubscription extends Component {
    render() {
        return (
            <div className="row gts mx-auto">
                <div className="col-md-4 mx-auto">
                    <h1 className="get">Get your <br/> subscription</h1>
                    <p className="subtext">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid animi aperiam aut
                        doloremque eos ipsa nesciunt, nobis numquam, optio provident quas quibusdam recusandae
                        doloremque eos ipsa nesciunt, nobis numquam, optio provident quas quibusdam recusandae
                        repellendus repudiandae rerum, ullam veniam voluptate? lorem</p>
                    <ul className="mt-4">
                        <li className="d-flex">
                            <div className="ok mr-4"><img className="img-fluid" src={require("../../../../images/ok.png")} alt=""/></div>
                            <div><p>Lorem ipsum dolor sit amet, consectetur.</p></div>
                        </li>
                        <li className="d-flex">
                            <div className="ok mr-4"><img className="img-fluid" src={require("../../../../images/ok.png")} alt=""/></div>
                            <div><p>Lorem ipsum dolor sit amet, consectetur.</p></div>
                        </li>
                        <li className="d-flex">
                            <div className="ok mr-4"><img className="img-fluid" src={require("../../../../images/ok.png")} alt=""/></div>
                            <div><p>Lorem ipsum dolor sit amet, consectetur.</p></div>
                        </li>
                        <li className="d-flex">
                            <div className="ok mr-4"><img className="img-fluid" src={require("../../../../images/ok.png")} alt=""/></div>
                            <div><p>Lorem ipsum dolor sit amet, consectetur.</p></div>
                        </li>
                    </ul>
                    <a type="button" className="get-started mt-5">Get Started</a>
                </div>
                <div className="col-md-6 m-0 p-0">
                    <img className="img-fluid" src={require("../../../../images/sub.jpg")} alt=""/>
                </div>
            </div>
        );
    }
}

GetSubscription.propTypes = {};

export default GetSubscription;