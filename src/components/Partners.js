import { navLinks } from "./../constants/index";
import { airbnb, dropbox } from "../assets";

const Partners = () => {
  return (
    <div
      className="max-w-6xl mx-auto px-4 pt-20 my-32 flex justify-center flex-col items-center sm:pt-10 md:pt-10"
      id={navLinks[3].id}>
      <h1 className="text-white text-4xl mb-10 sm:text-3xl md:text-3xl">
        Trusted By Top Companies
      </h1>
      <div className="companies flex justify-center items-center">
        <div className="mr-10 w-80 sm:w-40 sm:mr-4 md:w-56">
          <img src={dropbox} alt="dropbox" />
        </div>
        <div className="w-64 sm:w-36 md:w-56">
          <img src={airbnb} alt="airbnb" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
