import axios from './axios'
import React, { useEffect, useState } from 'react'
import "./Banner.css"
import requests from './Request'

const Banner = () => {
const [random,setRandom]=useState([])

const fetchData=async()=>{
    const data=await axios.get(requests.fetchActionMovies)
    // console.log(data.data.results)
    setRandom(data.data.results[Math.floor(Math.random()*data.data.results.length)])
    // setRandom(data.data.results)
   

}
useEffect(()=>{
  fetchData()
},[])
// console.log(random)

  return (
    <div className='banner' style={{
        backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original${random?.backdrop_path
    }")`,
        backgroundPosition:"center center"
    }} >
         <div className="banner-contents">
            <h1 className='banner-title' >
                {random?.title ||random?.name || random?.original_name }
            </h1>
            <div className="banner-buttons">
                <button  className='banner-button' >Play</button>
                <button  className='banner-button' >My List</button>
            </div>
            <h1  className='banner-description'>{random?.overview?.slice(0,200)}</h1>
         </div>
         <div className="banner-fade-bottom">

         </div>
    </div>
  )
}

export default Banner