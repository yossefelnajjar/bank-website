const Button = (props) => {
  return (
    <button className="w-36 font-medium tracking-wide h-16 rounded-xl btn">
      {props.name}
    </button>
  );
};

export default Button;
