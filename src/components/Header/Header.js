// IMPORT PACKAGE REFERENCES
import React from 'react';
import { NavLink } from 'react-router-dom';

//Import Images
import logo from '../../images/logo.png';

// COMPONENT

export const Header = () => (
    <div className="row">
    <div className="col-md-4">
    <div className="row">
        <img className="img-responsive" src={logo} alt="Pluto Bank" />
        </div>
    </div>
    <div className="col-md-8">
        <nav className="navbar navbar-expand-lg navbar-light alert-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <div className="nav-link">
                            <NavLink to='/' activeClassName='menu selected' exact={true}>PRODUCTS & SOLUTIONS</NavLink>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link">
                            <NavLink to='/technology' activeClassName='menu selected'>TECHNOLOGY</NavLink>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link">
                            <NavLink to='/security' activeClassName='menu selected'>SECURITY</NavLink>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link">
                            <NavLink to='/insight' activeClassName='menu selected'>INSIGHT</NavLink>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link">
                            <NavLink to='/contact' activeClassName='menu selected'>CONTACT US</NavLink>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link">
                            <NavLink to='/login' activeClassName='menu selected'>LOG IN</NavLink>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    </div>
);