import React, { useState, useEffect } from 'react'
import axios from '../Fetch/axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import './Row.css';

const baseImgUrl = 'https://image.tmdb.org/t/p/original/'

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("")
    useEffect(() => {
        fetchData();
    }, [fetchUrl])

    async function fetchData() {
        const request = await axios.get(fetchUrl)
        setMovies(request.data.results);
        return request;
    }
    const option = {
        height: "370",
        width: "80%",
        playerVars: {

            autoplay: 1
        }
    }

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("")
        }
        else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search)
                   setTrailerUrl( urlParams.get())
                })
                .catch(error => console.log(error))
        }
    }
    return (
        <div className="row">
            <h4>
                {title}
             </h4>


            <div className="row_posters">

                {movies.map((movie) => {

                    return (
                        <img onClick={() => handleClick(movie)}
                            key={movie.id}
                            className={`row_poster ${isLargeRow && "row_posterLarge"} `}
                            src={`${baseImgUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                        // <p className ="nameMovie">{movie.name}</p>           
                    )
                })}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={option} />}
        </div>
    )
}
export default Row;
