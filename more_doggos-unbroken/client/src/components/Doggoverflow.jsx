import React from 'react';
import '../css/Doggoverflow.css';

class DoggoOverflow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false
    }
    this.handleHover = this.handleHover.bind(this);
  }
  
  handleHover() {
    if(this.state.hovering) {
      this.setState({hovering: false});
    } else {
      this.setState({hovering: true})
    }
  }

  render() {
    return (
      <div className="doggo-overflow-outer" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
      <div className="doggo-overflow-top" >
        <img src="https://s3-us-west-1.amazonaws.com/petfinder-doggos/files/paw.png" className="doggo-overflow-paw"></img>
        <div className="doggo-overflow-top-text">30 more doggos available</div>
      </div>
      <div className="doggo-overflow-bot">
        <br/>
          <div className="doggo-overflow-bot-text">MEET THEM</div>
          {this.state.hovering && <div className="doggo-overflow-overlay"></div>}
      </div>
    </div>
    )
  }
}

export default DoggoOverflow;