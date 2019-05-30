import React from 'react';
import "./NavDots-style.css";

class NavDots extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
    }
    this.handleFirstDot = this.handleFirstDot.bind(this);
    this.handleSecondDot = this.handleSecondDot.bind(this);
    this.handleThirdDot = this.handleThirdDot.bind(this);
    this.handleFourthDot = this.handleFourthDot.bind(this);
  }

  handleFirstDot () {
    const { currentDot, handleCurrentIndex } = this.props;
    if(currentDot === 0) {
      return
    } else if (currentDot === 1) {
      handleCurrentIndex(1)
    } else if(currentDot === 2) { 
      handleCurrentIndex(2)
    } else if(currentDot === 3) {
      handleCurrentIndex(3)
    }
  }

  handleSecondDot () {
    const { currentDot, handleCurrentIndex } = this.props;
    if(currentDot === 0) {
      handleCurrentIndex(-1)
    } else if (currentDot === 1) {
      return
    } else if(currentDot === 2) { 
      handleCurrentIndex(1)
    } else if(currentDot === 3) {
      handleCurrentIndex(2)
    }
  }

  handleThirdDot () {
    const { currentDot, handleCurrentIndex, gallery } = this.props;
    if(currentDot === 0) {
      handleCurrentIndex(-2)
    } else if (currentDot === 1) {
      handleCurrentIndex(-1)
    } else if(currentDot === 2) { 
      return
    } else if(currentDot === 3) {
      handleCurrentIndex(1)
    }
  }

  handleFourthDot () {
    const { currentDot, handleCurrentIndex, gallery } = this.props;
    if(currentDot === 0) {
      var copy = gallery[2]
      var copy2 = gallery[3]
      gallery.push(copy);
      gallery.push(copy2)
      handleCurrentIndex(-3)
    } else if (currentDot === 1) {
      handleCurrentIndex(-2)
    } else if(currentDot === 2) { 
      handleCurrentIndex(-1)
    } else if(currentDot === 3) {
      return
    }
  }

  render () {
    const { currentDot } = this.props;
    return (
      <div className="navDotContainer">
        <div className={`activeDotContainer-${currentDot}`}>
          <div className="dotButton activeDot-0" onClick={this.handleFirstDot}></div>
          <div className="dotButton activeDot-1" onClick={this.handleSecondDot}></div>
          <div className="dotButton activeDot-2" onClick={this.handleThirdDot}></div>
          <div className="dotButton activeDot-3" onClick={this.handleFourthDot}></div>
        </div>
      </div>
    )
  }
}

export default NavDots;