import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import { FaEnvelope, FaFacebookF, FaMapMarkedAlt, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-bg pt-5">

            <Container>

                <Row>
                    <Col md={3}>
                        <h1 className="fs-2 fw-bold text-white">LUXURY HOTEL</h1>
                        <div className="mt-3">
                            <p>Firmament morning sixth subdue darkness creeping gathered divide.</p>
                        </div>
                        <p mt-5>
                            <FaFacebookF className="icon" />
                            <FaTwitter className="icon" />
                            <FaYoutube className="icon" />
                        </p>
                    </Col>
                    <Col md={3}>
                        <h3 className="mb-3">Services</h3>
                        <NavLink className="text-decoration-none d-flex flex-column mt-2 footer-menu" to="/home">Double Bed Room</NavLink>
                        <NavLink className="text-decoration-none d-flex flex-column  mt-2 footer-menu" to="/home">Family Bed Room</NavLink>
                        <NavLink className="text-decoration-none d-flex flex-column mt-2 footer-menu" to="/home">Suite Room</NavLink>
                        <NavLink className="text-decoration-none d-flex flex-column mt-2 footer-menu" to="/home">Superior Bed Room</NavLink>
                    </Col>
                    <Col md={3}>
                        <h3 className="mb-3">Usefull Links</h3>
                        <NavLink className="text-decoration-none d-flex flex-column mt-2 footer-menu" to="/home">Home</NavLink>
                        <NavLink className="text-decoration-none d-flex flex-column mt-2 footer-menu" to="/about">About</NavLink>
                        <NavLink className="text-decoration-none d-flex flex-column mt-2 footer-menu" to="/services">Services</NavLink>
                        <NavLink className="text-decoration-none d-flex flex-column mt-2 footer-menu" to="/contact">Contact</NavLink>
                    </Col>
                    <Col md={3}>
                        <h3 className="mb-3">Address</h3>
                        <p><FaMapMarkedAlt className="fs-6" /> <span className="ms-2">200, D-block, Green lane USA</span></p>
                        <p><FaPhoneAlt className="fs-6" /> <span className="ms-2">+880 1749497676</span></p>
                        <p><FaEnvelope className="fs-6" /> <span className="ms-2">delwarjnu24 @gmail.com</span></p>
                    </Col>
                </Row>
            </Container>
            <hr />
            <p className="text-center m-0 pb-3">All Right Reserved &copy; Luxury Hotel </p>

        </div >
    );
};

export default Footer;