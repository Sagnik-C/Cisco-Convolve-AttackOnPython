import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// pages
import Plots from "./pages/plots/Dashboard";
import Predictions from "./pages/predictions/Dashboard";
// data
import products from "./data.json";

function App() {
  const [product, setProduct] = useState(Object.keys(products)[0]);
  const [model, setModel] = useState(Object.keys(Object.values(products)[0])[2]);
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Plots product={product} setProduct={setProduct} model={model} setModel={setModel} />} />
        <Route path={"/predictions"} element={<Predictions product={product} setProduct={setProduct} model={model} setModel={setModel} />} />
        <Route path={"/*"} element={<Plots product={product} setProduct={setProduct} model={model} setModel={setModel} />} />
      </Routes>
    </Router>
  );
}

export default App;
