import React from "react";
import "./moviecontent.css";
import { imageUrl } from "../api/Api";
import EmptyArea from "./EmptyArea";

function MovieContent({ item, rank, handleDetail }) {
  const settingDetail = () => handleDetail(item);
  const { poster_path } = item;

  return (
    <>
      <div className="movieContent">
        {poster_path ? (
          <img src={`${imageUrl}${poster_path}`} alt="poster" />
        ) : (
          <EmptyArea item={"image"} />
        )}

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
