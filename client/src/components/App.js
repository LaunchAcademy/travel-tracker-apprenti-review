import React, { useState } from 'react';
import PlaceTile from "./PlaceTile"

const App = (props) => {
  // debugger
  
  const [selectedPlaceId, setSelectedPlaceId] = useState(null)

  const placesList = props.data.places.map((place) => {
    // debugger
    // <li key={place.id}>{place.name}</li>
    const handleClick = () => {
      // debugger
      setSelectedPlaceId(place.id)
    }

    let placeStyle = ""
    if (selectedPlaceId === place.id) {
      placeStyle = "done"
    }

    return (
      <PlaceTile 
        key={place.id}
        placeName={place.name}
        handleClick={handleClick}
        placeStyle={placeStyle}
      />
    )
  })
  // debugger

  let message = ""
  
  // debugger
  if (selectedPlaceId === props.data.favoritePlaceId) {
    // debugger
    message = (
      <div>
        What a beauty!
      </div>
    )
  }

  return (
    <div id="wishlist-div">
      <div className="grid-container">
        <div className="small-12 text-center">
          <h3>Wanderlust Wishlist</h3>
          {placesList}

          {message}
        </div>
      </div>
    </div>
  )
}

export default App;
