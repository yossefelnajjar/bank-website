import logo from "../assets/logo.svg";
import { navLinks } from "./../constants/index";

const Nav = () => {
  return (
    <>
      <nav className="w-full top-0 z-10 fixed backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between h-8">
            <div className="w-28">
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

export default Nav;
