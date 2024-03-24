import React, { useState } from "react";
import "./nav.css";
import { searchList } from "./Api.js";

function Nav({ setMovieChart, setRequest }) {
  const [keyword, setKeyword] = useState();

  const handleInput = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = async (e) => {
    let result;
    e.preventDefault();
    try {
      result = await searchList(keyword);
    } catch (error) {
      console.log(error);
    }
    const { results } = result;
    setMovieChart(results);
  };

  return (
    <div className="navBar">
      <div className="logo">MoviePark</div>
      <div className="menuModal">
        <span className="list-btn" onClick={() => setRequest("upcoming")}>
          UP COMING
        </span>
        <span className="list-btn" onClick={() => setRequest("popular")}>
          POPULAR
        </span>
        <span className="list-btn" onClick={() => setRequest("top_rated")}>
          TOP RATED
        </span>
      </div>
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input type="text" name="search" onChange={handleInput}></input>
        </form>
      </div>
    </div>
  );
}

export default Nav;
