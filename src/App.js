import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <h1>Dictionary </h1>
        <br />
        <h2>What are you looking for?</h2>
        <Dictionary />
      </header>
    </div>
  );
}

export default App;
