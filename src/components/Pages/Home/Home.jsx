import React from 'react'
import './Home.css';
import Navbar from '../../Features/Navbar/Navbar';
import Recommended from '../../Features/Recommended/Recommended';
import Row from '../../Features/Row/Row';
import request  from '../../Features/Fetch/request';
export default function Home() {
    return (
        <div className="Home">
        <Navbar/>
        <Recommended/>
        <Row title='NETFLIX ORIGINAL' fetchUrl={request.fetchNetflixOriginal} isLargeRow/>
        <Row title='Trending Now' fetchUrl={request.fetchTrending}/>
        <Row title='Top Rated' fetchUrl={request.fetchTopRated}/>
        <Row title='Action Movie' fetchUrl={request.fetchActionMovies}/>
        <Row title='Comedy Movie' fetchUrl={request.fetchComedyMovies}/>
        <Row title='Horror Movie' fetchUrl={request.fetchHorrorMovies}/>
        <Row title='Romance Movie' fetchUrl={request.fetchRomanceMovies}/>
        <Row title='Documentary Movie' fetchUrl={request.fetchDocumentaries}/>
    
        </div>
    )
}



