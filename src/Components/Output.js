import React, { Component } from 'react';

import './Output.css';

class Output extends Component {

  constructor(props) {
    super(props)
    this.state = {
      magnify: false,
      name: ''
    }
  }

  handleMagnify() {
    this.setState({ magnify: !this.state.magnify })
  }

  handleName(event) {
    this.setState({name: event.target.value});
    console.log(event.target)
  }

  render() {
    return (
      <div className="output-container">
        <div className={`row ${this.state.magnify ? 'magnify' : 'regular'}`}>
          <div className="form-label">Name: </div>
          <div>{this.state.name}</div>
        </div>
        <input type="text" value={this.state.name} name="name" onChange={ (e) => this.handleName(e) }/>
        <button onClick={ () => this.handleMagnify() }>
          Magnify
        </button>
      </div>
    );
  }
}

export default Output