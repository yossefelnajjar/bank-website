import { features } from "../constants";
import Button from './Button';
import { navLinks } from './../constants/index';

const Features = () => {
  return (
    <div
      className="max-w-6xl mx-auto px-4 pt-20 my-32 flex justify-between sm:flex-col md:flex-col xl:flex-col sm:pt-10 md:pt-10"
      id={navLinks[1].id}>
      <div className="features-left flex justify-between flex-col sm:mb-9 sm:items-center md:mb-9 md:items-center xl:mb-9 xl:items-center lg:mb-9 lg:items-center">
        <div className="text sm:mb-7 md:mb-7 lg:mb-7 xl:mb-7">
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
      <div className="features-right items-center justify-center flex flex-col">
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
export default Features;
