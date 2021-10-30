import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {
    const [service, setService] = useState({});
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://nameless-bastion-67393.herokuapp.com/services/${id}`)
            .then((res) => res.json())
            .then((data) => setService(data));
    }, [id]);
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.name = user.displayName;
        data.status = "pending";
        data.service = user.service;
        const { status, name, email, address, phone } = data;
        const newUser = { status, name, email, address, phone, service };
        alert('Order placed SuccessFull ')
        reset()
        fetch('https://nameless-bastion-67393.herokuapp.com/orders', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
    };
    return (
        <Container>
            <Row className="d-flex justify-content-center align-items-center">
                <Col md={6}>
                    <div>
                        <img variant="top" className="img-fluid" height="600" src={service?.image} alt="" />
                    </div>
                </Col>
                <Col md={6}>
                    <h1>{service?.title}</h1>
                    <p>{service?.description?.slice(0, 69)}</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <Col>
                                <input className="w-100 form-control mb-3" defaultValue={user.displayName} {...register("name")} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <input className="w-100 form-control mb-3" defaultValue={user.email} {...register("email", { required: true })} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <input required placeholder="Address" className="w-100 form-control mb-3" {...register("address", { required: true })} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <input required placeholder="Phone" className="w-100 form-control mb-3" {...register("phone", { required: true })} />
                            </Col>
                        </Row>
                        <Button variant="success" type="submit">
                            Place Order
                        </Button>
                    </form>
                </Col>
            </Row>
        </Container>
    )
};

export default PlaceOrder;