import React from "react";
import "./moviecontent.css";

const imageUrl = "https://image.tmdb.org/t/p/w500";

function MovieContent({ item, rank, handleDetail }) {
  const settingDetail = () => handleDetail(item);

  return (
    <>
      <div className="movieContent">
        <img src={`${imageUrl}${item.poster_path}`} alt="poster" />
        <div className="rank">{rank}</div>
        <div className="detail" onClick={settingDetail}>
          <p className="title">{item.title}</p>
        </div>
      </div>
    </>
  );
}

export default MovieContent;
