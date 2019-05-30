import React from 'react';
import '../css/BottomBar.css';

const BottomBar = (props) => {
  return (
    <div className="bottombar-outer">
      <div className="bottombar-info">
        <img className="bottombar-image" src="https://alumni.unca.edu/sites/default/files/doggo.gif"></img>
        <div className="bottombar-name">{props.doggo.name}</div>
        <div className="bottombar-extra"> {props.doggo.breed} | Adult | {props.doggo.sex}</div>
      </div>
      <div className="bottombar-ask">Ask About {props.doggo.name}</div>
      <div className="bottombar-share"></div>
    </div>
  )
}

export default BottomBar;