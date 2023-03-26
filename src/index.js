import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Nav from "./components/Nav.js";
import Logo from "./assets/logo.svg";
import bill from "./assets/bill.png";
import robot from "./assets/robot.png";
import apple from "./assets/apple.svg";
import google from "./assets/google.svg";

import { navLinks, stats, features } from "./constants/index";
// import Home from './components/Home';

/*Nav*/
const Nav = () => {
  return (
    <>
      <nav className="w-full top-0 z-10 fixed backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between h-8">
            <div className="w-28">
              <a href="#home">
                <img src={Logo} alt="logo" />
              </a>
            </div>
            <div className="flex space-x-7 font-light" id="nav_Links">
              {navLinks.map((link) => {
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className="hover:text-white text-zinc-400 duration-300 transition-all">
                    {link.title}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

/*Home*/
const Home = () => {
  return (
    <>
      <div
        id={navLinks[0].id}
        className="max-w-7xl mx-auto px-4 h-screen relative cursor-default">
        <div className="absolute top-8 w-full h-full">
          <div className="flex w-full h-full justify-between items-center relative">
            <div className="home-left text-white relative">
              <div className="discount flex justify-between px-2 rounded-xl items-center mb-3 ">
                <i className="fa-solid fa-tags text-cyan-400"></i>
                20% DISCOUNT FOR 1 MONTH ACCOUNT
              </div>
              <div className="home-left-text">
                <h1 className="text-7xl">
                  The Next <br />
                  <span className="text-cyan-400">Generation</span>
                  <br /> Payment Method.
                </h1>
                <p className="text-m text-stone-400 mt-9">
                  Our team of experts uses a methodology to identify the credit
                  cards most likely to fit your needs.
                  <br />
                  We examine annual percentage rates, annual fees.
                </p>
              </div>
            </div>
            <div className="home-right text-white -m-8">
              <img src={robot} alt="robot" className="robot-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/*Stats*/
const Stats = () => {
  return (
    <div className="stats max-w-7xl mx-auto px-4 text-white flex justify-between py-9">
      {stats.map((state) => {
        return (
          <div
            key={state.id}
            className="flex justify-between items-center relative">
            <span className="font-semibold text-4xl">{state.value}</span>
            <span className="ml-2 text-xl text-sky-400">{state.title}</span>
          </div>
        );
      })}
    </div>
  );
};

/*Button*/
const Button = (props) => {
  return (
    <button className="w-36 font-medium tracking-wide h-16 rounded-xl btn">
      {props.name}
    </button>
  );
};

/*features*/
const Features = () => {
  return (
    <div
      className="max-w-7xl mx-auto px-4 pt-20 my-32 flex justify-between"
      id={navLinks[1].id}>
      <div className="features-left flex justify-between flex-col">
        <div className="text">
          <h1 className="text-white text-6xl">
            You do the business,
            <br /> we'll handle the money.
          </h1>
          <p className="text-m text-stone-400 mt-5">
            With the right credit card, you can improve your
            <br /> financial life by building credit, earning rewards and saving
            money. <br />
            But with hundreds of credit cards on the market.
          </p>
        </div>
        <Button name="contact" />
      </div>
      <div className="features-right">
        {features.map((sec) => {
          return (
            <div
              className="features-box flex px-4 py-6 rounded-2xl max-w-lg transition-all duration-300 cursor-default"
              key={sec.id}>
              <div className="p-5 w-fit h-fit mr-3 bg-slate-900 relative rounded-full transition-all duration-300">
                <img src={sec.icon} alt="icon" />
              </div>
              <div>
                <h2 className="text-white">{sec.title}</h2>
                <p className="text-gray-400">{sec.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/*Download*/

const Download = () => {
  return (
    <div
      className="max-w-7xl mx-auto px-4 pt-20 my-32 flex justify-between"
      id={navLinks[2].id}>
      <div className="download-left flex-1">
        <img src={bill} alt="bill" />
      </div>
      <div className="download-right flex justify-center flex-col">
        <div className="text">
          <h1 className="text-white text-6xl">
            Easily control your
            <br />
            billing & invoicing.
          </h1>
          <p className="text-m text-stone-400 mt-5 mb-12">
            Elit enim sed massa etiam. Mauris eu adipiscing
            <br /> ultrices ametodio aenean neque. Fusce ipsum orci
            <br /> rhoncus aliporttitor integer platea placerat.
          </p>
        </div>
        <div className="flex ">
          <a href="">
          <img src={google} alt="bill" />
          </a>
          <a href="">
          <img src={apple} alt="bill" />
          </a>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Nav />
    <Home />
    <Stats />
    <Features />
    <Download />
  </>
);

/*
container => className="max-w-7xl mx-auto px-4"

*/
