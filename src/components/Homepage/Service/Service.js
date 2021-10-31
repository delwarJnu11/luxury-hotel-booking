import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { _id, image, title, description, price } = service;
    return (
        <Col>
            <Card className="single-card">
                <Card.Img variant="top" height="250px" src={image} />
                <Card.Body>
                    <h4>{title}</h4>
                    <Card.Text className="description">{description}</Card.Text>
                    <h4 className="mb-3"> Price : ${price}</h4>
                    <Link to={`/place-order/${_id}`}>
                        <Button className="w-100" variant="success">Book Now</Button>
                    </Link>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;