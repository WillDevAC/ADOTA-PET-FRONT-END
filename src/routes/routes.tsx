import React from "react";

import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";

import { Register } from "../pages/register";
import { Login } from "../pages/login";
import { Home } from "../pages/home";


const Router: React.FC = () => {
  return (
      <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
      </Routes>
    </AnimatePresence>
  );
};
export default Router;
