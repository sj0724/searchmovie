import "./popup.css";

function Popup({ detail, setDisable }) {
  const { title, overview } = detail;
  const handleDisable = () => setDisable(false);

  return (
    <div className="bg">
      <div className="popupContent">
        <p>{title}</p>
        <p>{overview}</p>
      </div>
      <button onClick={handleDisable}>x</button>
    </div>
  );
}

export default Popup;
