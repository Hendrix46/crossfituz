import React, {Component} from 'react';
import './icontent.css';

class Icontent extends Component {
    render() {
        return (
            <div className="row icontent pb-5 ">
                <div className="col-md-3  mt-5">
                    <img className="img-fluid icimg" src={require("../../../../images/medal.svg")}/>
                    <h4 className="text-white text-center font-weight-bold mt-5">Award winning Gym</h4>
                    <p className="mt-3 text-center font-weight-bolder">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut corporis explicabo.</p>
                </div>
                <div className="col-md-3 mt-5 mx-auto">
                    <img className="img-fluid icimg" src={require("../../../../images/dumbbell.svg")}/>
                    <h4 className="text-white text-center font-weight-bold mt-5">Award winning Gym</h4>
                    <p className="mt-3 text-center font-weight-bolder">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut corporis explicabo.</p>
                </div>
                <div className="col-md-3 mt-5 mx-auto">
                    <img className="img-fluid icimg" src={require("../../../../images/water.svg")}/>
                    <h4 className="text-white text-center font-weight-bold mt-5">Award winning Gym</h4>
                    <p className="mt-3 text-center font-weight-bolder">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut corporis explicabo.</p>
                </div>
                <div className="col-md-3 mt-5 mx-auto">
                    <img className="img-fluid icimg" src={require("../../../../images/weightlifting.svg")}/>
                    <h4 className="text-white text-center font-weight-bold mt-5">Award winning Gym</h4>
                    <p className="mt-3 text-center font-weight-bolder">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut corporis explicabo.</p>
                </div>
            </div>
        );
    }
}

Icontent.propTypes = {};

export default Icontent;