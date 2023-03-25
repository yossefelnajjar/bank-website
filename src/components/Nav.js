import React from "react";

const Nav = () => {
  return (
    <>
      <nav className="sticky top-0 z-10 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl text-gray-900 font-semibold">Logo</span>
            <div className="flex space-x-4 text-gray-900">
              <a href="/#">Dashboard</a>
              <a href="/#">About</a>
              <a href="/#">Projects</a>
              <a href="/#">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
