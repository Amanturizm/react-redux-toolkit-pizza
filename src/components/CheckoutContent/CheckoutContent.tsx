import React from 'react';
import CheckoutItem from "../CheckoutItem/CheckoutItem";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../app/hook";
import { decreaseDish, increaseDish } from "../../store/ClientSide/ClientSideSlice";
import {DELIVERY_PRICE} from "../../constants";

interface Props {
  cartDishes: ICartDishes;
  dishes: IDish[];
}

const CheckoutContent: React.FC<Props> = ({ cartDishes, dishes }) => {
  const dispatch = useAppDispatch();

  const cartDishesId = cartDishes ? Object.keys(cartDishes) : [];
  const dishesId = dishes.map(dish => dish.id);

  const price: number = dishesId
    .map((id, index) => {
      if (cartDishesId.includes(id)) {
        return parseInt(dishes[index].price) * cartDishes[id];
      }

      return 0;
    })
    .reduce((acc, currentValue) => {
      return acc += currentValue;
    }, DELIVERY_PRICE);

  return (
    <>
      <h1 className="mb-4">Your order:</h1>

      <div className="d-flex flex-column gap-2">
        {
          cartDishes && Object.keys(cartDishes).length ?
            cartDishesId.map(id => (
              <CheckoutItem
                title={dishes[dishesId.indexOf(id)].title}
                price={dishes[dishesId.indexOf(id)].price}
                amount={cartDishes[id]}
                minusClick={() => dispatch(decreaseDish(id))}
                plusClick={() => dispatch(increaseDish(id))}
                key={id}
              />
            ))
            : null
        }
      </div>

      <div className="d-flex justify-content-between mt-4">
        <h4>Delivery</h4>
        <h4>{DELIVERY_PRICE} KGZ</h4>
      </div>
      <div className="d-flex justify-content-between mb-4">
        <h4>Total</h4>
        <h4>{ price } KGZ</h4>
      </div>

      <div className="d-flex flex-column gap-2">
        <Link to="/" className="btn btn-secondary">Cancel</Link>
        <button className="btn btn-warning">Order</button>
      </div>
    </>
  );
};

export default CheckoutContent;