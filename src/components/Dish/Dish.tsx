import React from 'react';
import {Link} from "react-router-dom";

interface Props {
  dish: IDish;
}

const Dish: React.FC<Props> = ({ dish }) => {
  return (
    <div className="d-flex align-items-center justify-content-between border-top border-5 border-black pe-4 pt-4">
      <div className="d-flex align-items-center gap-3">
        <img src={dish.image} alt="dish-img" className="rounded-4" style={{ width: 150, height: 150 }} />
        <h1>{dish.title}</h1>
      </div>
      <div className="d-flex align-items-center gap-3">
        <h1>{dish.price} KGS</h1>
        <Link to="/edit/" className="btn btn-success">Edit</Link>
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

export default Dish;