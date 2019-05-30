import React from 'react';
import DoggoCard from './DogLink.jsx';
import Doggoverflow from './Doggoverflow.jsx';
import '../css/DoggoRow.css';

const DoggoRow = (props) => {
  return (
    <div className="doggorow-outer">
      <span className="TEMPORARY SHOW HEIGHT WIDTH PROPS">Window Height: {props.height} || Window Width: {props.width}</span>
      <div className="TEMPORARY SHOW CALCULATIONS">{Math.floor((.8 * props.width)/ 310)}</div>
        {props.doggos.map((doggo) => {
          return <DoggoCard doggo={doggo} />
        })}
    </div>
  )
}

export default DoggoRow;