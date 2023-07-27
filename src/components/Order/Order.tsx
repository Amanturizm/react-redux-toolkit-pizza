import React from 'react';
import { DELIVERY_PRICE } from "../../constants";

interface Props {
  id: string;
  order: IOrder;
}

const Order: React.FC<Props> = ({ id, order }) => {
  const total: number = order
    .dishes.reduce((acc, { dish, amount }) => {
      return acc += (parseInt(dish.price) * amount);
    }, DELIVERY_PRICE);

  return (
    <div className="d-flex justify-content-between border border-2 border-black p-3">
      <div className="w-75">
        {
          order.dishes.map(({ dish, amount }) => (
            <div className="d-flex justify-content-between" key={`${id}-${dish.id}`}>
              <div className="d-flex gap-3">
                <h4>{amount}x</h4>
                <h4>{dish.title}</h4>
              </div>
              <h4>{parseInt(dish.price) * amount} KGZ</h4>
            </div>
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
        <button className="btn btn-warning">Complete order</button>
      </div>
    </div>
  );
};

export default Order;