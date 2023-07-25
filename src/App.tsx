import React from 'react';
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Admin from "./containers/Admin/Admin";
import Dishes from "./containers/Dishes/Dishes";
import DishesForm from "./components/DishesForm/DishesForm";

const App = () => (
  <Routes>
    <Route path="/admin" element={<Admin />}>
      <Route path="dishes" element={<Dishes />}>
        <Route path="new-dish" element={<DishesForm />} />
        <Route path="edit/:id" element={<DishesForm />} />
      </Route>
      <Route path="orders" element={null} />
    </Route>

    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;