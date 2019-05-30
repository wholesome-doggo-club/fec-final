import React from "react";
import Popup from "reactjs-popup";
import "./nav-resources-style.css";

class NavResources extends React.Component {
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
        <span className="nav-btn-container-resources">
          <Popup
            trigger={<button className="nav-resources-button"><a href="">ABOUT PET ADOPTION</a></button>}
            position="bottom center"
            on="hover"
            closeOnDocumentClick
            mouseEnterDelay={0}
            contentStyle={{ padding: '0px', border: 'none' }}
            arrow={false} >
            <div className="nav-resources-dropdown-container animateNav navSlideInDown">
              <a href="">Dog Adoption</a><p></p>
              <a href="">Cat Adoption</a><p></p>
              <a href="">Other Pet Adoption</a><p></p>
              <a href="">Happy Tails Pet Adoption Stories</a><p></p>
              <a href="">Pet Adoption Information</a><p></p>
              <a href="">Exotic Pets</a>
            </div>
          </Popup>
        </span>
        <span className="nav-btn-container-resources">
          <Popup
            trigger={<button className="nav-resources-button"><a href="">DOG CARE</a></button>}
            position="bottom center"
            on="hover"
            closeOnDocumentClick
            mouseEnterDelay={0}
            contentStyle={{ padding: '0px', border: 'none' }}
            arrow={false} >
            <div className="nav-resources-dropdown-container animateNav navSlideInDown">
              <a href="">Dog Adoption</a><p></p>
              <a href="">Dog Breeds</a><p></p>
              <a href="">Bringing A Dog Home</a><p></p>
              <a href="">Dog Nutrition</a><p></p>
              <a href="">Dog Training</a><p></p>
              <a href="">Dog Problems</a><p></p>
              <a href="">Dog Grooming</a><p></p>
              <a href="">Pet Care Videos</a>
            </div>   
          </Popup>
        </span>
        <span className="nav-btn-container-resources">
          <Popup
            trigger={<button className="nav-resources-button"><a href="">CAT CARE</a></button>}
            position="bottom center"
            on="hover"
            closeOnDocumentClick
            mouseEnterDelay={0}
            contentStyle={{ padding: '0px', border: 'none' }}
            arrow={false} >
            <div className="nav-resources-dropdown-container animateNav navSlideInDown">
              <a href="">Cat Adoption</a><p></p>
              <a href="">Cat Breeds</a><p></p>
              <a href="">Bringing A Cat Home</a><p></p>
              <a href="">Cat Nutrition</a><p></p>
              <a href="">Cat Behavior & Training</a><p></p>
              <a href="">Cat Problems</a><p></p>
              <a href="">Cat Grooming</a><p></p>
              <a href="">Pet Care Videos</a>
            </div>   
          </Popup>
        </span>
        <span className="nav-btn-container-resources">
          <Popup
            trigger={<button className="nav-resources-button"><a href="">ALL PET CARE</a></button>}
            position="bottom center"
            on="hover"
            closeOnDocumentClick
            mouseEnterDelay={0}
            contentStyle={{ padding: '0px', border: 'none' }}
            arrow={false} >
            <div className="nav-resources-dropdown-container animateNav navSlideInDown">
              <a href="">Pet Care Videos</a><p></p>
              <a href="">Dogs</a><p></p>
              <a href="">Cats</a><p></p>
              <a href="">Rabbits</a><p></p>
              <a href="">Horses</a><p></p>
              <a href="">Birds</a><p></p>
              <a href="">Small And Furry Pets</a>
            </div>   
          </Popup>
        </span>
        <span className="nav-btn-container-resources">
          <Popup
            trigger={<button className="nav-resources-button"><a href="">SHELTERS & RESCUES</a></button>}
            position="bottom center"
            on="hover"
            closeOnDocumentClick
            mouseEnterDelay={0}
            contentStyle={{ padding: '0px', border: 'none' }}
            arrow={false} >
            <div className="nav-resources-dropdown-container animateNav navSlideInDown">
              <a href="">Find an Animal Shelter or Rescue Group</a><p></p>
              <a href="">Starting A Pet-Adoption Organization</a><p></p>
              <a href="">Volunteering With Dogs</a><p></p>
              <a href="">Volunteering With Cats</a><p></p>
              <a href="">Volunteering With Shelters & Rescues</a><p></p>
              <a href="">Fostering Dogs</a><p></p>
              <a href="">Fostering Cats</a>
            </div>   
          </Popup>
        </span>
        <span className="nav-btn-container-resources">
          <Popup
            trigger={<button className="nav-resources-button"><a href="">HELPING PETS</a></button>}
            position="bottom center"
            on="hover"
            closeOnDocumentClick
            mouseEnterDelay={0}
            contentStyle={{ padding: '0px', border: 'none' }}
            arrow={false} >
            <div className="nav-resources-dropdown-container animateNav navSlideInDown">
              <a href="">Get Involved</a><p></p>
              <a href="">Read Our Blog</a><p></p>
              <a href="">Put Petfinder on Your Site</a><p></p>
              <a href="">Petfinder Foundation</a>
            </div>   
          </Popup>
        </span>
        <span className="nav-btn-container-resources">
          <button className="nav-resources-button">
          <a href="">VIDEOS</a>
          </button>
        </span>

      </div>
      
    )
  }
}

export default NavResources