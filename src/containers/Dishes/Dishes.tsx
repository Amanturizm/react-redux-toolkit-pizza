import React, { useEffect } from 'react';
import { Link, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { fetchAll } from "../../store/Admin/AdminThunk";
import Dish from "../../components/Dish/Dish";

const Dishes = () => {
  const dispatch = useAppDispatch();
  const { dishes } = useAppSelector(state => state.dishes);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <div className="mt-4">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h1>Dishes</h1>
        <Link to="new-dish" className="btn btn-primary">Add new Dish</Link>
      </div>

      <div className="d-flex flex-column gap-4">
        {
          dishes.map(dish => <Dish dish={dish} key={`dish-${dish.id}`} />)
        }
      </div>

      <Outlet />
    </div>
  );
};

export default Dishes;