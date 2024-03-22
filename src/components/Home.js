import React, { useEffect, useState } from "react";
import { getList } from "./Api.js";
import MovieContent from "./MovieContent";
import Nav from "./Nav.js";
import "./home.css";
import Footer from "./Footer.js";

export function Home() {
  const [language, setLanguage] = useState("en");
  const [page, setPage] = useState(1);
  const [movieChart, setMovieChart] = useState([]);
  const [rank, setRank] = useState(0);

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

  useEffect(() => {
    console.log(1);
    handleLoad({
      language,
      page,
    });
  }, [page]);

  return (
    <>
      <Nav />
      <div className="contentContainer">
        <div className="mainContents">
          {movieChart.map((item, index) => (
            <MovieContent item={item} key={item.id} rank={index + rank + 1} />
          ))}
        </div>
      </div>
      <div className="buttonGroup">
        <button onClick={prevPage}>이전 페이지</button>
        <button onClick={nextPage}>다음 페이지</button>
      </div>
      <Footer />
    </>
  );
}
