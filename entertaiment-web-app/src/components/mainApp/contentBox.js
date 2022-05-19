import React from 'react'
import "./contentBox.scss"
import logo from "../../assets/logo.svg"
import bookmark from "../../assets/icon-nav-bookmark.svg"
import home from "../../assets/icon-nav-home.svg"
import movies from "../../assets/icon-nav-movies.svg"
import tvSeries from "../../assets/icon-nav-tv-series.svg"
import avatar from "../../assets/image-avatar.png"

export default function contentBox() {
  return (
    <div className='contentBox'>
        <img src={logo} alt="contentBoxLogo" id='logoContent'></img>

        <div className='categories'>
            <img src={home} alt="home"></img>
            <img src={movies} alt="movies"></img>
            <img src={tvSeries} alt="tvSseries"></img>
            <img src={bookmark} alt="bookmark"></img>
        </div>

            <img src={avatar} alt="avatarImage" id='avatar'></img>
    </div>
  )
}
