import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NotFound from "./components/NotFound/NotFound";
import Admin from "./containers/Admin/Admin";
import Dishes from "./containers/Dishes/Dishes";

const App = () => (
  <Routes>
    <Route path="/admin" element={<Admin />}>
      <Route path="dishes" element={<Dishes />} />
      <Route path="orders" element={null} />
    </Route>

    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;