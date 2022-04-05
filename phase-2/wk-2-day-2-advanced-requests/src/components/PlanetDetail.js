import { useState, useEffect } from 'react'

function PlanetDetail({planetId, removePlanet}) {

    const [planet, setPlanet] = useState({})

    // write something here to get the planet details based on the planetId...
    // you might want to use a useEffect...
    useEffect(() => {
        fetch(`http://localhost:3001/planets/${planetId}`)
            .then( res => res.json())
            .then( data => setPlanet(data))
            .catch( error => console.log(error.message));
    }, [planetId])

    function togglePlanetStatus() {
        // write something here to make the change persist...
    }

    function handleDelete() {
        fetch(`http://localhost:3001/planets/${planetId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        })
            .then( res => res.ok ? removePlanet(planet) : alert('something went wrong...'))
            .catch(alert('something went wrong'))
    }

    return (
        <div className="white-border">

            <h3>{planet.name || "Select a planet to see its info"}</h3>

            <p>Orbital Period (in Earth days): {planet.orbital_period_in_earth_days || "__"}</p>

            <p>Fun fact: {planet.fun_fact || "_______________"}</p>

            <p>Is a planet: {planet.is_planet ? "Yes": "No"}</p>

            <button onClick={togglePlanetStatus}>Change Planet Status</button>

            <button onClick={handleDelete}>Delete Planet</button>

        </div>
    )
}

export default PlanetDetail
