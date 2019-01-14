import React, { Component } from 'react';
import Box from './Box';
import './app.css';

const topBottom = {
  top: {
    y: 20,
    scale: 1,
    backgroundColor: "#428cb2"
  },
  bottom: {
    y: 360,
    scale: 2,
    backgroundColor: "#396e94"
  }
}

const pulse = {
  off: {
    opacity: 0.5,
    scale: 1
  },
  on: {
    opacity: 1,
    scale: 2,
    transition: {
      type: "spring",
      stiffness: 500,
      delay: 200
    }
  }
};

class App extends Component {
  state = {
    pos: 'top',
    pulse: 'off'
  }
  componentDidMount() {
    this.timer = setInterval(() => this.setState({
          pos:    Math.random() <= 0.5 ? "top" : "bottom",
          pulse:  Math.random() <= 0.5 ? "off" : "on"
        }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <>
        <Box size={50}  offset="50%"          pose={this.state.pos}   config={topBottom} />
        <Box size={100} offset="25%" top={50} pose={this.state.pulse} config={pulse} />
      </>
    );
  }
}

export default App;
