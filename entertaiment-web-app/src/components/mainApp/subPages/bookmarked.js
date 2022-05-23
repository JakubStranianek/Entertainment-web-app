import React from 'react'
import "./recommend.scss";
import ContentBox from "../contentBox.js";
import searchBox from "../../../assets/icon-search.svg";
import movie from "../../../assets/icon-nav-movies.svg";
import tvSeries from "../../../assets/icon-nav-tv-series.svg";
import marked from "../../../assets/icon-bookmark-full.svg";
import unMarked from "../../../assets/icon-bookmark-empty.svg";

export default function Movies(props) {
  return (
    <div className="mainApp">
      <ContentBox></ContentBox>
      <div className="searchBox">
        <img src={searchBox} alt="searchIcon"></img>
        <input type="text" placeholder="Search for movies or TV series"></input>
      </div>

      <h2>Bookmarked Movies</h2>
      <div className="recommend">
        {props.usedData.map((index) =>
          index.isBookmarked === false ? (
            ""
          ) : (
            <div className="recommendMovie">
              <img
                src={index.thumbnail.regular.small}
                alt={"movie" + index.title}
              ></img>
  
              <div className="fullDesc">
                <div className="description">
                  <p>{index.year}</p>
                  {index.category === "Movie" ? (
                    <img src={movie} alt="movie"></img>
                  ) : (
                    <img src={tvSeries} alt="tvSeries"></img>
                  )}
                  <p>{index.category}</p>
                  <p>{index.rating}</p>
                </div>
                <h3>{index.title}</h3>
              </div>
  
              {index.isBookmarked ? (
                <div className="mark">
                  <img src={marked} alt="marked"></img>
                </div>
              ) : (
                <div className="mark">
                  <img src={unMarked} alt="unMarked"></img>
                </div>
              )}
            </div>
          )
        )}
      </div>
    );
    </div>
  )
}
