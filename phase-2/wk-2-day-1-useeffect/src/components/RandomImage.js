import { useEffect, useState } from 'react'

function RandomImage() {

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

  )

}

export default RandomImage
