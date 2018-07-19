import React from 'react';
import Label from '../Label/Label';

const ListLabel = (props) => {
  return (
    <div>
      {props.Listmap.map((item) => {
          return (
            <div key={item.contactLabel.charAt(0)}>
                <Label {...item}>{props.children}</Label>
            </div>
          );
      })}
    </div>
  );
};

export default ListLabel;
