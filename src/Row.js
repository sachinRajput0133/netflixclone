import React, { useEffect,  useState } from "react";
import "./Row.css";
import {MdChevronLeft,MdChevronRight} from "react-icons/md"
import axios from "./axios";

import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const baseUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow,rowId }) {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState();
  const [loading,setLoading]=useState(true)
//   const rowRef=useRef<HTMLDivElement>(null)
  const [isMoved,setIsMoved]=useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const data = await axios.get(fetchUrl);
    //   console.log(data.data);
      setMovie(data.data.results);
      return data;
      
    };
    fetchData();
    setLoading(false)
  }, [fetchUrl]);
  // console.log(movie)

  const handleTrailer = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => {
          console.log("temporarly unavailable");
        });
    }
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const slideLeft=()=>{
    let slider=document.getElementById('slider' + rowId)
    slider.scrollLeft=slider.scrollLeft - 500
    
  }
  const slideRight=()=>{
    let slider=document.getElementById('slider' + rowId)
    slider.scrollLeft=slider.scrollLeft + 500

  }
// const handelClick=(direction)=>{
//     setIsMoved(true)
//     if(rowRef.current){
//         const {scrollLeft ,clientWidth}=rowRef.current
//         const scrollTo="left"?scrollLeft-clientWidth:scrollLeft+clientWidth
//         rowRef.current.scrollTo({direction:scrollTo,behaviour:"smooth"})
//     }

// }
  return (
    <div className="row">
      <div className="title">{title}</div>
      <div className="scroll-container">
          {
            !movie && loading?(<h2>loading............</h2>):(
<>
<MdChevronLeft  className="scroll-arrow scroll-left" onClick={slideLeft} />

      <div id={"slider"+rowId}  className="row-posters">
        {movie?.map((movie) => {
          return (
            <img
              onClick={() => handleTrailer(movie)}
              key={movie.id}
              className={`row-poster ${isLargeRow && "row-poster-large"}`}
              src={`${baseUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt=""
            />
          );
        })}
      </div>
      <MdChevronRight  className="scroll-arrow scroll-right" onClick={slideRight} />
</>

            )
          }
     
       
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
