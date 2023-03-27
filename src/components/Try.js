import Button from "./Button";

const Try = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-20 my-32 flex items-center justify-center sm:pt-10 md:pt-10">
      <div className="main-box flex justify-between items-center py-20 px-20 w-full sm:flex-col sm:before:hidden sm:px-10 md:flex-col md:before:top-36 md:before:right-60 md:px-5">
        <div className="main-box-text sm:text-center">
          <h1 className="text-white text-4xl mb-10 sm:mb-5 md:mb-5">
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

export default Try;
