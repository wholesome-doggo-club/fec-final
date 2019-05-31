import React from "react";
import NavMain from "../NavMain/NavMain.jsx";
import NavBreeds from "../NavBreeds/NavBreeds.jsx";
import NavFind from "../NavFind/NavFind.jsx";
import NavResources from "../NavResources/NavResources.jsx";
import "./nav-style.css";
// import NavPopupRegister from "./NavPopupRegister.jsx";

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      navFormBar: 'none'
    };
    this.handleNavFormBar = this.handleNavFormBar.bind(this);
  }


  handleNavFormBar(formName) { // this function changes the condition to which drop down form it'll render to the navigation bar.
    if (this.state.navFormBar === formName){
      this.setState({navFormBar: 'none'})
    } else {
      this.setState({navFormBar: formName})
    }
  }

  render() {
    return (
      <div >
        <div id="nav-bar-frame">
            <NavMain handleNavFormBar={this.handleNavFormBar}/>
            <div id="nav-top-bar-register" className="left-border">
              {/* <span className="nav-top-container-register">
                <div className="nav-top-container-btn">
                    <NavPopupRegister />
                </div>
              </span> */}
              <span className="nav-top-container-register">
                <div className="nav-top-container-btn">
                  <button className="nav-top-button" for="modal-1">
                    <label for="nav-register-popup-modal"><table align="center" className="nav-gray-purple regularFont"><tbody><tr><td><div className="nav-register-icon"></div></td><td>Sign In / Register</td></tr></tbody></table></label>
                  </button>
                </div>
              </span>


            </div>


<input className="modal-state" id="nav-register-popup-modal" type="checkbox" />
<div className="modal">
  <label className="modal__bg" for="nav-register-popup-modal"></label>
  <div className="modal__inner">
    <label className="modal__close" for="nav-register-popup-modal"></label>
    <div id="nav-pop-up-main">
      <span className="nav-popup-left-container">
      <h1>Petfinder Makes Adopting Easier</h1>
      <ul>
        <li>Create and save your adopter profile.</li>
        <li>Save and manage your pet searches and email communications.</li>
        <li>Learn helpful pet care tips and receive expert advice.</li>
        <li>Get involved and help promote adoptable pets in your area.</li>
      </ul>



    </span>
      <span className="nav-popup-right-container">
        <h1>Log in to Petfinder</h1>
        <form className="nav-popup-container-form">
          <label for="Login_Modal_username" className="field-label">Email</label>
          <input id="Login_Modal_username" type="email" spellCheck="false" name="username" required></input>
        </form><p></p>
        <form className="nav-popup-container-form">
          <input id="Login_Modal_password" type="password" spellCheck="false" autoComplete="off"></input>
          <label for="Login_Modal_password" className="field-label">Password</label>
        </form><p></p>
        <button className="nav-popup-container-btn">LOG IN</button><p></p>
        
        <table className="line-partition"><tbody><tr><td><center><a href="">FORGOT PASSWORD?</a></center><p></p></td></tr></tbody></table><p></p>
        DON'T HAVE AN ACCOUNT?<p></p>
        <button className="nav-popup-container-btn">REGISTER NOW</button>

      
      </span>
    </div>
  </div>
</div>


        </div>
        {/* these are the drop down forms  */}
          {
          this.state.navFormBar === 'findPet' ? <NavFind /> :
          this.state.navFormBar === 'breeds' ? <NavBreeds /> :
          this.state.navFormBar === 'resources' ? <NavResources /> :
          <div id="blank"></div>}
          
      </div>
      
    );
  }
}
export default Nav;