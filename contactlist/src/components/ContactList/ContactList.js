import React, { Component } from 'react';
import ListLabel from './SubComponents/ListLabel/ListLabel';
import './ContactList.css';

export default class ContactList extends Component {
    render() {
    return (
      <div className="row contactList" id={this.props.sideNav} style={{width: this.props.width}}>
        <div className="col-12 divider p-0">
            <ListLabel Listmap={this.props.Listmap}>{this.props.children}</ListLabel>
        </div>
      </div>
    )
  }
}
