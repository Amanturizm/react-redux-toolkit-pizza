import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Dishes from "../Dishes/Dishes";

const ClientSide = () => (
  <>
    <header>
      <Navbar />
    </header>

    <main className="container-fluid" style={{ paddingTop: 56 }}>
      <Dishes />
    </main>
  </>
);

export default ClientSide;