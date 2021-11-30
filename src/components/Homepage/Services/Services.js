import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const { services } = useServices();
    return (
        <Container className="my-5">

            <Row>
                <Col>
                    <div>
                        <h2 className="text-center fs-1 text-success">Room & Suits</h2>
                        <p className="text-center mt-3 mb-5">We love to tell our successful far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                </Col>
            </Row>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </Row>

        </Container>
    );
};

export default Services;