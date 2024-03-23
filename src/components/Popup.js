import { imageUrl } from "./Api";
import "./popup.css";

function Popup({ detail, setDisable }) {
  const { title, overview, poster_path, vote_average } = detail;
  const handleDisable = () => setDisable(false);

  return (
    <div className="bg">
      <div className="popupContent">
        <button className="cta-close" onClick={handleDisable}>
          X
        </button>
        <img
          className="popUpPoster"
          src={`${imageUrl}${poster_path}`}
          alt="poster"
        />
        <div className="popUp-detail">
          <p className="popUp-title">{title}</p>
          <p>{vote_average}</p>
          <p className="popUp-description">{overview}</p>
        </div>
      </div>
    </div>
  );
}

export default Popup;
