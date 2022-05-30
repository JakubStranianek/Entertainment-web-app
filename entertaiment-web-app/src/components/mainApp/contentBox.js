import React from 'react'
import "./contentBox.scss"
import logo from "../../assets/logo.svg"
import bookmark from "../../assets/icon-nav-bookmark.svg"
import home from "../../assets/icon-nav-home.svg"
import movies from "../../assets/icon-nav-movies.svg"
import tvSeries from "../../assets/icon-nav-tv-series.svg"
import avatar from "../../assets/image-avatar.png"
import {NavLink} from "react-router-dom"

export default function ContentBox() {
  return (
    <div className='contentBox'>
        <img src={logo} alt="contentBoxLogo" id='logoContent'></img>

        <div className='categories'>
            <NavLink to="/">
              <img src={home} alt="home"></img>
            </NavLink>

            <NavLink to="/movies">
              <img src={movies} alt="movies"></img>
            </NavLink>

            <NavLink to="/tvSeries">
              <img src={tvSeries} alt="tvSseries"></img>
            </NavLink>

            <NavLink to="/bookmark">
              <img src={bookmark} alt="bookmark"></img>
            </NavLink>
        </div>

            <img src={avatar} alt="avatarImage" id='avatar'></img>
    </div>
  )
}
