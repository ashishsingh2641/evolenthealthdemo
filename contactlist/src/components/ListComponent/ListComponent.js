import React from 'react';
import './ListComponent.css';
    
   const ListComponent = () => {
      return (
        <div>
           <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Graham
              <span className="badge badge-danger badge-pill">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Nicholas
              <span className="badge badge-primary badge-pill ">2</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Delphine
              <span className="badge badge-success badge-pill">1</span>
            </li>
          </ul>
        </div>
    );
};

export default ListComponent;
    