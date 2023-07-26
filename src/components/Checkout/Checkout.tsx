import React from 'react';
import { useAppSelector } from "../../app/hook";
import CheckoutContent from "../CheckoutContent/CheckoutContent";
import CloseButton from "../CloseButton/CloseButton";

const Checkout = () => {
  const { dishes } = useAppSelector(state => state.admin);
  const { cartDishes } = useAppSelector(state => state.clientSide);

  return (
    <div className="position-fixed top-0 start-0 end-0 bottom-0 bg-black bg-opacity-25">
      <div
        className="position-fixed top-50 start-50 z-1 translate-middle p-4 bg-black rounded-4 text-white"
        style={{ width: 600 }}
      >
        {
          cartDishes && Object.keys(cartDishes).length ?
            <CheckoutContent cartDishes={cartDishes} dishes={dishes} />
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

export default Checkout;