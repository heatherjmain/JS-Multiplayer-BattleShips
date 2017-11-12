import React from "react"

class Ships extends React.Component {

  render() {
    return (
      <div className="ship-images">

        <div id="ship-name-text">
          <img id="battleship" src="./images/battleship" alt="Battleship" />
          <p>Battleship</p>
        </div>

        <div id="ship-name-text">
          <img id="aircraft-carrier" src="./images/aircraft_carrier" alt="Aircraft Carrier" />
          <p>Aircraft Carrier</p>
        </div>

        <div id="ship-name-text">
          <img id="destroyer" src="./images/destroyer" alt="Destroyer" />
          <p>Destroyer</p>
        </div>

        <div id="ship-name-text">
          <img id="submarine" src="./images/submarine" alt="Submarine" />
          <p>Submarine</p>
        </div>

        <div id="ship-name-text">
          <img id="small-ship" src="./images/small_ship" alt="Small ship" />
          <p>Small Ship</p>
        </div>

        <div id="ship-name-text">
          <img id="small-ship" src="./images/small_ship" alt="Small ship" />
          <p>Small Ship</p>
        </div>
      </div>
    )
  }
}

export default Ships
