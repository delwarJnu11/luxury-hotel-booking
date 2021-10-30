import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, image, title, description } = service;
    return (
        <Col>
            <Card className="single-card">
                <Card.Img variant="top" height="250px" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className="description">{description}</Card.Text>
                    <Link to={`/place-order/${_id}`}>
                        <Button variant="success">Book Now</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;