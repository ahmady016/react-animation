import React, { Component } from 'react'
import posed, { PoseGroup } from 'react-pose'
import styled from 'styled-components'

class List extends Component {
  constructor(props) {
    super(props);
    const { itemConfig, listConfig, itemClasses, items } = props;
    // if there is listConfig then build it (posed ul component)
    if(listConfig)
      this.list = posed.ul(listConfig);
    // build the list-item posed component
    this.item = posed.li(itemConfig);
    // add random color to the list-item
    this.item = styled(this.item)`
      background-color: rgb(${Number.between(0,255)},${Number.between(0,255)},${Number.between(0,255)})
    `;
    // map over list-items to render each one using posed li component
    this.items = () => items.map(({ id, text }) => <this.item key={id} className={itemClasses}>{text}</this.item>)
  }
  render() {
    const { listClasses, pose } = this.props;
    return (
      (this.list)
      ? <this.list className={listClasses} pose={pose} >
          {this.items()}
        </this.list>
      : <ul className={listClasses}>
          <PoseGroup>{this.items()}</PoseGroup>
        </ul>
    );
  }
}

export default List;