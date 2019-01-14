import React, { Component } from 'react';
import Box from './Box';
import './app.css';

class App extends Component {
  state = {
    pos: 'top'
  }
  componentDidMount() {
    this.timer = setInterval( () => this.setState({ pos: (Math.random() <= 0.5 ? 'top' : 'bottom' )}), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <Box size={50} pose={this.state.pos} />
    );
  }
}

export default App;
