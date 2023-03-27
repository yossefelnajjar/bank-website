import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Download from "./components/Download";
import Deal from "./components/Deal";
import Partners from "./components/Partners";
import Try from "./components/Try";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Nav />
    <Home />
    <Stats />
    <Features />
    <Download />
    <Deal />
    <Partners />
    <Try />
    <Footer />
  </>
);
