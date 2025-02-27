import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Dishes from "../Dishes/Dishes";

const ClientSide = () => (
  <>
    <header>
      <Navbar />
    </header>

    <main className="container-fluid" style={{ padding: '80px 0 60px 0' }}>
      <Dishes />
      <Outlet />
    </main>
  </>
);

export default ClientSide;