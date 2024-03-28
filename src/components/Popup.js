import { useState } from "react";
import { imageUrl } from "../api/Api";
import { Rating } from "./Rating";
import "./popup.css";
import EmptyArea from "./EmptyArea";

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
        {poster_path ? (
          <img
            className="popUpPoster"
            src={`${imageUrl}${poster_path}`}
            alt="poster"
          />
        ) : (
          <EmptyArea item={"image"} />
        )}
        <div className="popUp-detail">
          <div className="popUp-title">
            <p>{title}</p>
          </div>
          <Rating vote_average={vote_average} />
          {overview ? (
            <p className="popUp-description">{overview}</p>
          ) : (
            <EmptyArea item={"review"} />
          )}

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
