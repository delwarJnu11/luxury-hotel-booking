import React, { useEffect, useState } from 'react';
import { Badge, Button, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    const { email } = user;
    useEffect(() => {
        fetch(`https://nameless-bastion-67393.herokuapp.com/orders/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [email])

    //Remove
    const handleRemove = (id) => {
        const deleteWarning = window.confirm('Are You sure Delete This Service');
        if (deleteWarning) {
            fetch(`https://nameless-bastion-67393.herokuapp.com/orders/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully Deleted!')
                        const remainingOrders = orders.filter(order => order._id !== id)
                        setOrders(remainingOrders);
                        window.location.reload()
                    }
                })
        }



    }
    return (
        <Container className="my-4">

            {
                orders.map(order => <Row xs={1} md={1} className="g-4 my-4">
                    <Col md={4}>
                        <div>
                            <img height="150px" src={order?.service?.image} alt="" className="img-fluid" />
                        </div>
                    </Col>
                    <Col md={8}>
                        <h2>{order?.service?.title} </h2>
                        <strong><Badge variant="danger">{order.status}</Badge></strong>
                        <p>{order?.service?.description}</p>
                        <Button onClick={() => handleRemove(order._id)} variant="danger">Remove</Button>
                    </Col>
                </Row>)
            }

        </Container>
    );
};

export default MyOrders;