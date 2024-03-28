import React from "react";
import "./moviecontent.css";
import { imageUrl } from "../api/Api";

function MovieContent({ item, rank, handleDetail }) {
  const settingDetail = () => handleDetail(item);

  return (
    <>
      <div className="movieContent">
        <img src={`${imageUrl}${item.poster_path}`} alt="poster" />
        <div className="rank">
          <p>{rank}</p>
        </div>
        <div className="detail" onClick={settingDetail}>
          <p className="title">{item.title}</p>
        </div>
      </div>
    </>
  );
}

export default MovieContent;
