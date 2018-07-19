import React from 'react';
import { Link } from 'react-router-dom';
import Accordion from '../../../Accordion/Accordion';

const Label = (props) => {
  return (
    <ul className="col-12 mr-0 my-1">
        {props.type === 'accordion' ?
        <li className="small pointer">
            <Accordion 
            accordionOpen={props.iconName}
            accordionClosed={props.contactLabel}>
                {props.children}
            </Accordion>
        </li>
        :
        <li className="row py-2 link">
            <div className="col-2 text-center">
                <i className="material-icons">{props.iconName}</i>
            </div>
            <div className="col-10 small">
                <Link to={props.path}>{props.contactLabel}</Link>
            </div>
        </li>
        }
    </ul>
  );
};

export default Label;
