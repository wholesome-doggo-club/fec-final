import React from 'react';
import "./App-style.css";
// import styles from './style.css'

const Photo = props => {
  const { src , id} = props.item;

  if(src) {
    return (

        <img  id='smallSlider' src={src} className={`slide active-${id} smallSlider`}/>

    )
  }

    return (
      <div>Loading...</div>
    )
  }


export default Photo;