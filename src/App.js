import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import CaseStudies from "./components/CaseStudies";

import "./App.css";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="flex flex-col items-center">
      <div className="w-[98vw]">
        <NavBar />
      </div>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/case-studies" element={<CaseStudies />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}
export default App;
