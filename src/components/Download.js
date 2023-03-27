import { apple, bill, google } from "../assets";
import { navLinks } from "./../constants/index";

const Download = () => {
  return (
    <div
      className="max-w-6xl mx-auto px-4 pt-20 my-32 flex justify-between sm:pt-10 md:pt-10"
      id={navLinks[2].id}>
      <div className="download-left flex-1 relative sm:hidden md:hidden lg:hidden">
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
          <a href="#home">
            <img src={google} alt="google play" />
          </a>
          <a href="#home">
            <img src={apple} alt="app store" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Download;
