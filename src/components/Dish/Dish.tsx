import React, {useState} from 'react';
import {Link} from "react-router-dom";
import DeleteConfirm from "../DeleteConfirm/DeleteConfirm";
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {deleteOne, fetchAll} from "../../store/Admin/AdminThunk";
import { addOrRemoveDish} from "../../store/ClientSide/ClientSideSlice";

interface Props {
  dish: IDish;
  isAdmin?: boolean;
}

const DISH_CLASSES = {
  DEFAULT: 'd-flex align-items-center justify-content-between ',
  ADMIN: 'border-top border-5 border-black pe-4 pt-4',
  CLIENT_SIDE: 'position-relative border border-5 border-black rounded-4 p-4 pe-5',
}

const Dish: React.FC<Props> = ({ dish, isAdmin }) => {
  const dispatch = useAppDispatch();
  const { cartDishes } = useAppSelector(state => state.clientSide);

  const [isConfirm, setIsConfirm] = useState<boolean>(false); // for admin

  const isSelect: boolean = Boolean(cartDishes && cartDishes[dish.id]);

  const deleteDish = async () => {
    await dispatch(deleteOne(dish.id));
    await dispatch(fetchAll());
  };

  const setCart = () => {
    dispatch(addOrRemoveDish({ type: isSelect ? 'remove' : 'add', id: dish.id }));
  };

  return (
    <div
      className={DISH_CLASSES.DEFAULT + ( isAdmin ? DISH_CLASSES.ADMIN : DISH_CLASSES.CLIENT_SIDE )}
      style={{ width: isAdmin ? '100%' : 700 }}
    >
      <div className="d-flex align-items-center gap-3">
        <img src={dish.image} alt="dish-img" className="rounded-4" style={{ width: 150, height: 150 }} />
        <h1 className="overflow-hidden" style={{ maxWidth: isAdmin ? 'none' : 250, textOverflow: 'ellipsis' }}>{dish.title}</h1>
      </div>

      <div className="d-flex align-items-center gap-3 ms-3">
        <h1>{dish.price} KGS</h1>
        {
          isAdmin ?
            <>
              <Link to={`edit/${dish.id}`} className="btn btn-success">Edit</Link>
              <button className="btn btn-danger" onClick={() => setIsConfirm(true)}>Delete</button>
            </>
            :
            <button
              className={`
              btn btn-${isSelect ? 'danger' : 'success'} border-3
              fs-2 position-absolute rounded-circle
              d-flex justify-content-center align-items-center`}
              style={{ width: 60, height: 60, top: -25, right: -25 }}
              onClick={setCart}
            >
              {isSelect ? '-' : '+'}
            </button>
        }
      </div>

      { isConfirm ? <DeleteConfirm clickYes={deleteDish} clickNo={() => setIsConfirm(false)} /> : null }
    </div>
  );
};

export default Dish;