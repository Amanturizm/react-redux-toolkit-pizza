import React, { useEffect } from 'react';
import { useAppDispatch } from "../../app/hook";
import { addOrRemoveDish } from "../../store/ClientSide/ClientSideSlice";
import minus from '../../assets/minus.png';
import plus from '../../assets/plus.png';
import './OrderInfoItem.css';

interface Props {
  dish: IDish;
  amount: number;
  minusClick: React.MouseEventHandler;
  plusClick: React.MouseEventHandler;
}

const OrderInfoItem: React.FC<Props> = ({ dish: { id, title, price }, amount, minusClick, plusClick }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (amount === 0) {
      dispatch(addOrRemoveDish({ type: 'remove', id }));
    }
  }, [amount, dispatch, id]);

  return (
    <div className="d-flex justify-content-between align-items-center position-relative">
      <h4 className="m-0">{title}</h4>

      <div
        className="position-absolute d-flex justify-content-between align-items-center gap-2"
        style={{ width: 90, height: 25, right: 120 }}
      >
        <div
          className="amountButton text-white-50 d-flex justify-content-center align-items-center"
          style={{ width: 25, height: 25, cursor: 'pointer' }}
          onClick={plusClick}
        >
          <img src={plus} alt="plus-img" className="w-100" />
        </div>
        <h4 className="m-0">{amount}</h4>
        <div
          className="amountButton text-white-50 d-flex justify-content-center align-items-center"
          style={{ width: 25, height: 25, cursor: 'pointer' }}
          onClick={minusClick}>
          <img src={minus} alt="minus-img" className="w-100" />
        </div>
      </div>

      <h4 className="m-0">{parseInt(price) * amount} KGZ</h4>
    </div>
  );
};

export default OrderInfoItem;