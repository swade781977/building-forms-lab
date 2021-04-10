// Add BandInput component
import React, { Component } from 'react'


class BandInput extends Component {
  constructor (){
    super()
    this.state = {
      name: '',
    }
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)
    this.props.addBand(this.state)
    this.setState({
      name: '',
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>New Band</label>
          <br />
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.name} />
          <br />
          <br />
          <input type="submit" />
        </form>
      </div>
    )
  }
}



export default BandInput;
