import React from 'react';
import { Link, NavLink } from "react-router-dom";
import './Navbar.css';

interface Props {
  isAdmin?: boolean;
}

const NavBar: React.FC<Props> = ({ isAdmin }) => (
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
          <div className="bg-dark" style={{ width: 2, height: 30 }}></div>
          <NavLink to="orders" className="text-white text-nowrap text-decoration-none fs-4">Orders</NavLink>
        </div>
        : null
    }

  </nav>
);

export default NavBar;