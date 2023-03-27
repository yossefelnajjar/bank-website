import { stats } from './../constants/index';

const Stats = () => {
  return (
    <div className="stats max-w-6xl mx-auto px-4 text-white flex justify-between py-9 sm:py-2 sm:flex-col md:py-2 md:flex-col lg:py-2 lg:flex-col">
      {stats.map((state) => {
        return (
          <div
            key={state.id}
            className="flex justify-between items-center relative  md:after:hidden sm:after:hidden lg:after:hidden">
            <span className="font-semibold text-4xl">{state.value}</span>
            <span className="ml-2 text-xl text-sky-400">{state.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
