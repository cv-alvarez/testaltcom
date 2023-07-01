import { useState } from "react";
import "./App.css";
import Homepage from "./components/pages/homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/Product/ProductDetail";
import NavbarMain from "./components/NavbarMain/NavbarMain.jsx";
import Catalog from "./components/Catalog/Catalog";
import Contact from "./components/pages/Contact/Contact";
import About from "./components/pages/About/About";
import AyudaComponente from "./components/AyudaComponente/AyudaComponente";
function App() {
  return (
    <div className="container-fluid nopadding">
      <NavbarMain />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/catalog/:name" element={<Catalog />} />

        <Route path="/:name/:product" element={<ProductDetail />} />
        <Route path="/contactanos" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <AyudaComponente />
    </div>
  );
}

export default App;
