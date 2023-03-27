import { logo } from "../assets";
import { footerLinks } from "../constants";
import { socialMedia } from './../constants/index';

const Footer = () => {
  return (
    <footer className="bg-black max-w-6xl mt-32 px-4 pt-10 mx-auto">
      <div className="">
        <div className="footer-top flex c w-full sm:flex-col sm:pb-4 md:flex-col md:pb-8 lg:flex-col lg:pb-8 ">
          <div className="footer-top-left">
            <img src={logo} alt="logo" />
            <p className="text-m text-stone-600 mt-10 mb-12">
              A new way to make the payments easy,
              <br />
              reliable and secure.
            </p>
          </div>
          <div className="footer-top-right ml-52 flex flex-1 justify-between sm:ml-0 sm:text-lg md:ml-0 lg:ml-0 ">
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

export default Footer;
