import React from 'react';

interface Props {
  price: string;
  title: string;
  amount: number;
  minusClick: React.MouseEventHandler;
  plusClick: React.MouseEventHandler;
}

const CheckoutItem: React.FC<Props> = ({ title, price, amount, minusClick, plusClick }) => (
  <div className="d-flex justify-content-between align-items-center position-relative">
    <h4>{title}</h4>

    <div
      className="
        position-absolute
        d-flex justify-content-between align-items-center gap-2
        border border-2 border-secondary rounded-4 py-2 px-2"
      style={{ width: 100, height: 35, right: 110 }}
    >
      <div
        className="fs-1 text-white-50 d-flex justify-content-center align-items-center"
        style={{ width: 30, height: 30, cursor: 'pointer' }}
        onClick={minusClick}>
        -
      </div>
      <h4 className="m-0">{amount}</h4>
      <div
        className="fs-2 text-white-50 d-flex justify-content-center align-items-center"
        style={{ width: 30, height: 30, cursor: 'pointer' }}
        onClick={plusClick}
      >
        +
      </div>
    </div>

    <h4>{parseInt(price) * amount} KGZ</h4>
  </div>
);

export default CheckoutItem;