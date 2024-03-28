import { useEffect, useState } from "react";
import { imageUrl } from "../api/Api";
import { Rating } from "./Rating";
import "./popup.css";

export function CategoryItem({ item }) {
  return (
    <>
      <p className="categoryName">{item}</p>
    </>
  );
}

export function Popup({ detail, setDisable, type }) {
  const { title, overview, poster_path, vote_average } = detail;
  const handleDisable = () => setDisable(false);
  const [detailType, setDeatilType] = useState(type);

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
          <div className="typeArea">
            {detailType.map((item, index) => (
              <CategoryItem item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
