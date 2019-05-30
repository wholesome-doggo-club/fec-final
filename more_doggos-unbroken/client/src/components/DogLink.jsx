import React from 'react';
import '../css/DogLink.css';

class DogCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shareHover: false,
      shareClick: false
    }
    this.handleShareHover = this.handleShareHover.bind(this);
    this.handleShareClick = this.handleShareClick.bind(this);
  }

  handleShareHover(e) {
    e.preventDefault();
    if (this.state.shareHover === false) {
      this.setState({ shareHover: true });
    } else {
      this.setState({ shareHover: false });
    }
  }

  handleShareClick(e) {
    e.preventDefault();
    if (this.state.shareClick === false) {
      this.setState({ shareClick: true, shareHover: true })
    } else {
      this.setState({ shareClick: false })
    }
  }


  render() {
    return (
      <div className="dogcard-outer">
        <div id="fill" className={this.state.shareClick ? 'start' : 'end'}></div>
        <div className="dogcard-under">
          <div className="dogcard-top">
            <img src={this.props.doggo.image} className="dogcard-image"></img>
            <div className="dogcard-filler"></div>
          </div>
          <div className="dogcard-name">{this.props.doggo.name}</div>
        </div>
        {!this.state.shareClick &&
          <div className="dogcard-hover">
            <div>
              <img src={this.props.doggo.image} className="dogcard-image-round"></img>
              {!this.state.shareHover &&
                <img src="https://s3-us-west-1.amazonaws.com/petfinder-doggos/files/shareDefault.jpg" className="dogcard-share" onMouseOver={this.handleShareHover}></img>}

              {this.state.shareHover &&
                <img src="https://s3-us-west-1.amazonaws.com/petfinder-doggos/files/shareHover.jpg" className="dogcard-share" onMouseLeave={this.handleShareHover} onClick={this.handleShareClick}></img>}
            </div>
            {!this.state.shareClick &&
              <div className="dogcard-info">
                <div className="dogcard-info-name">{this.props.doggo.name}</div>
                <div className="dogcard-info-extra">{this.props.doggo.breed}</div>
                <div>{this.props.doggo.age} | {this.props.doggo.gender}</div>
                <div>{this.props.doggo.location}</div>
              </div>
            }
          </div>
        }

        {this.state.shareClick &&
          <div className="dogcard-hover-share">
            <div>
              <img src={this.props.doggo.image} className="dogcard-image-round"></img>
              {!this.state.shareHover &&
                <img src="https://s3-us-west-1.amazonaws.com/petfinder-doggos/files/shareClose.png" className="dogcard-share" onMouseOver={this.handleShareHover}></img>}
              {this.state.shareHover &&
                <img src="https://s3-us-west-1.amazonaws.com/petfinder-doggos/files/shareCloseHover.png" className="dogcard-share" onClick={this.handleShareClick} onMouseLeave={this.handleShareHover}></img>}
            </div>
            <div className="dogcard-info2">
              <div className="dogcard-info-share">Share {this.props.doggo.name}</div>
              <div className="dogcard-share-button-container">
                <div className="dogcard-share-button" id="dogcard-share-facebook"><div className="overlay"></div></div>
                <div className="dogcard-share-button" id="dogcard-share-twitter"><div className="overlay"></div></div>
                <div className="dogcard-share-button" id="dogcard-share-pinterest"><div className="overlay"></div></div>
                <div className="dogcard-share-button" id="dogcard-share-email"><div className="overlay"></div></div>
                <div className="dogcard-share-button" id="dogcard-share-link"><div className="overlay"></div></div>
              </div>
            </div>
          </div>
        }

      </div>
    )
  }
}

export default DogCard;
