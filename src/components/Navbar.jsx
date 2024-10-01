import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Samachar</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                    to="/about"
                                >
                                    About
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                    to="/business"
                                >
                                    Business
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                    to="/entertainment"
                                >
                                    Entertainment
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                    to="/health"
                                >
                                    Health
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                    to="/science"
                                >
                                    Science
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                    to="/sports"
                                >
                                    Sports
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                    to="/technology"
                                >
                                    Technology
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}


export default Navbar;
