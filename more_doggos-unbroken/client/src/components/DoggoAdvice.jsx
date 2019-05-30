import React from 'react';
import '../css/DoggoAdvice.css';

const DoggoAdvice = (props) => {
  const advice = ["Purina Dog Food Selector", "Tips for the first thirty days of dog adoption"];
  const secondary = ["Finding the right food for your doggo can be hard", "Help your dog make a transition to a new home today"];
  return (
    <div className="doggoadvice-outer">
      <img className="doggoadvice-smallimage" src={props.src}></img>
      <div className="doggoadvice-top">
        <img className="doggoadvice-bigimage" src={props.src} ></img>
        <div className="doggoadvice-filler"></div>
        <div className="doggoadvice-info">
          <div className="doggoadvice-info-main">{advice[props.num]}</div>
          <div className="doggoadvice-info-secondary">{secondary[props.num]}</div>
        </div>
      </div>
      <div className="doggoadvice-bottom">
        READ MORE
      </div>
    </div>
  )
}

export default DoggoAdvice;