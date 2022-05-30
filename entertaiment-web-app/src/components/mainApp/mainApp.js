import React, { useState } from "react";
import "./mainApp.scss";
import ContentBox from "./contentBox.js";
import searchBox from "../../assets/icon-search.svg";
import Trending from "./subPages/trending.js";
import Recommend from "./subPages/recommend.js";
import data from "./data.json";

export default function MainApp() {  
  const [dataForTrending] = useState(data.filter((trend) => trend.isTrending === true));
  const [dataForRecommend] = useState(data.filter((trend) => trend.isTrending === false));
  const [dataForMovies] = useState(data.filter((movie) => movie.category === "Movie"));
  const [dataForTvSeries] = useState(data.filter((tvSerie) => tvSerie.category === "TV Series"));
  const [dataForBookmarkedM] = useState(data.filter((book) => book.isBookmarked === true && book.category === "Movie"));
  const [dataForBookmarkedTv] = useState(data.filter((book) => book.isBookmarked === true && book.category === "TV Series"));
  

  return (
    <div className="mainApp">
      <ContentBox></ContentBox>
      <div className="searchBox">
        <img src={searchBox} alt="searchIcon"></img>
        <input type="text" placeholder="Search for movies or TV series"></input>
      </div>
      
      {window.location.pathname === "/home" ? 
      <div>
        <h2>Trending</h2>
        <Trending usedData={dataForTrending}></Trending>
  
        <h2>Recommend for you</h2>      
        <Recommend usedData={dataForRecommend}></Recommend>
      </div>

        : ""  
      }

    {window.location.pathname === "/movies" ? 
      <div>
        <h2>Movies</h2>      
        <Recommend usedData={dataForMovies}></Recommend>
      </div>

        : ""  
      }

    {window.location.pathname === "/tvSeries" ? 
      <div>
        <h2>Tv Series</h2>      
        <Recommend usedData={dataForTvSeries}></Recommend>
      </div>

        : ""  
      }

         {window.location.pathname === "/bookmark" ? 
      <div>
        <h2>Bookmarked movies</h2>      
        <Recommend usedData={dataForBookmarkedM}></Recommend>

        <h2>Bookmarked Tv Series</h2>      
        <Recommend usedData={dataForBookmarkedTv}></Recommend>
      </div>

        : ""  
      } 
    </div>
  );

}
