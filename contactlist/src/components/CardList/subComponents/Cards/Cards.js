import React, { Component } from 'react'
import Card from '../Card/Card';
import './Cards.css';

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
    return (
      <div className="contacts_cards">
            {props.items.map((item) => {
              return (
                  <div key={item.FirstName}>
                    <Card {...item}
                        deleteComponent={() => this.deleteComponent(item.FirstName)} />
                  </div>
                );
            })}
            <div className="fab_Icon">
                <div className="fab">
                    <i className="material-icons add" role="button" onClick={props.addContact}>add</i>
                    <div className="tooltipText small">Add new Contact</div>
                </div>
            </div>
      </div>
    )
  }
}

export default Cards;
