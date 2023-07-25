import React from 'react';

interface Props {
  clickYes: React.MouseEventHandler;
  clickNo: React.MouseEventHandler;
}

const DeleteConfirm: React.FC<Props> = ({ clickYes, clickNo }) => {
  return (
    <div className="position-fixed top-50 start-50 translate-middle z-3 p-3 bg-black rounded-4 text-white">
      Delete?
      <div className="d-flex gap-2 mt-3">
        <button className="btn btn-danger" onClick={clickYes}>Yes</button>
        <button className="btn btn-primary" onClick={clickNo}>No</button>
      </div>
    </div>
  );
};

export default DeleteConfirm;