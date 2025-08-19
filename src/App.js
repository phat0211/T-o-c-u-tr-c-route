import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const isAuthenticated = localStorage.getItem("user");

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
      />
      <Route
        path="/product/:id"
        element={isAuthenticated ? <ProductDetail /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App;
