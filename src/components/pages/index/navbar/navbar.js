import React, {Component} from 'react';
import './navbar.css';
import {NavLink} from "react-router-dom";

class Navbar extends Component {
    render() {

        return (
            <nav className="navbar sticky-top navbar-expand-lg  pl-5">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#"><h2>Crossfit <span>X</span></h2>
                <h6><i>The next level</i></h6>
                </a>


                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="navbar-nav mr-auto mt-2 pl-5 ml-5 mt-lg-0 ">
                                <li className="nav-item active">
                                    <NavLink to="/"><p className="mr-3">Home</p></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/about"><p className="mr-3">About us</p></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/blog"><p className="mr-3">Blog</p></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/news"><p className="mr-3">News</p></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/services"><p className="mr-3">Services</p></NavLink>
                                </li>
                            </ul>


                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>

            </nav>
        );
    }
}

Navbar.propTypes = {};

export default Navbar;