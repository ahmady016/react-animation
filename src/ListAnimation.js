import React, { Component } from 'react';
import List from './List';

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

const _items = [
  { id: 1, text: "Javascript" },
  { id: 2, text: "Programming" },
  { id: 3, text: "React" },
  { id: 4, text: "PopMotion" },
  { id: 5, text: "Animations" }
]

class ListAnimation extends Component {
  state = {
    list: 'exit',
    items: [..._items]
  };
  componentDidMount() {
    this.timer = setInterval(
      () =>
        this.setState({
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
    const { list, items } = this.state;
    return (
      <>
        <List
          items={_items}
          pose={list}
          listConfig={listConfig}
          itemConfig={itemConfig}
          listClasses="list"
          itemClasses="list-item"
        />
        <List
          items={items}
          itemConfig={itemConfig}
          listClasses="list"
          itemClasses="list-item"
        />
      </>
    );
  }
}

export default ListAnimation;