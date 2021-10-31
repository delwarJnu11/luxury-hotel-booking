import React from 'react';
import { Container } from 'react-bootstrap';
import useOrders from '../../hooks/useOrders';
import OrdersDetails from '../OrdersDetails/OrdersDetails';

const ManageOrders = () => {
    const { allOrders } = useOrders();
    return (
        <Container>
            <h1 className="text-success my-5 text-center" style={{ fontFamily: "cursive" }}>Total Orders {allOrders.length}</h1>
            {
                allOrders.map(order => <OrdersDetails
                    key={order._id}
                    order={order}
                ></OrdersDetails>)
            }

        </Container>
    );
};

export default ManageOrders;