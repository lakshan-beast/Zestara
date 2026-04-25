import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductCard from "./components/ProductCard";
import CategoryCard from "./components/CategoryCard";
import ServiceCard from "./components/ServiceCard";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  });

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element-={<Home />} />
        <Route path="/shop" element-={<AllProducts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
