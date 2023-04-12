import React, { useEffect } from 'react'
import 
import './Banner.css'
function Banner() {
    useEffect(()=> {

    }, [])
  return (
    <div className='banner'>
      <div className="content">
        <h1 className="title">Movie Name</h1>
        <div className="banner_buttons">
            <button className='button'>Play</button>
            <button className='button'>My List</button>
        </div>
        <h1 className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque dolor ducimus amet ab architecto voluptate. Minima cumque unde ex a animi amet harum ipsam culpa quos delectus! Autem, nesciunt aperiam!</h1>
      </div>
      <div className="fade_bottom">

      </div>
    </div>
  )
}

export default Banner
