import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {fetchOrders, deleteOne} from "../../store/Admin/Orders/OrdersThunk";
import Order from "../../components/Order/Order";
import PizzaLoader from "../../components/UI/PizzaLoader/PizzaLoader";

const Orders = () => {
  const dispatch = useAppDispatch();
  const { orders, ordersLoading } = useAppSelector(state => state.orders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const deleteOrder = async (id: string) => {
    await dispatch(deleteOne(id));
    await dispatch(fetchOrders());
  };

  return (
    <div className="m-3">
      <h1>Orders</h1>
      {
        ordersLoading ? <PizzaLoader /> :
          !orders.length ?
            <h1 className="position-absolute top-50 start-50 translate-middle">No orders</h1>
            :
            <div className="d-flex flex-column gap-3">
              {
                orders.map(({ customer, order }) => (
                  <Order
                    id={order.id}
                    customer={customer}
                    order={order}
                    onClick={() => deleteOrder(order.id)}
                    key={order.id}
                  />
                ))
              }
            </div>
      }
    </div>
  );
};

export default Orders;