import React from 'react';
import { Container } from 'react-bootstrap';
import useOrders from '../../hooks/useOrders';
import OrdersDetails from '../OrdersDetails/OrdersDetails';

const ManageOrders = () => {
    const { allOrders } = useOrders();
    return (
        <Container>

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