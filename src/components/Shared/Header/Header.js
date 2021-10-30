import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar className="nav-bg" expand="lg">
                <Container className="d-flex justify-content-center align-items-center">
                    <Navbar.Brand className="fs-2 fw-bold text-white" to="/home">LUXURY HOTEL</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto d-flex align-items-center">
                            <NavLink className="ms-3 text-decoration-none nav-item" to="/home">Home</NavLink>
                            <NavLink className="ms-3 text-decoration-none nav-item" to="/blog">Blogs</NavLink>
                            {
                                !user.displayName ? (<> <NavLink className="ms-3 text-decoration-none nav-item" to="/signin">Log In</NavLink>
                                    <NavLink className="ms-3 text-decoration-none nav-item" to="/signup">Sign Up</NavLink>
                                </>) : (<>
                                    <NavLink className="ms-3 text-decoration-none nav-item" to="/my-bookings">My Bookings</NavLink>
                                    <NavLink className="ms-3 text-decoration-none nav-item" to="/add-service">Add a Service</NavLink>
                                    <NavLink className="ms-3 text-decoration-none nav-item" to="/manage-bookings">Manage All Bookings</NavLink>
                                    <NavDropdown title={<img className="user-photo" src={user.photoURL} alt="user" />} id="basic-nav-dropdown">
                                        <NavDropdown.Item to="">{user.displayName}</NavDropdown.Item>
                                        <NavDropdown.Item to=""><Button variant="success" onClick={logOut}>log Out</Button> </NavDropdown.Item>
                                    </NavDropdown>
                                </>)
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;