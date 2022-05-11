import { useState, useEffect } from 'react'

function RandomDadJoke({ onSaveJoke }) {

  const [currentJoke, setCurrentJoke] = useState({})
  const [numberOfJokesFetched, setNumberOfJokesFetched] = useState(0)

<<<<<<< HEAD
  // fetch joke on page load
  useEffect(() => {
      fetchJoke();
  }, [])

  // Increment Joke Count when currentJoke state changes
  useEffect(() => {
    if (currentJoke.joke) {
      setNumberOfJokesFetched((numberOfJokesFetched) => ++numberOfJokesFetched)
    }
=======
  useEffect(() => {
    fetchJoke()
  }, [])

  useEffect(() => {

    if (currentJoke.joke) {
      setNumberOfJokesFetched(prev => prev + 1)
    }

>>>>>>> upstream/main
  }, [currentJoke])

  function fetchJoke() {
    fetch('https://icanhazdadjoke.com/', {headers: {'Accept': 'application/json'}})
    .then(res => res.json())
<<<<<<< HEAD
    .then(data => setCurrentJoke(data))
  }

  function handleFetchNewJoke() {
    fetchJoke();
=======
    .then(fetchedJoke => setCurrentJoke(fetchedJoke))
  }

  function handleFetchNewJoke() {
    fetchJoke()
>>>>>>> upstream/main
  }

  function saveCurrentJoke() {
    console.log(currentJoke);
    onSaveJoke(currentJoke);
    fetchJoke();
  }

  return (

    <div>

      <p>{currentJoke.joke || 'Loading jokes...'}</p>

      <p>Number of jokes fetched: {numberOfJokesFetched}</p>

      <button className='rainbow-cycle-hover' onClick={saveCurrentJoke}>Save Joke</button>

      <button className='rainbow-cycle-hover' onClick={handleFetchNewJoke}>Get A New Joke</button>

    </div>

  )
}

export default RandomDadJoke
