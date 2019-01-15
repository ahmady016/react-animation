import React, { Component } from 'react'
import posed, { PoseGroup } from 'react-pose'

class List extends Component {
  constructor(props) {
    super(props);
    const { itemConfig, listConfig, itemClasses, items } = props;
    if(listConfig)
      this.list = posed.ul(listConfig);
    this.item = posed.li(itemConfig);
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