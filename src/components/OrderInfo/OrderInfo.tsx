import React from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hook";
import OrderInfoContent from "../OrderInfoContent/OrderInfoContent";
import CloseButton from "../UI/CloseButton/CloseButton";
import {Link, useNavigate} from "react-router-dom";
import { addOrder } from "../../store/ClientSide/ClientSideThunk";
import { clearCart } from "../../store/ClientSide/ClientSideSlice";
import ButtonSpinner from "../UI/ButtonSpinner/ButtonSpinner";

const OrderInfo = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { dishes } = useAppSelector(state => state.dishes);
  const { cartDishes } = useAppSelector(state => state.clientSide);

  return (
    <div className="position-fixed top-0 start-0 end-0 bottom-0 bg-black bg-opacity-25">
      <div
        className="position-absolute top-50 start-50 z-1 translate-middle p-4 bg-black rounded-4 text-white"
        style={{ width: 600 }}
      >
        {
          cartDishes && Object.keys(cartDishes).length ?
            <>
              <OrderInfoContent cartDishes={cartDishes} dishes={dishes} />

              <div className="d-flex flex-column gap-2">
                <Link to="/" className="btn btn-secondary">Cancel</Link>
                <button className="btn btn-warning" onClick={() => navigate('/checkout')}>
                  Checkout
                </button>
              </div>
            </>
            :
            <>
              <h1 className="text-warning mt-4">Cart is empty</h1>
              <CloseButton to="/" />
            </>
        }
      </div>
    </div>
  );
};

export default OrderInfo;