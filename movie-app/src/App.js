import './App.css';
import SearchBar from './SearchBar';
import requests from './requests';
import MovieRows from './MovieRows';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar/>
      </header>
      <MovieRows title='Marvel Movies'/>
    </div>
  );
}

export default App;
