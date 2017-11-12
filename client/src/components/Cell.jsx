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
    return console.log(this.props.index + " has been clicked!")
  }

  render() {
    return (
      <div className="grid-cell" onClick={this.handleCellClick}>{this.props.status}</div>
    )
  }
}

export default Cell
