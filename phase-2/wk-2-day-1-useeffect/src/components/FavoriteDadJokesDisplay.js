function FavoriteDadJokesDisplay({favoriteJokes = []}) {
  console.log('display re-rendered');
  console.log('jokes:', favoriteJokes);

  const renderedJokes = favoriteJokes.map(jokeObj => <p key={jokeObj.id}>{jokeObj.joke}</p>)

  return (

    <div>

      {renderedJokes}

    </div>

  )
}

export default FavoriteDadJokesDisplay
