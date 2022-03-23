import React, { useEffect, useState } from 'react'
import axios from '../Fetch/axios';
import request from '../Fetch/request';
import './Recommend.css'

export default function Recommended() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        const requests = await axios.get(request.fetchNetflixOriginal)
        setMovie(
            requests.data.results[Math.floor(Math.random() * requests.data.results.length - 1)]
        )
        return requests;
    }
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    // console.log(movie);

    return (
        <header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: " center center"
            }} >
            <div className='bannerContainer'>
                <h1 className="bannerTitle">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="bannerBtn">
                    <button className="btn">Play</button>
                    <button className="btn">My List</button>
                </div>
                <h3 className="description">
                    {truncate(movie?.overview, 150)}
                </h3>
            </div>
            <div className="banner_fadeBtn"/>
        </header>
    )
}
