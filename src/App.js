
import './App.css';
import Banner from './Banner';
import Header from './Header';
import requests from './Request';
import Row from './Row';
function App() {
  return (
    <div className="App">
    
      <Header/>
      <Banner/>
      <Row rowId={1} isLargeRow={true} 
      title="NETFLIX ORIGINALS"
      fetchUrl={requests.fetchNetFlixOriginals}
      />
      <Row  isLargeRow={false} title="TOP RATED"  fetchUrl={requests.fetchTopRated} /> 
      {/* <Row isLargeRow={false} title="TRENDING NOW" fetchUrl={requests.fetchTrending}  /> */}
      <Row  rowId={2}    isLargeRow={false} title="ACTION MOVIES"  fetchUrl={requests.fetchActionMovies} />
      <Row  rowId={3}  isLargeRow={false} title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row  rowId={4}  isLargeRow={false} title="HORRER MOVIES" fetchUrl={requests.fetchHorroMovies} />
      <Row  rowId={5}  isLargeRow={false} title="ROMANTIC MOVIES"  fetchUrl={requests.fetchRomanticMovies} />
      <Row  rowId={6}   isLargeRow={false} title="DOCUMENTRIES" fetchUrl={requests.fetchDocumentaries}  />
    </div>
  );
}

export default App;
