import React from 'react';
import './BlockContact.css';

const BlockContact = (props) => {
  return (
    <div className="row blockcontact">
        <div className="col-12">
            <i className="material-icons">lock</i>
            <div className="small">{props.data}</div>
        </div>
    </div>
  );
}

export default BlockContact;
