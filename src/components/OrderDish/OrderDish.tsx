import React from 'react';

interface Props {
  dish: IDish;
  amount: number;
}

const OrderDish: React.FC<Props> = ({ dish, amount }) => {
  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex gap-3">
        <h4>{amount}x</h4>
        <h4>{dish.title}</h4>
      </div>
      <h4>{parseInt(dish.price) * amount} KGZ</h4>
    </div>
  );
};

export default OrderDish;