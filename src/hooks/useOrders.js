import { useEffect, useState } from "react";

const useOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch(`https://nameless-bastion-67393.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setAllOrders(data));
    }, [allOrders])
    return { allOrders, setAllOrders }
}
export default useOrders;