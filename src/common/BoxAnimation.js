import React, { Component } from 'react';
import Box from './Box';

const topBottom = {
  top: {
    y: 0,
    scale: 1,
    backgroundColor: "#428cb2"
  },
  bottom: {
    y: 200,
    scale: 2,
    backgroundColor: "#396e94"
  }
}

const onOff = {
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

class BoxAnimation extends Component {
  state = {
    pos: "top",
    pulse: "off"
  };
  componentDidMount() {
    this.timer = setInterval(
      () =>
        this.setState({
          pos: Math.random() <= 0.5 ? "top" : "bottom",
          pulse: Math.random() <= 0.5 ? "off" : "on"
        }),
      2000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const { pos, pulse } = this.state;
    return (
      <div className="boxes">
        <Box size={50} pose={pos} config={topBottom} />
        <Box size={100} pose={pulse} config={onOff}  backColor="#874228" />
      </div>
    );
  }
}

export default BoxAnimation;