import React, { useEffect, useState } from "react";
import { getList } from "./Api.js";
import MovieContent from "./MovieContent";
import Nav from "./Nav.js";
import "./home.css";
import Footer from "./Footer.js";
import Popup from "./Popup.js";

export function Home() {
  const [page, setPage] = useState(1);
  const [movieChart, setMovieChart] = useState([]);
  const [rank, setRank] = useState(0);
  const [detail, setDetail] = useState({});
  const [disable, setDisable] = useState(false);

  const handleLoad = async (options) => {
    let result;
    try {
      result = await getList(options);
    } catch (error) {
      console.log(error);
    }
    const { results } = result;
    setMovieChart(results);
  };

  const nextPage = () => {
    setPage(page + 1);
    setRank(rank + 20);
  };

  const prevPage = () => {
    if (page === 1) {
      return;
    } else {
      setPage(page - 1);
      setRank(rank - 20);
    }
  };

  const handleDetail = (item) => {
    setDisable(true);
    setDetail(item);
  };

  useEffect(() => {
    setDisable(false);
    handleLoad({
      page,
    });
  }, [page]);

  return (
    <>
      <Nav />
      <div className="contentContainer">
        <div className="mainContents">
          {movieChart.map((item, index) => (
            <MovieContent
              item={item}
              key={item.id}
              rank={index + rank + 1}
              handleDetail={handleDetail}
            />
          ))}
        </div>
      </div>
      <div className="buttonGroup">
        <button onClick={prevPage}>이전 페이지</button>
        <button onClick={nextPage}>다음 페이지</button>
      </div>
      <Footer />
      {disable && <Popup detail={detail} setDisable={setDisable} />}
    </>
  );
}
