import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { MdOutlineFrontHand, MdRestaurant } from 'react-icons/md';
import { SiSparkar } from 'react-icons/si';
import { AiFillCar } from 'react-icons/ai';
import './Facilities.css';

const Facilities = () => {
    return (
        <Container className="my-5">
            <Row>
                <Col md={3}>
                    <Card className="text-center border px-2">
                        <h1 className="icons fw-bold text-primary"><MdOutlineFrontHand /></h1>
                        <h4 className="my-3 text-success">24/7 Front Desk</h4>
                        <p className="text-justify">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies</p>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="text-center border px-2">
                        <h1 className="icons fw-bold text-primary"><SiSparkar /></h1>
                        <h4 className="my-3 text-success">Spa Suites</h4>
                        <p className="text-justify">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies</p>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="text-center border px-2">
                        <h1 className="icons fw-bold text-primary"><AiFillCar /></h1>
                        <h4 className="my-3 text-success">Transfer Services</h4>
                        <p className="text-justify">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies</p>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="text-center border px-2">
                        <h1 className="icons fw-bold text-primary"><MdRestaurant /></h1>
                        <h4 className="my-3 text-success">Restaurant & Bar</h4>
                        <p className="text-justify">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies</p>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Facilities;