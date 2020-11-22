import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App React</h1>  
          <Weather city="Limassol"/>
      </header>
      <footer>
        <small>Coded by Katerina Counta: <a href="https://github.com/kcounta/shecodes-react" target="blank">https://github.com/kcounta/shecodes-react</a></small>
      </footer>
    </div>
  );
}

export default App;
