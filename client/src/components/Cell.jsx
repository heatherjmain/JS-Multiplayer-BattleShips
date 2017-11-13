import React from "react"

class Cell extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      status: null
    }

    this.handleCellClick = this.handleCellClick.bind(this)
  }

  handleCellClick(index) {
    this.setState({
      status: "hasShip"
    })
    console.log(this.props.index + " has been clicked and status is " + this.state.status)
  }

  render() {
    return (
      <div className="grid-cell" onClick={this.handleCellClick}></div>
    )
  }
}

export default Cell
