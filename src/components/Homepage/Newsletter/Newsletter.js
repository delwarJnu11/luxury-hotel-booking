import React from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <Container fluid className="newsletter-banner">
            <Row>
                <Col className="banner-text d-flex justify-content-center align-items-center">
                    <div>
                        <h1 className="my-3">Sign Up for a Newsletter</h1>
                        <h5 className="my-3">Get A 50% Discounts in every Rooms, Book now!</h5>
                        <div>
                            <InputGroup className="mt-3">
                                <FormControl
                                    placeholder="Enter Email"
                                    aria-label="Enter Email"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text className="btn-primary" id="basic-addon2">Subscribe</InputGroup.Text>
                            </InputGroup>
                        </div>

                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Newsletter;