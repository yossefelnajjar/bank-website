import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Nav from "./components/Nav.js";
import logo from "./assets/logo.svg";
import bill from "./assets/bill.png";
import robot from "./assets/robot.png";
import apple from "./assets/apple.svg";
import google from "./assets/google.svg";
import card from "./assets/card.png";
import dropbox from "./assets/dropbox.png";
import airbnb from "./assets/airbnb.png";

import {
  navLinks,
  stats,
  features,
  footerLinks,
  socialMedia,
} from "./constants/index";
// import Home from './components/Home';

/*Nav*/
const Nav = () => {
  return (
    <>
      <nav className="w-full top-0 z-10 fixed backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="bp-nav flex items-center justify-between h-8">
            <div className="w-28 bp-logo">
              <a href="#home">
                <img src={logo} alt="logo" />
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
              <div className="discount flex justify-between px-2 rounded-xl items-center mb-3 bp-discount">
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
                  Our team of experts uses a methodology to identify br
                  <br />
                  the credit cards most likely to fit your needs.
                  <br />
                  We examine annual percentage rates, annual fees.
                </p>
              </div>
            </div>
            <div className="home-right text-white -m-8 bp-h-img">
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
      <div className="download-left flex-1 relative">
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
        <div className="flex">
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

/*Deal*/
const Deal = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-20 my-32 flex justify-between">
      <div className="Deal-left flex justify-center flex-col">
        <div className="text">
          <h1 className="text-white text-6xl">
            Find a better card deal
            <br />
            in few easy steps.
          </h1>
          <p className="text-m text-stone-400 mt-5 mb-12">
            Arcu tortor, purus in mattis at sed integer faucibus.
            <br />
            Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices
            ac,ametau.
          </p>
        </div>
        <Button name="Get Started" />
      </div>
      <div className="Deal-right w-2/5">
        <img src={card} alt="card" />
      </div>
    </div>
  );
};

/*Partners*/
const Partners = () => {
  return (
    <div
      className="max-w-7xl mx-auto px-4 pt-20 my-32 flex justify-center flex-col items-center"
      id={navLinks[3].id}>
      <h1 className="text-white text-4xl mb-10">Trusted By Top Companies</h1>
      <div className="companies flex justify-center items-center">
        <div className="mr-10 w-80">
          <img src={dropbox} alt="dropbox" />
        </div>
        <div className="w-64">
          <img src={airbnb} alt="airbnb" />
        </div>
      </div>
    </div>
  );
};

/*Try*/
const Try = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-20 my-32 flex items-center justify-center">
      <div className="main-box flex justify-between items-center py-20 px-20 w-full">
        <div className="main-box-text">
          <h1 className="text-white text-4xl mb-10">
            Let's try our service now!
          </h1>
          <p className="text-m text-stone-400 mt-5 mb-12">
            Everything you need to accept card payments
            <br />
            and grow your business anywhere on the planet.
          </p>
        </div>
        <Button name="Get Started" />
      </div>
    </div>
  );
};

/*Footer*/
const Footer = () => {
  return (
    <footer className="bg-black max-w-7xl mt-32 px-4 pt-10 mx-auto">
      <div className="">
        <div className="footer-top flex c w-full">
          <div className="footer-top-left">
            <img src={logo} alt="logo" />
            <p className="text-m text-stone-600 mt-10 mb-12">
              A new way to make the payments easy,
              <br />
              reliable and secure.
            </p>
          </div>
          <div className="footer-top-right  ml-52 flex flex-1 justify-between">
            {footerLinks.map((list) => {
              return (
                <div className="link-column" key={list.title}>
                  <h3 className="text-white mb-5">{list.title}</h3>
                  {list.links.map((link) => {
                    return (
                      <a href={link.link} key={link.name}>
                        <div className="text-stone-400 hover:text-teal-400 transition-all">
                          {link.name}
                        </div>
                      </a>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <div className="footer-bottom flex justify-between my-4">
          <div className="footer-bottom-left text-gray-500">
            Copyright© {new Date().getFullYear()} HooBank. All Rights Reserved.
          </div>
          <div className="footer-bottom-right flex ">
            {socialMedia.map((social) => {
              return (
                <a
                  href={social.link}
                  key={social.id}
                  className="ml-3 hover:opacity-75 transition-all duration-300">
                  <img src={social.icon} alt="social media icon" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
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
    <Deal />
    <Partners />
    <Try />
    <Footer />
  </>
);

/*
container => className="max-w-7xl mx-auto px-4"

*/
