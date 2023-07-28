import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../../app/hook";
import './Navbar.css';

interface Props {
  isAdmin?: boolean;
}

const CART_IMAGE: string = 'https://icon-library.com/images/white-shopping-cart-icon/white-shopping-cart-icon-9.jpg';

const NavBar: React.FC<Props> = ({ isAdmin }) => {
  const { cartDishes } = useAppSelector(state => state.clientSide);

  return (
    <nav className="navbar navbar-expand-lg bg-primary position-fixed w-100 z-1 px-5">
      <div className="d-flex w-100">
        <Link className="navbar-brand text-white" to={isAdmin ? '/admin' : '/'}>
          Turtle Pizza {isAdmin ? 'Admin' : null}
        </Link>
      </div>
      {
        isAdmin ?
          <div className="d-flex align-items-center gap-2">
            <NavLink to="dishes" className="text-white text-nowrap text-decoration-none fs-4">Dishes</NavLink>
            <div className="bg-dark" style={{width: 2, height: 30}}></div>
            <NavLink to="orders" className="text-white text-nowrap text-decoration-none fs-4">Orders</NavLink>
          </div>
          :
          <Link to="order" className="position-relative">
            <img src={CART_IMAGE} style={{width: 45}} alt="cart-img"/>
            {
              cartDishes && Object.keys(cartDishes).length ?
                <div
                  className="position-absolute bg-danger text-white d-flex align-items-center justify-content-center rounded-circle"
                  style={{width: 25, height: 25, fontSize: 16, top: -7, right: -7}}
                >
                  { Object.keys(cartDishes).length }
                </div> : null
            }
          </Link>
      }

    </nav>
  );
};

export default NavBar;