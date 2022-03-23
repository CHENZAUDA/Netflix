import './App.css';
import Navbar from './components/Features/Navbar/Navbar';
import Recommended from './components/Features/Recommended/Recommended';
import Row from './components/Features/Row/Row';
import request  from './components/Features/Fetch/request';
function App() {
  return (
    <div className="App">
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
  );
}

export default App;
