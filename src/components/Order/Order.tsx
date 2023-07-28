import React from 'react';
import { DELIVERY_PRICE } from "../../constants";
import OrderDish from "../OrderDish/OrderDish";
import {useAppSelector} from "../../app/hook";
import ButtonSpinner from "../UI/ButtonSpinner/ButtonSpinner";

interface Props {
  id: string;
  order: IOrder;
  onClick: React.MouseEventHandler;
}

const Order: React.FC<Props> = ({ id, order, onClick }) => {
  const { completeButtonLoading } = useAppSelector(state => state.orders);

  const total: number = order
    .dishes.reduce((acc, { dish, amount }) => {
      return acc += (parseInt(dish.price) * amount);
    }, DELIVERY_PRICE);

  return (
    <div className="d-flex justify-content-between border border-2 border-black p-3">
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

      <div>
        <h4>Order total:</h4>
        <h4>{total} KGZ</h4>
        <button
          className="disabled-button btn btn-warning d-flex justify-content-center align-items-center gap-3"
          id="order-button"
          onClick={onClick}
          disabled={completeButtonLoading === id}
        >
          Complete order{completeButtonLoading === id ? <ButtonSpinner /> : null}
        </button>
      </div>
    </div>
  );
};

export default Order;