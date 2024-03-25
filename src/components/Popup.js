import { imageUrl } from "./Api";
import { Rating } from "./Rating";
import "./popup.css";

export function categoryItem({ item }) {
  return <div>{item}</div>;
}

export function Popup({ detail, setDisable, categories }) {
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
          <Rating vote_average={vote_average} />
          <p className="popUp-description">{overview}</p>
        </div>
      </div>
    </div>
  );
}
