import React from "react";
import "./nav-breeds-style.css";

class NavBreeds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // navFormBar: 'none'
    };
    // this.handleNavFormBar = this.handleNavFormBar.bind(this);
  }
  
  render () {
    return (
      <div id="nav-form-bar-drop" className="animateNav navSlideInDown">
        <span className="nav-btn-container-breed no-border">
          <button className="nav-breed-button">
          <span className="filler">
            <a href=""><table align="center" className="nav-breed-table"><tbody><tr><td><img src="https://s3-us-west-1.amazonaws.com/petfinder-nav/pet-search-dog.png" height="30px"></img> </td><td>  DOG BREEDS</td></tr></tbody></table></a>
          </span>
          </button>
        </span>
        <span className="nav-btn-container-breed">
          <button className="nav-breed-button">
          <span className="filler">
            <a href=""><table align="center" className="nav-breed-table"><tbody><tr><td><img src="https://s3-us-west-1.amazonaws.com/petfinder-nav/pet-search-cat.png" height="30px"></img> </td><td>  CAT BREEDS</td></tr></tbody></table></a>
          </span>
          </button>
        </span>
      </div>
    )
  }
}

export default NavBreeds