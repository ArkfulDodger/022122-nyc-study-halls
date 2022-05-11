import { useState } from 'react'
import RandomDadJoke from "./RandomDadJoke"
import FavoriteDadJokesDisplay from "./FavoriteDadJokesDisplay"
import RandomImage from "./RandomImage"
import { useState } from 'react'

function App() {
<<<<<<< HEAD
  const [savedJokes, setSavedJokes] = useState([]);

function addSavedJoke(joke) {
  console.log('addSavedJokeCalled')

  setSavedJokes(savedJokes => [...savedJokes, joke]);
}
=======

  const [imgOpen, setImgOpen] = useState(true)
>>>>>>> upstream/main

  return (
    <div className="App">

      <h1>Study Hall - useEffect and Component Lifecycle</h1>

      <div className="grid column-3">

        <RandomDadJoke onSaveJoke={addSavedJoke} />

        <div>

          {imgOpen ? <RandomImage /> : null}

          <br/>
        
          <button onClick={() => setImgOpen(isOpen => !isOpen)}>{imgOpen ? 'Close' : 'Open'} Image</button>

        </div>

        <FavoriteDadJokesDisplay favoriteJokes={savedJokes}/>

      </div>


    </div>
  );
}

export default App;
