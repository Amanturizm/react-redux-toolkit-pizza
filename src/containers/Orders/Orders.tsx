import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {fetchOrders, deleteOne} from "../../store/Admin/Orders/OrdersThunk";
import Order from "../../components/Order/Order";
import PizzaLoader from "../../components/UI/PizzaLoader/PizzaLoader";
import ErrorMessage from "../../components/UI/ErrorMessage/ErrorMessage";

const Orders = () => {
  const dispatch = useAppDispatch();
  const { orders, ordersLoading, errorMessage } = useAppSelector(state => state.orders);

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
        errorMessage ?
          <ErrorMessage message={errorMessage} className="text-danger" /> :
          ordersLoading ? <PizzaLoader /> :
            !orders.length ?
              <ErrorMessage message="No orders" /> :
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