function Button({
  content = "",
  className = "",
  handleClick = () => {},
  children,
  ...rest
}) {
  return (
    <button
      className={`btn ${className}`}
      onClick={() => handleClick()}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
