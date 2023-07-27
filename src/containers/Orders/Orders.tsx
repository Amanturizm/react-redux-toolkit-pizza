import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {fetchOrders} from "../../store/Admin/Orders/OrdersThunk";
import Order from "../../components/Order/Order";

const Orders = () => {
  const dispatch = useAppDispatch();
  const { orders } = useAppSelector(state => state.orders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <div className="m-3">
      <h1>Orders</h1>
      <div className="d-flex flex-column gap-3">
        {
          orders.map(order => <Order id={order.id} order={order} key={order.id} />)
        }
      </div>
    </div>
  );
};

export default Orders;