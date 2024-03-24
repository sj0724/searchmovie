import React, { useEffect, useState } from "react";
import { getList } from "./Api.js";
import MovieContent from "./MovieContent";
import Nav from "./Nav.js";
import "./home.css";
import Footer from "./Footer.js";
import Popup from "./Popup.js";
import Button from "./Button.js";

export function Home() {
  const [request, setRequest] = useState("popular");
  const [language, setLanguage] = useState();
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
      alert("첫 페이지 입니다!");
    } else {
      setPage(page - 1);
      setRank(rank - 20);
    }
  };

  const handleLanguage = () => {
    language ? setLanguage() : setLanguage("ko");
  };

  const handleDetail = (item) => {
    setDisable(true);
    setDetail(item);
  };

  useEffect(() => {
    setDisable(false);
    handleLoad({
      language,
      page,
      request,
    });
  }, [page, language, request]);

  return (
    <>
      <Nav setMovieChart={setMovieChart} setRequest={setRequest} />
      <div className="contentContainer">
        <div className="listName">{request.toUpperCase()}</div>
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
        <Button onClick={prevPage}>이전</Button>
        <Button onClick={handleLanguage}>Language</Button>
        <Button onClick={nextPage}>다음</Button>
      </div>
      <Footer />
      {disable && <Popup detail={detail} setDisable={setDisable} />}
    </>
  );
}
