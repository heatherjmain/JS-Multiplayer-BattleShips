import React from "react"
import io from "socket.io-client"
import Cell from "../components/Cell.jsx"

const MapContainer = ({grid}) => {

  const cells = grid.map(function(cell, index) {
    return (
      <Cell key={index} index={index} />
    )
  })

  return (
    <div id="grid">
      {cells}
    </div>
  )

}




export default MapContainer
