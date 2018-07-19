import React from 'react'
import './SearchComponent.css';

const SearchComponent =  (props) => {
  return (
    <div className="form-group_container d-none d-sm-block">
      <input type="emailName" className="form-control" />
        <i className="material-icons">search</i>
    </div>
  );
};

export default SearchComponent;
