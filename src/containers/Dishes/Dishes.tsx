import React, { useEffect } from 'react';
import { Link, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { fetchAll } from "../../store/Admin/Dishes/DishesThunk";
import Dish from "../../components/Dish/Dish";
import PizzaLoader from "../../components/UI/PizzaLoader/PizzaLoader";

interface Props {
  isAdmin?: boolean;
}

const Dishes: React.FC<Props> = ({ isAdmin }) => {
  const dispatch = useAppDispatch();
  const { dishes, dishesLoading } = useAppSelector(state => state.dishes);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <div className="mt-4">
      {
        isAdmin ?
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h1>Dishes</h1>
            <Link to="new-dish" className="btn btn-primary">Add new Dish</Link>
          </div>
          : null
      }
      {
          dishesLoading ? <PizzaLoader /> :
            <div className={"d-flex gap-4 " + ( isAdmin ? "flex-column" : "flex-wrap ms-5" )}>
              {
                dishes.map(dish => <Dish dish={dish} key={`dish-${dish.id}`} isAdmin={isAdmin} />)
              }
            </div>
      }

      <Outlet />
    </div>
  );
};

export default Dishes;