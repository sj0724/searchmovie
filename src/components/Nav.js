import React, { useState } from "react";
import "./nav.css";
import { searchList } from "./Api.js";

function Nav({ setMovieChart }) {
  const [keyword, setKeyword] = useState();
  const handleSubmit = async (e) => {
    setKeyword(e.target.search.value);
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
        <span>UP COMING</span>
        <span>POPULAR</span>
        <span>TOP RATED</span>
      </div>
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input type="text" name="search"></input>
        </form>
      </div>
    </div>
  );
}

export default Nav;
