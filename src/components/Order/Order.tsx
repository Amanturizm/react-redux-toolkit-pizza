import React, {useState} from 'react';
import { DELIVERY_PRICE } from "../../constants";
import OrderDish from "../OrderDish/OrderDish";
import {useAppSelector} from "../../app/hook";
import ButtonSpinner from "../UI/ButtonSpinner/ButtonSpinner";
import OrderModalForCustomer from "../UI/OrderModalForCustomer/OrderModalForCustomer";

interface Props {
  id: string;
  customer: ICustomer;
  order: IOrder;
  onClick: React.MouseEventHandler;
}

const Order: React.FC<Props> = ({ id, customer, order, onClick }) => {
  const { completeButtonLoading } = useAppSelector(state => state.orders);

  const [isShowCustomer, setIsShowCustomer] = useState<boolean>(false);

  const total: number = order
    .dishes.reduce((acc, { dish, amount }) => {
      return acc += (parseInt(dish.price) * amount);
    }, DELIVERY_PRICE);

  return (
    <div className="d-flex flex-column border border-2 border-black p-3">
      <div className="d-flex justify-content-between">

      <div className="d-flex flex-column justify-content-between w-75">
        {
          order.dishes.map(({ dish, amount }) => (
            <OrderDish dish={dish} amount={amount} key={`${id}-${dish.id}`} />
          ))
        }

        <div className="d-flex justify-content-between">
          <h4>Delivery</h4>
          <h4>{DELIVERY_PRICE} KGZ</h4>
        </div>
      </div>

      <div className="d-flex flex-column justify-content-between">
        <div>
          <h4>Order total:</h4>
          <h4>{total} KGZ</h4>
        </div>

      </div>
      </div>

      <div className="d-flex justify-content-between">
        <button className="btn btn-info" onClick={() => setIsShowCustomer(true)}>Customer</button>
        <button
          className="disabled-button btn btn-warning d-flex justify-content-center align-items-center gap-3"
          id="order-button"
          onClick={onClick}
          disabled={completeButtonLoading === id}
        >
          Complete order{completeButtonLoading === id ? <ButtonSpinner /> : null}
        </button>
      </div>
      {
        isShowCustomer ?
          <OrderModalForCustomer customer={customer} close={() => setIsShowCustomer(false)} />
          : null
      }
    </div>
  );
};

export default Order;