import React from 'react'
import "./trending.scss"

import movie from "../../../assets/icon-nav-movies.svg";
import tvSeries from "../../../assets/icon-nav-tv-series.svg";
import marked from "../../../assets/icon-bookmark-full.svg";
import unMarked from "../../../assets/icon-bookmark-empty.svg";
import play from "../../../assets/icon-play.svg";

export default function trending(props) {
  
  return (
    <div className="trending">
        {props.usedData.map((index) =>
          index.isTrending ? (
            <div className="trend">
              <img
                src={index.thumbnail.trending.large}
                alt={"trending" + index.title}
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

              <div className='playHover'>
                  <img src={play} alt="playButton"></img>
                  <p>Play</p>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
  )
}
