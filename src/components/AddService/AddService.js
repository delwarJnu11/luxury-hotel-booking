import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const { title, description, image } = data;
        const newService = { title, description, image }
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
            <Row>
                <Col md={6}>
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
                                <input required placeholder="Image Url" className="w-100 form-control mb-3" {...register("image", { required: true })} />
                            </Col>
                        </Row>
                        <Button variant="success" type="submit">
                            Add Service
                        </Button>
                    </form>
                </Col>
            </Row>
        </Container>

    );
};

export default AddService;