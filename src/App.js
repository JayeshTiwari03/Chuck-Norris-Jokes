import "./App.css";
import JokesSearch from "./components/JokesSearch";
import JokesList from "./components/JokesList";

function App() {
  return (
    <div className="App">
      <h1>Chuck Norris Jokes Displayer</h1>
      <JokesSearch />
      <JokesList />
    </div>
  );
};

export default App;
