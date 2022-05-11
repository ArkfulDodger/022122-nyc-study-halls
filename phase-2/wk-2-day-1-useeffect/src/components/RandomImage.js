import { useEffect, useState } from 'react'

function RandomImage() {

<<<<<<< HEAD
  const [foxImage, setFoxImage] = useState('#');

  useEffect(() => {
    fetch(`https://randomfox.ca/floof/`, {headers: {'Accept': 'application/json'}})
    .then( res => res.json())
    .then( data => setFoxImage(data.image))
    .catch( error => console.log(error.message));
}, [])

  return (

    foxImage === '#'
      ? <p>Loading Fox Image...</p>
      : <img src={foxImage} alt="a random image goes here..." />
=======
  const [foxImage, setFoxImage] = useState('#')

  // INITIAL FETCH
  useEffect(() => {

    console.log('I am the side effect')
    fetch('https://randomfox.ca/floof/')
    .then(res => res.json())
    .then(data => setFoxImage(data.image))
  }, [])
  
  // INTERVAL SIDE EFFECT
  useEffect(() => {
    // SIDE EFFECT //
    const interval = setInterval(() => {
      fetch('https://randomfox.ca/floof/')
      .then(res => res.json())
      .then(data => setFoxImage(data.image))
    }, 3000)
    
    // CLEANUP //
    return () => {
      console.log('I am the cleanup')
      clearInterval(interval)
    }
  }, [])

  return (

    <img src={foxImage} alt="a random image goes here..." />
>>>>>>> upstream/main

  )

}

export default RandomImage
