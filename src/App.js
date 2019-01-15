import React, { Component } from 'react';
import Box from './Box';
import List from './List';
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

const listConfig = {
  enter: {
    x: "0%",
    beforeChildren: true,
    staggerChildren: 200
  },
  exit: {
    x: "-500%",
    afterChildren: true,
    staggerChildren: 100
  }
};

const itemConfig = {
  enter: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: 100
  }
};

const items = [
  { id: 1, text: "Javascript" },
  { id: 2, text: "Programming" },
  { id: 3, text: "React" },
  { id: 4, text: "PopMotion" },
  { id: 5, text: "Animations" }
]

class App extends Component {
  state = {
    pos: "top",
    pulse: "off",
    items: [
      { id: 1, text: "Javascript" },
      { id: 2, text: "Programming" },
      { id: 3, text: "React" },
      { id: 4, text: "PopMotion" },
      { id: 5, text: "Animations" }
    ]
  };
  componentDidMount() {
    this.timer = setInterval(
      () =>
        this.setState({
          pos: Math.random() <= 0.5 ? "top" : "bottom",
          pulse: Math.random() <= 0.5 ? "off" : "on",
          list: Math.random() <= 0.5 ? "exit" : "enter",
          items: this.state.items.sort(() => Math.random() - 0.5),
        }),
      2000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <div className="container">
        <List
          items={items}
          pose={this.state.list}
          listConfig={listConfig}
          itemConfig={itemConfig}
          listClasses="list"
          itemClasses="list-item"
        />
        <div>
          <Box size={50} pose={this.state.pos} config={topBottom} />
          <Box
            size={100}
            top={50}
            backColor="#874228"
            pose={this.state.pulse}
            config={pulse}
          />
        </div>
        <List
          items={this.state.items}
          itemConfig={itemConfig}
          listClasses="list"
          itemClasses="list-item"
        />
      </div>
    );
  }
}

export default App;
