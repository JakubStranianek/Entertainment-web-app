import React from "react";
import "./mainApp.scss";
import ContentBox from "./contentBox.js";
import searchBox from "../../assets/icon-search.svg";
import Trending from "./subPages/trending.js";
import Recommend from "./subPages/recommend.js";
import data from "./data.json";

export default function mainApp() {  
  return (
    <div className="mainApp">
      <ContentBox></ContentBox>
      <div className="searchBox">
        <img src={searchBox} alt="searchIcon"></img>
        <input type="text" placeholder="Search for movies or TV series"></input>
      </div>

      <h2>Trending</h2>
      <Trending usedData={data}></Trending>

      <h2>Recommend for you</h2>      
      <Recommend usedData={data}></Recommend>    
    </div>
  );
}
