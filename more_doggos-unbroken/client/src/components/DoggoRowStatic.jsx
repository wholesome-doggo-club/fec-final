import React from 'react';
import DoggoCard from './DogLink.jsx';
import Doggoverflow from './Doggoverflow.jsx';

const DoggoRow = (props) => {
  return (
    <div className="doggorow-outer">
        {props.doggos.map((doggo) => {
          return <DoggoCard doggo={doggo} />
        })}
        <Doggoverflow />
    </div>
  )
}

export default DoggoRow;