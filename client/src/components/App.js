import React from "react"

import PlacesList from "./PlacesList"

const App = (props) => {
  return (
    <div id="wishlist-div">
      <div className="grid-container">
        <div className="small-12 text-center">
          <h3>Wanderlust Wishlist</h3>
          <PlacesList data={props.data} />
        </div>
      </div>
    </div>
  )
}

export default App
