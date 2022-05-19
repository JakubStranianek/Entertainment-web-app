import React from 'react'
import "./mainApp.scss"
import ContentBox from "./contentBox.js"
import searchBox from "../../assets/icon-search.svg"

export default function mainApp() {
  return (
    <div className='mainApp'>
      <ContentBox></ContentBox> 

      <div className='searchBox'>
        <img src={searchBox} alt="searchIcon"></img>
        <input type="text" placeholder='Search for movies or TV series'></input>     
      </div>
      
    </div>
  )
}
