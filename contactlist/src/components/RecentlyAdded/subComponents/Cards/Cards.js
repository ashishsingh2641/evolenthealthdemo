import React, { Component } from 'react'
import Card from '../Card/Card';

class Cards extends Component {
    constructor(props) {
    super(props);
    this.deleteComponent = this.deleteComponent.bind(this);
    }
    deleteComponent = (event) => {
        const el = document.getElementById(event);
        el.remove();
    }
    render() {
      const props = this.props;
      console.log(props.items);
    return (
      <div>
          {props.items.map((item) => {
              return (
                  <div key={item.FirstName}>
                    <Card {...item}
                        deleteComponent={() => this.deleteComponent(item.FirstName)} />
                  </div>
              );
          })}
      </div>
    )
  }
}

export default Cards;
