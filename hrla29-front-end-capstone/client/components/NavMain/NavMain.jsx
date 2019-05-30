import React from "react";
import "./nav-main-style.css";


class NavMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articleSearch: "",
      search: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearchSwitch = this.handleSearchSwitch.bind(this);
    // this.handleNavFormBar = this.handleNavFormBar.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  // handleNavFormBar(btnName){
  //   this.setState({[btnName]: !this.state[btnName]})
  // }

  handleSearchSwitch(e) { // this function switches the rendering condition from regular nav bar to search nav bar
    e.preventDefault()
    this.setState({search: !this.state.search})
  }

  render() {
    if (this.state.search === false) {
      return (
        <div id="nav-top-bar-main">
          <span className="nav-top-container-logo">
            <div className="nav-top-container-btn-right">
              <button className="nav-top-button">
                <img src="https://s3-us-west-1.amazonaws.com/petfinder-nav/nav_logo.png" height="40px"></img>

              </button>
              
            </div>
          </span>
          <span className="nav-top-container-dir">
            <div className="nav-top-container-btn">
              <button className="nav-top-button" onClick={() => this.props.handleNavFormBar('findPet')}>
              
                <table className="nav-gray-purple" align="center"><tbody><tr><td>FIND A PET </td><td> ▼</td></tr></tbody></table>

              </button>
            </div>
          </span>
          <span className="nav-top-container-dir">
            <div className="nav-top-container-btn">
              <button className="nav-top-button" onClick={() => this.props.handleNavFormBar('breeds')}>
                
                <table className="nav-gray-purple" align="center"><tbody><tr><td>BREEDS </td><td> ▼</td></tr></tbody></table>
              </button>
            </div>
          </span>
          <span className="nav-top-container-dir">
            <div className="nav-top-container-btn">
              <button className="nav-top-button" onClick={() => this.props.handleNavFormBar('resources')}>
                <table align="center" className="nav-gray-purple"><tbody><tr><td>RESOURCES </td><td> ▼</td></tr></tbody></table>
              </button>
            </div>
          </span>
          <span className="nav-top-container-search">
            <div className="nav-top-container-btn-right">
              <button className="nav-top-button padded2" onClick={this.handleSearchSwitch}>
                <div className="nav-search-icon"></div>
              </button>
            </div>
          </span>

        </div>
          

          
          
      )
    } else if (this.state.search === true) {
      return (
        <div id="nav-top-bar-searching" className="animateNav">
          <span className="nav-top-container-logo">
            <div className="nav-top-container-btn-right">
              <button className="nav-top-button">
                <img src="https://s3-us-west-1.amazonaws.com/petfinder-nav/nav_logo2.png" height="40px"></img>
              </button>
            </div>
          </span>

          <span className="nav-top-container-searching">
            <div className="nav-top-container-btn padded left-border">
              <button className="nav-top-button-articles">
                Search Articles:
              </button>
            </div>
            <div className="nav-top-container-searching-bar">
              <input id="articleSearch" type="text" className="article-search" autoFocus onChange={this.handleChange}></input>
            </div>
          </span>

          <span className="nav-top-container-search">
            <div className="nav-top-container-btn dark left-border">
              <button className="nav-top-button padded2" onClick={() => alert("Searching: " + this.state.articleSearch)}>
                <div className="nav-searching-icon"></div>
              </button>
            </div>
            <div className="nav-top-container-btn-right left-border">
              <button className="nav-top-button padded2 white large navClose" onClick={this.handleSearchSwitch}>
              
              </button>
            </div>
          </span>
        
        </div>
      )
    } 
  }
}

export default NavMain;