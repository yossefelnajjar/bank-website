import { navLinks } from "../constants/index";
import { robot } from "../assets";

const Home = () => {
  return (
    <div
      id={navLinks[0].id}
      className="max-w-7xl mx-auto px-4 h-screen relative  cursor-default">
      <div className="flex w-full h-full justify-between items-center relative">
        <div className="home-left text-white relative">
          <div className="discount flex justify-between px-2 rounded-xl items-center mb-3 sm:w-96">
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
        <div className="home-right relative sm:hidden md:hidden lg:hidden xl:hidden">
          <img src={robot} alt="robot" className="robot-img " />
        </div>
      </div>
    </div>
  );
};

export default Home;
