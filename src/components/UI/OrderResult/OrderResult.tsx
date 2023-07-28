import React from 'react';
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../app/hook";

const OrderResult = () => {
  const { errorMessage } = useAppSelector(state => state.clientSide);

  return (
    <div className="position-fixed top-50 start-50 translate-middle bg-black text-white p-4 rounded-4 text-center">
      <h2>{errorMessage || 'Order is accepted!'}</h2>
      <Link to="/" className="btn btn-primary w-100">Ok</Link>
    </div>
  );
};

export default OrderResult;