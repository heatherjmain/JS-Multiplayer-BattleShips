import React from "react"
import io from "socket.io-client"
import MapContainer from "./MapContainer.jsx"
import OpponentMapContainer from "./OpponentMapContainer.jsx"
import Ships from "../components/Ships.jsx"

class GameContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      grid: Array(64).fill(null),
      opponentGrid: Array(64).fill(null)
    }

    this.socket = io("http://localhost:3001")
    // this.socket.on("game", this.addMove.bind(this))
  }



  render() {
    return (
      <div>
        <h1 id="game-title">BattleShips</h1>
        <div className="maps-and-ships">

          <div id="my-map-and-title">
            <h2 id="map-container-title">My Fleet</h2>
            <MapContainer className="my-map" grid={this.state.grid} />
          </div>

          <div className="ships">
            <Ships />
          </div>

          <div id="opponent-map-and-title">
            <h2 id="map-container-title">Enemy Fleet</h2>
            <OpponentMapContainer className="opponent-map" opponentGrid={this.state.opponentGrid} />
          </div>

        </div>
      </div>
    )
  }
}

export default GameContainer
