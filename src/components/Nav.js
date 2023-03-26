import React from "react";
import Logo from "../assets/logo.svg";
import { navLinks } from "./../constants/index";

const Nav = () => {
  let hanldeClick = (e) => {
    let links = document.querySelectorAll("#nav_Links a");
    links.forEach((link) => {
      link.className =
        "hover:text-white text-zinc-400 duration-300 transition-all";
    });
    e.target.className = "text-white duration-300 transition-all";
  };

  return (
    <>
      <nav className="w-full top-0 z-10 fixed backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-8">
            <div className="w-28 d-inline">
              <img src={Logo} alt="logo" />
            </div>
            <div className="flex space-x-7  font-light d-inline" id="nav_Links">
              {navLinks.map((link) => {
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => hanldeClick(e)}
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

export default Nav;
