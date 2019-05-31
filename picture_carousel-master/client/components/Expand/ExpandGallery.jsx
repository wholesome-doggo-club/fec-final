import React from 'react';
import ExpandSingle from './ExpandSingle.jsx';
import "./Expand-style.css";


class ExpandGallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gallery: this.props.gallery,
      currentIndex: this.props.currentIndex
    }
  }


  render () {
    const { handlePrevPicture, handleNextPicture, handleReturnMain, imageSrc, gallery, currentIndex} = this.props;
    const size = 1295;
    return (
      <div className="expandMain">
        <div className="expandContainer">
          <div className="expandSlider"
               style={{'transform': 'translateX(' + (-size * currentIndex) + 'px)'}}
              >
            {gallery.map((item, index) => <ExpandSingle item={item} key={index}/>)}
          </div>
        </div>
        <button id="btnArrowLeftExpand" className="flickity-button flickity-prev-next-button next" type="button"  onClick={handlePrevPicture}></button>
        <button id="btnArrowRightExpand" className="flickity-button flickity-prev-next-button next" type="button"  onClick={handleNextPicture}></button>
        <button id="btnReturn" className="flickity-button flickity-prev-next-button next" type="button" onClick={handleReturnMain}><label className="photo-modal__close" for="expandPhotoModal"></label></button>
      </div>
    )
    
  }

}



export default ExpandGallery;

