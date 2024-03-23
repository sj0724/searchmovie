function Button({ onClick, children }) {
  const handleButton = () => onClick();
  return <button onClick={handleButton}>{children}</button>;
}

export default Button;
