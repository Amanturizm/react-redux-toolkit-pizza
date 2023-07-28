import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { clearCart } from "../../store/ClientSide/ClientSideSlice";
import { addOrder } from "../../store/ClientSide/ClientSideThunk";
import FormInput from "../UI/FormInput/FormInput";
import ButtonSpinner from "../UI/ButtonSpinner/ButtonSpinner";

const initialState: ICustomer = {
  name: '',
  address: '',
  phone: ''
};

const Checkout = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { addOrderLoading } = useAppSelector(state => state.clientSide);

  const [inputsValue, setInputsValue] = useState<ICustomer>(initialState);

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputsValue(prevState => ({ ...prevState, [name]: value }));
  };

  const sendOrder = async (e: React.FormEvent) => {
    e.preventDefault();

    if (inputsValue.name.length < 1) {
      alert('Enter the name');
    } else if (inputsValue.address.length < 1) {
      alert('Enter the address');
    } else if (inputsValue.phone.length < 1) {
      alert('Enter the phone number');
    } else {
      await dispatch(addOrder(inputsValue));
      navigate('/order-result');
      await dispatch(clearCart());
    }
  };

  return (
    <div className="position-fixed top-0 start-0 end-0 bottom-0 bg-black bg-opacity-25">
      <form
        className="position-absolute top-50 start-50 z-1 translate-middle p-4 bg-black rounded-4 text-white"
        style={{ width: 600 }}
      >
        <h1 className="mb-4">Checkout: </h1>

        <div className="d-flex flex-column gap-2 mb-4">
          <FormInput label="Name: " name="name" value={inputsValue.name} changeValue={changeValue} />
          <FormInput label="Address: " name="address" value={inputsValue.address} changeValue={changeValue} />
          <FormInput label="Phone: " name="phone" value={inputsValue.phone} changeValue={changeValue} />
        </div>

        <div className="d-flex flex-column gap-2">
          <Link to="/order" className="btn btn-secondary">Cancel</Link>
          <button
            className="disabled-button btn btn-warning"
            onClick={sendOrder}
            disabled={addOrderLoading}
          >
            Order{addOrderLoading ? <ButtonSpinner /> : null}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;