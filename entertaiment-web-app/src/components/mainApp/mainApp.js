import React from 'react'
import "./mainApp.scss"
import ContentBox from "./contentBox.js"
import searchBox from "../../assets/icon-search.svg"
import data from "./data.json"

export default function mainApp() {
  fetch()
     .then(res=>{
        this.setState({package:[...this.state.package,res.json()]}) 
        //using es6
     })
     .catch(err=>{
        console.log(err)
     })

  return (
    <div className='mainApp'>
      <ContentBox></ContentBox>
      <div className='searchBox'>
        <img src={searchBox} alt="searchIcon"></img>
        <input type="text" placeholder='Search for movies or TV series'></input>     
      </div>
      
      <div className='trending'>
        
      </div>
    </div>
  )
}
