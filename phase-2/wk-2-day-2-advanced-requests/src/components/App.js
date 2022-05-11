import { useState, useEffect } from 'react'
import PlanetDetail from './PlanetDetail';
import PlanetList from './PlanetList'
import PlanetForm from './PlanetForm'
import spaceShuttle from '../assets/space-shuttle.png'

function App() {

  const [planets, setPlanets] = useState([])
  const [displayPlanetId, setDisplayPlanetId] = useState(0)

<<<<<<< HEAD

  useEffect(() => {
    fetch(`http://localhost:3001/planets`)
      .then( res => res.json())
      .then( data => setPlanets(data))
      .catch( error => console.log(error.message));
  }, [])

  function addPlanet(planet) {
    setPlanets(planets => [...planets, planet])
  }

  function removePlanet(deletedPlanet) {
    const updatedPlanets = planets.filter(planet => planet.id !== deletedPlanet.id);
    setPlanets(updatedPlanets);
  }

  // write something here to get all the planets when the app first loads...
  // you may want to use a useEffect...
=======
  useEffect(() => {
    fetch('http://localhost:3001/planets')
    .then(res => res.json())
    .then(data => setPlanets(data))
  } ,[])

  function addPlanet(newPlanet) {
    setPlanets(planets => [...planets, newPlanet])
  }

  function removePlanet(planetToRemove) {
    setPlanets(planets => planets.filter(planet => planet.id !== planetToRemove.id))
  }
>>>>>>> upstream/main

  return (
    <div className="App grid column-3">

      <img className="absolute fly-in" src={spaceShuttle} alt="space shuttle" />

      <PlanetList planets={planets} setDisplayPlanetId={setDisplayPlanetId} />

<<<<<<< HEAD
      <PlanetDetail planetId={displayPlanetId} removePlanet={removePlanet} />

      <PlanetForm addPlanet={addPlanet} />
=======
      <PlanetDetail displayPlanetId={displayPlanetId} removePlanet={removePlanet} />

      <PlanetForm addPlanet={addPlanet} setPlanets={setPlanets} />
>>>>>>> upstream/main

    </div>
  );
}

export default App;
