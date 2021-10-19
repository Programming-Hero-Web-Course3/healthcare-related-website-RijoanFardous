import React from 'react';
import logo from '../../../Images/logo.png';
import './Header.css';

/*****    React Bootstrap   *****/
import { Container, Nav, Navbar } from 'react-bootstrap';

/*****    React Router   *****/
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, handleSignOut } = useAuth();
    return (
        <div>
            <Navbar bg="light" variant="light" expand="lg" fixed="top" className="shadow-sm">
                <Container>
                    <Navbar.Brand>
                        <img
                            src={logo}
                            // width="200"
                            height="50"
                            className="d-inline-block align-top"
                            alt=""
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto me-2">
                            <NavLink to="/home" className="nav-link" activeClassName="active-link">Home</NavLink>
                            <NavLink to="/services" className="nav-link" activeClassName="active-link">Services</NavLink>
                            <NavLink to="/news" className="nav-link" activeClassName="active-link">News</NavLink>
                            <NavLink to="/appointment" className="nav-link" activeClassName="active-link">Appointment</NavLink>
                        </Nav>
                        {
                            user.email ? <div className="d-inline-block">
                                <p className="fw-bold d-inline fs-5">{user.displayName} </p>
                                <Link to="/login" onClick={handleSignOut} className="nav-login-btn fw-bold">Log Out</Link>
                            </div> : <Link to="/login" className="nav-login-btn fw-bold">Log In</Link>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;