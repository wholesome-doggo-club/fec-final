import React from "react";
import Popup from "reactjs-popup";
import axios from "axios";
import "./nav-find-style.css";


class NavFind extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationSearch: "",
      showResults: []
    };
    this.handleSearchInvoke = this.handleSearchInvoke.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleLocationClick = this.handleLocationClick.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id] : event.target.value }, () => {
      console.log('resetting data')
      this.setState({ showResults : [] })
      if (this.state.locationSearch.length > 2) {
        if (Number(this.state.locationSearch)) {
          console.log(this.state.locationSearch, "this is a zip code")
        } else {
          console.log(this.state.locationSearch, "this is a city")
        }
        this.fetchResults()
      }
    })
  }

  handleLocationClick(location) {
    console.log('changing location to ', location)
    this.setState({locationSearch : location, showResults : []})
  }

  handleSearchInvoke(petType){
    if (this.state.locationSearch.trim().length === 0) {
      console.log('empty')
      this.setState({ showResults : [{ cityName : 'Select a location first', stateAbv : ''}] })
    }
    else {
      alert(`searching for ${petType} at: ${this.state.locationSearch}`)
    }
  }

  fetchResults() {
    axios.get('/api/nav/data', { params: { searchTerm : this.state.locationSearch } })
      .then(({data}) => this.setState({showResults : data }))
      .catch(err => console.log(err));
    // console.log('updating data')
    // let newArr = ['Los Angeles, CA', 'Los Feliz, CA']
    // this.setState({ showResults :  newArr})
  }
  
  render () {
    return (
      <div className="nav-form-bar-drop-find animateNav navSlideInDown">
          <span className="fake3">
            <div className="fake3">.</div>
          
          </span>



          <span className="nav-container-find-search">
            <div className="nav-btn-find-search-bar">

              

              <Popup
                trigger={<table><tbody><tr><td><input type="text" className="location-search" id="locationSearch" placeholder="Enter City, State, or Zip" autofocus="autofocus" onChange={this.handleChange} value={this.state.locationSearch}></input></td></tr></tbody></table>}
                position="bottom center"
                on="focus"
                contentStyle={{ padding: '0px', border: 'none' }}
                arrow={false} >
                {this.state.showResults.length > 0 ? <div className="nav-find-locationSearch-dropdown"><ul>
              {this.state.showResults.map( (location, index) => {
              return (
                <li key={index} onClick={() => this.handleLocationClick((location.cityName || location.zipNum) + ', ' + (location.stateAbv || location.zipStateAbv))}>{location.cityName || location.zipNum}, {location.stateAbv || location.zipStateAbv}</li>
              )
              } ) }
                </ul></div> : <div></div>}
              </Popup>

               
            </div>
          </span>




          <span className="nav-container-find-choices">
          
          
            <div className="nav-btn-container-find-choices">
              <button className="nav-find-search-type" onClick={() => this.handleSearchInvoke('dogs')}>
                
                <span className="filler">
                
                <table align="center" className="nav-find-search-type-table"><tbody><tr><td><img src="https://s3-us-west-1.amazonaws.com/petfinder-nav/pet-search-dog.png" height="50px"></img></td><td>Find a dog</td></tr></tbody></table>
                </span>
                
                
                
              </button>
            </div>
            <div className="nav-btn-container-find-choices">
              <button className="nav-find-search-type" onClick={() => this.handleSearchInvoke('cats')}>
                <span className="filler">
                <table align="center" className="nav-find-search-type-table"><tbody><tr><td><img src="https://s3-us-west-1.amazonaws.com/petfinder-nav/pet-search-cat.png" height="50px"></img></td><td>Find a cat</td></tr></tbody></table>
                </span>
                
                
              </button>
            </div>
            <div className="nav-btn-container-find-choices">
              <button className="nav-find-search-type">
                <span className="filler">
                <Popup
                  trigger={<table align="center" className="nav-find-search-type-table"><tbody><td valign="center">Find Other Pets</td><td> ▼</td></tbody></table>}
                  position="bottom center"
                  on="click"
                  closeOnDocumentClick
                  mouseEnterDelay={0}
                  contentStyle={{ padding: '0px', border: 'none' }}
                  arrow={false} >
                  <div className="nav-find-otherPets-dropdown">
                    <button className="nav-find-otherPets-dropdown-btn" onClick={() => this.handleSearchInvoke('rabbits')}><table align="left" className="nav-find-search-type-table"><tbody><tr><td><img src="https://s3-us-west-1.amazonaws.com/petfinder-nav/pet-search-rabbits.png" height="30px"></img></td><td>Rabbits</td></tr></tbody></table></button>
                    <button className="nav-find-otherPets-dropdown-btn" onClick={() => this.handleSearchInvoke('smallAndFurry')}><table align="left" className="nav-find-search-type-table"><tbody><tr><td><img src="https://s3-us-west-1.amazonaws.com/petfinder-nav/pet-search-smallAndFurry.png" height="30px"></img></td><td>Small & Furry</td></tr></tbody></table></button>
                    <button className="nav-find-otherPets-dropdown-btn" onClick={() => this.handleSearchInvoke('scalesFinsOthers')}><table align="left" className="nav-find-search-type-table"><tbody><tr><td><img src="https://s3-us-west-1.amazonaws.com/petfinder-nav/pet-search-scalesFinsOther.png" height="30px"></img></td><td>Scales, Fins, & Other</td></tr></tbody></table></button>
                    <button className="nav-find-otherPets-dropdown-btn" onClick={() => this.handleSearchInvoke('birds')}><table align="left" className="nav-find-search-type-table"><tbody><tr><td><img src="https://s3-us-west-1.amazonaws.com/petfinder-nav/pet-search-birds.png" height="30px"></img></td><td>Birds</td></tr></tbody></table></button>
                    <button className="nav-find-otherPets-dropdown-btn" onClick={() => this.handleSearchInvoke('horses')}><table align="left" className="nav-find-search-type-table"><tbody><tr><td><img src="https://s3-us-west-1.amazonaws.com/petfinder-nav/pet-search-horses.png" height="30px"></img></td><td>Horses</td></tr></tbody></table></button>
                    <button className="nav-find-otherPets-dropdown-btn" onClick={() => this.handleSearchInvoke('barnyard')}><table align="left" className="nav-find-search-type-table"><tbody><tr><td><img src="https://s3-us-west-1.amazonaws.com/petfinder-nav/pet-search-barnyard.png" height="30px"></img></td><td>Barnyard</td></tr></tbody></table></button>
                  </div>
                </Popup>
                
                </span>
                
                
              </button>
            </div>

          </span>

          <span className="fake3">
          <div className="fake3">.</div>
            {/* <div className="fake3">
              <button className="nav-find-location-search">.</button>
            </div> */}
          </span>
          
        
      </div>
      
    )
  }
}

export default NavFind