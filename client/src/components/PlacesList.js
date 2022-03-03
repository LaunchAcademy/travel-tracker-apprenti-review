import React, { useState } from "react"

import Place from "./Place"

const PlacesList = (props) => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null)
  // debugger

  const placesList = props.data.places.map((place) => {
    const handleClick = () => {
      setSelectedPlaceId(place.id)
    }

    let selectedStatus = false
    if (place.id === selectedPlaceId) {
      selectedStatus = true
    }

    return (
      <Place
        key={place.id}
        name={place.name}
        handleClick={handleClick}
        selectedStatus={selectedStatus}
      />
    )
  })

  let secretMessage
  if (props.data.favoritePlaceId === selectedPlaceId) {
    secretMessage = <p>What a beauty!</p>
  }

  return (
    <div>
      <ul>{placesList}</ul>
      {secretMessage}
    </div>
  )
}

export default PlacesList
