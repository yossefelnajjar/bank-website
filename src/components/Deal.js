import { card } from "../assets";
import Button from "./Button";

const Deal = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-20 my-32 flex justify-between sm:pt-10 md:pt-10">
      <div className="Deal-left flex justify-center flex-col sm:items-center md:items-center">
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
      <div className="Deal-right w-2/5  sm:hidden md:hidden lg:hidden">
        <img src={card} alt="card" />
      </div>
    </div>
  );
};

export default Deal;
