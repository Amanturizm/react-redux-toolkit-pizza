import React from 'react';

interface Props {
  customer: ICustomer;
  close: React.MouseEventHandler;
}

const OrderModalForCustomer: React.FC<Props> = ({ customer, close }) => {
  return (
    <div className="position-fixed top-0 start-0 end-0 bottom-0 bg-black bg-opacity-25">
      <div
        className="position-absolute top-50 start-50 z-1 translate-middle p-4 bg-black rounded-4 text-white"
        style={{ width: 600 }}
      >
        <h1 className="mb-4">Customer: </h1>

        <div className="d-flex flex-column gap-3">
          <h4><strong>Name: </strong>{customer.name}</h4>
          <h4><strong>Address: </strong>{customer.address}</h4>
          <h4><strong>Phone: </strong>{customer.phone}</h4>
        </div>

        <button
          className="btn-close btn-close-white position-absolute top-0 end-0 m-4"
          onClick={close}
        ></button>
      </div>
    </div>
  );
};

export default OrderModalForCustomer;