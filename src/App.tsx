import React from 'react';
import { Route, Routes } from "react-router-dom";
import ClientSide from "./containers/ClientSide/ClientSide";
import Admin from "./containers/Admin/Admin";
import Dishes from "./containers/Dishes/Dishes";
import DishesForm from "./components/DishesForm/DishesForm";
import NotFound from "./components/UI/NotFound/NotFound";
import Checkout from "./components/Checkout/Checkout";
import OrderResult from "./components/UI/OrderResult/OrderResult";
import Orders from "./containers/Orders/Orders";

const App = () => (
  <Routes>
    <Route path="/" element={<ClientSide />}>
      <Route path="checkout" element={<Checkout />} />
      <Route path="order-result" element={<OrderResult />} />
    </Route>

    <Route path="/admin" element={<Admin />}>
      <Route path="dishes" element={<Dishes isAdmin />}>
        <Route path="new-dish" element={<DishesForm />} />
        <Route path="edit/:id" element={<DishesForm />} />
      </Route>

      <Route path="orders" element={<Orders />} />
    </Route>

    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;