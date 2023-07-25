import React, {useState} from 'react';
import {Link} from "react-router-dom";
import DeleteConfirm from "../DeleteConfirm/DeleteConfirm";
import {useAppDispatch} from "../../app/hook";
import {deleteOne, fetchAll} from "../../store/Admin/AdminThunk";

interface Props {
  dish: IDish;
}

const Dish: React.FC<Props> = ({ dish }) => {
  const dispatch = useAppDispatch();
  const [isConfirm, setIsConfirm] = useState<boolean>(false);

  const deleteDish = async () => {
    await dispatch(deleteOne(dish.id));
    await dispatch(fetchAll());
  };

  return (
    <div className="d-flex align-items-center justify-content-between border-top border-5 border-black pe-4 pt-4">
      <div className="d-flex align-items-center gap-3">
        <img src={dish.image} alt="dish-img" className="rounded-4" style={{ width: 150, height: 150 }} />
        <h1>{dish.title}</h1>
      </div>
      <div className="d-flex align-items-center gap-3">
        <h1>{dish.price} KGS</h1>
        <Link to={`edit/${dish.id}`} className="btn btn-success">Edit</Link>
        <button className="btn btn-danger" onClick={() => setIsConfirm(true)}>Delete</button>
      </div>
      { isConfirm ? <DeleteConfirm clickYes={deleteDish} clickNo={() => setIsConfirm(false)} /> : null }
    </div>
  );
};

export default Dish;