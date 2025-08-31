import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import CardDetail from "./components/CardDetails";
import "./components/Style.css";
import Heading from "./components/Heading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="bg-dark text-light min-vh-100">
      <Navbar />
      <Heading />
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/card/:id" element={<CardDetail />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
