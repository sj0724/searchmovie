import "./button.css";

function Button({ onClick, children }) {
  const handleButton = () => onClick();
  return (
    <button className="cta-bottom" onClick={handleButton}>
      {children}
    </button>
  );
}

export default Button;
