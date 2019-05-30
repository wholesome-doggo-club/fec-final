import React from 'react';
import axios from 'axios';
import "./App-style.css";
// import sampleData from '../../sampleData.js';
import Photo from './Photo.jsx';
import ExpandGallery from '../Expand/ExpandGallery.jsx'
import NavDots from '../NavDots/NavDots.jsx';
import $ from 'jquery'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gallery: [0],
      currentIndex: 0, 
      view: 'main',
      currentDot: 0,
      copyCounter: 2
    }
    this.handleNextPicture = this.handleNextPicture.bind(this);
    this.handlePrevPicture = this.handlePrevPicture.bind(this);
    this.handleExpandPhoto = this.handleExpandPhoto.bind(this);
    this.handleReturnMain = this.handleReturnMain.bind(this);
    this.handleCurrentIndex = this.handleCurrentIndex.bind(this);
    this.handleFetchData = this.handleFetchData.bind(this);
  }

  componentDidMount () {
    this.handleFetchData()

  }

  handleFetchData () {
    // axios.get('http://localhost:3000/api/')
    // .then(({data}) => {
    //   var lastEle = data.data[3]
    //   var firstEle = data.data[0]
    //   data.data.push(firstEle)
    //   data.data.splice(0,0,lastEle)
    //   this.setState({
    //   gallery: data.data})
    //   })

      $.get('/api/carouselPhotos/something', (data) => {
        var lastEle = data.data[3]
        var firstEle = data.data[0]
        data.data.push(firstEle)
        data.data.splice(0,0,lastEle)
        this.setState({
          gallery: data.data})
        })
    
  }
  

  handleNextPicture () {
    const { gallery, currentIndex, copyCounter } = this.state;
    let { currentDot } = this.state;
    if(copyCounter === 4) {
      this.setState({copyCounter: 0})
    }
    let copyIndex = gallery[copyCounter]
    gallery.push(copyIndex)
    
    this.setState( prev => ({
      gallery: gallery,
      currentIndex: prev.currentIndex + 1,
      currentDot: currentDot === 3 ? currentDot = 0 : prev.currentDot +1,
      copyCounter: prev.copyCounter + 1
    }))
  }

  handlePrevPicture () {
    
    const { gallery, currentIndex } = this.state;
    let { currentDot } = this.state;
    // var galleryCopy = gallery.slice()
    // var test2 = gallery[currentIndex + 2]
    // gallery.unshift(test2)

    if(currentIndex === 0) {
      return;
    } else {
      this.setState( prev => ({
        currentIndex: prev.currentIndex - 1,
        currentDot: currentDot === 0 ? currentDot = 3 : prev.currentDot -1
      }))
    }
  }

  handleCurrentIndex (index) {
    this.setState(prev => ({
      currentIndex: prev.currentIndex - index,
      currentDot: prev.currentDot - index,
      // copyCounter: prev.copyCounter - (index +  1)
    }))
  }

  handleExpandPhoto () {
    this.setState({
      view: 'photo'
    })
  }

  handleReturnMain () {
    this.setState({
      view: 'main'
    })
  }

  render () {
    const { currentIndex, gallery, view, currentDot } = this.state;
    const size = 400;
    
    if(view === 'main' && gallery.length > 0) {
      return (
        <div id="main">
          <div className="mainBtns" >
            <button id="prevBtn" onClick={this.handlePrevPicture}></button>
            <button id="expandBtn" onClick={this.handleExpandPhoto}></button>
            <button id="nextBtn" onClick={this.handleNextPicture}></button>
            <div className="arrowBtn">
              <button id="btnArrowLeft" className="flickity-button flickity-prev-next-button next" type="button"  onClick={this.handlePrevPicture}></button>
              <button id="btnArrowRight" className="flickity-button flickity-prev-next-button next" type="button"  onClick={this.handleNextPicture}></button>
            </div>
            <button id="btnExpand"  className="flickity-button flickity-prev-next-button next" onClick={this.handleExpandPhoto}></button>
          </div>
          <div className="photoContainer">
            <div 
              className={` active-${gallery[currentIndex].id}  photoSlider `}
              style={{'transform': 'translateX(' + (-size * currentIndex) + 'px)'}}
            >
              {gallery.map((item, index) => <Photo item={item} key={index}/>)}
            </div>
          </div>
          <NavDots currentDot={currentDot} handleCurrentIndex={this.handleCurrentIndex} gallery={gallery}/>
        </div>
      )
    } else if (view !== 'main' && gallery.length > 0){
      return (
          <div>
            <ExpandGallery imageSrc={gallery[currentIndex + 1].src} 
            gallery={gallery}
            currentIndex={currentIndex + 1}
            handleNextPicture={this.handleNextPicture}
            handlePrevPicture={this.handlePrevPicture}
            handleReturnMain={this.handleReturnMain}
            />
          </div>
      )
    } else {
      return <span></span>
    }

  }
}

export default App;

// style={{'transform': `translateX(-${currentIndex*(100/gallery.length)}%)`}}


// style={{'transform': 'translateX(' + (-size * currentIndex) + 'px)'}}