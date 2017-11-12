import React from "react"
import io from "socket.io-client"
import Cell from "../components/Cell.jsx"


const OpponentMapContainer = ({opponentGrid}) => {

  const cells = opponentGrid.map(function(cell, index) {
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

export default OpponentMapContainer
