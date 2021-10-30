import React from 'react';
import { Badge, Button, Col, Row } from 'react-bootstrap';
import { MdDelete } from 'react-icons/md';
import { GiConfirmed } from 'react-icons/gi';
import useOrders from '../../hooks/useOrders';

const OrdersDetails = ({ order }) => {
    console.log(order)
    const { allOrders, setAllOrders } = useOrders();
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
                        const remainingOrders = allOrders.filter(order => order._id !== id)
                        setAllOrders(remainingOrders);
                        window.location.reload()
                    }
                })
        }



    }

    // update
    const handleUpdate = id => {
        const updatedOrder = { ...allOrders };

        updatedOrder.status = "Approved";

        fetch(`https://nameless-bastion-67393.herokuapp.com/orders/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Status Updated!');
                    window.location.reload()
                }
            })
    }
    return (
        <Row xs={1} md={1} className="g-4 my-4">
            <Col md={4}>
                <div>
                    <img height="150px" src={order?.service?.image} alt="" className="img-fluid" />
                </div>
            </Col>
            <Col md={8}>
                <h2>{order?.service?.title}</h2>
                <strong className="my-3"><Badge variant="danger">{order.status}</Badge></strong>
                <p>{order?.service?.description}</p>
                <p>{order?.email}</p>
                <Button className="me-2" onClick={() => handleRemove(order._id)} variant="danger"> <MdDelete /> Remove</Button>
                <Button className="ms-2" onClick={() => handleUpdate(order._id)} variant="success"> <GiConfirmed /> Confirm</Button>
            </Col>
        </Row>
    );
};

export default OrdersDetails;