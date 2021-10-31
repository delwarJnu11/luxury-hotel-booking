import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import { FaEnvelope, FaFacebookF, FaMapMarkedAlt, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import payment from '../../../images/payment.png';

const Footer = () => {
    return (
        <div className="footer-bg pt-5">

            <Container>

                <Row>
                    <Col md={3}>
                        <h1 className="fs-2 fw-bold text-white my-3">LUXURY HOTEL</h1>
                        <div className="mt-3">
                            <p>Firmament morning sixth subdue darkness creeping gathered divide.</p>
                        </div>
                        <p className="mt-3">
                            <FaFacebookF className="icon" />
                            <FaTwitter className="icon" />
                            <FaYoutube className="icon" />
                        </p>
                    </Col>
                    <Col md={3}>
                        <h3 className="my-3">Services</h3>
                        <NavLink className="text-decoration-none d-flex flex-column mt-2 footer-menu" to="/home">Double Bed Room</NavLink>
                        <NavLink className="text-decoration-none d-flex flex-column  mt-2 footer-menu" to="/home">Family Bed Room</NavLink>
                        <NavLink className="text-decoration-none d-flex flex-column mt-2 footer-menu" to="/home">Suite Room</NavLink>
                        <NavLink className="text-decoration-none d-flex flex-column mt-2 footer-menu" to="/home">Superior Bed Room</NavLink>
                    </Col>
                    <Col md={3}>
                        <h3 className="my-3">Address</h3>
                        <p><FaMapMarkedAlt className="fs-6" /> <span className="ms-2">200, D-block, Gulshan</span></p>
                        <p><FaPhoneAlt className="fs-6" /> <span className="ms-2">+880 1749497676</span></p>
                        <p><FaEnvelope className="fs-6" /> <span className="ms-2">delwarjnu24 @gmail.com</span></p>
                    </Col>
                    <Col md={3}>
                        <div className="my-3">
                            <img src={payment} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <hr />
            <p className="text-center m-0 pb-3">All Right Reserved &copy; Luxury Hotel </p>

        </div >
    );
};

export default Footer;