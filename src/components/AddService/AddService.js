import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import hotel from '../../images/hotel-room.png';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const { title, description, price, image } = data;
        const newService = { title, description, price, image }
        alert('Service Added Successfully Done!!!')
        reset();
        fetch('https://nameless-bastion-67393.herokuapp.com/services', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newService)
        })
    }
    return (
        <Container className="my-5">
            <Row className="d-flex justify-content-center align-items-center">

                <Col md={6}>
                    <h1 className="mb-4 text-success" style={{ fontFamily: 'cursive' }}>Add A Service</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <Col>
                                <input placeholder="Title" className="w-100 form-control mb-3" {...register("title")} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <input placeholder="Description" className="w-100 form-control mb-3" {...register("description", { required: true })} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <input placeholder="Price" className="w-100 form-control mb-3" {...register("price", { required: true })} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <input required placeholder="Image Url" className="w-100 form-control mb-3" {...register("image", { required: true })} />
                            </Col>
                        </Row>
                        <Button variant="success" type="submit">
                            Add Service
                        </Button>
                    </form>
                </Col>
                <Col md={6}>
                    <img className="img-fluid" src={hotel} alt="" />
                </Col>
            </Row>
        </Container>

    );
};

export default AddService;