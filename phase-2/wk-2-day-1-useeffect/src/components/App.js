import RandomDadJoke from "./RandomDadJoke"
import FavoriteDadJokesDisplay from "./FavoriteDadJokesDisplay"
import RandomImage from "./RandomImage"
import { useState } from 'react'

function App() {
  const [savedJokes, setSavedJokes] = useState([]);

function addSavedJoke(joke) {
  console.log('addSavedJokeCalled')

  setSavedJokes(savedJokes => [...savedJokes, joke]);
}

  return (
    <div className="App">

      <h1>Study Hall - useEffect and Component Lifecycle</h1>

      <div className="grid column-3">

        <RandomDadJoke onSaveJoke={addSavedJoke} />

        <RandomImage />

        <FavoriteDadJokesDisplay favoriteJokes={savedJokes}/>

      </div>


    </div>
  );
}

export default App;
