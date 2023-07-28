import React from 'react';
import { useAppSelector } from "../../../app/hook";
import ButtonSpinner from "../ButtonSpinner/ButtonSpinner";

interface Props {
  clickYes: React.MouseEventHandler;
  clickNo: React.MouseEventHandler;
}

const DeleteConfirm: React.FC<Props> = ({ clickYes, clickNo }) => {
  const { deleteLoading } = useAppSelector(state => state.dishes);
  return (
    <div className="position-fixed top-50 start-50 translate-middle z-3 p-3 bg-black rounded-4 text-white">
      Delete?
      <div className="d-flex gap-2 mt-3">
        <button
          className="disabled-button btn btn-danger d-flex justify-content-center align-items-center gap-3"
          id="yes-button"
          onClick={clickYes}
          disabled={deleteLoading}
        >
          Yes{deleteLoading ? <ButtonSpinner /> : null}
        </button>
        <button className="btn btn-primary" onClick={clickNo}>No</button>
      </div>
    </div>
  );
};

export default DeleteConfirm;