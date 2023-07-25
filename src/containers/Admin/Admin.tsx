import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Admin = () => {
  return (
    <>
      <header>
        <Navbar isAdmin />
      </header>

      <main className="container-fluid" style={{ paddingTop: 56 }}>
        <Outlet />
      </main>
    </>
  );
};

export default Admin;