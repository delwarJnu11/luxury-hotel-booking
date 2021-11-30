import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-bg">
            <Container>
                <Row>
                    <Col md={2}>

                    </Col>
                    <Col md={8} className="banner-text d-flex justify-content-center align-items-center">
                        <div>
                            <h5 className="mb-3">WELCOME TO LUXURY HOTEL</h5>
                            <h2 className="fw-bold">EVERYTHING YOU NEED IN LUXURY HOTEL.</h2>
                            <p className="banner-decription mt-4">Best Luxury Hotels in Bangladesh on Tripadvisor: Find traveler reviews, candid photos, and prices for 36 luxury hotels in Bangladesh, Asia.</p>
                            <Link to="">
                                <Button className="px-4 py-2 mt-3">Book Now</Button>
                            </Link>
                        </div>
                    </Col>
                    <Col md={2}>

                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Banner;