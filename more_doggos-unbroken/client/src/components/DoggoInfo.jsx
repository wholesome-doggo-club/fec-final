import React from 'react';
import '../css/DoggoInfo.css';
const DoggoInfo = (props) => {
  return (
    <div className="doggoinfo-outer">
      <div className="doggoinfo-left">
        <div className="doggoinfo-left-title">{props.doggo.name}</div>
        <div className="doggoinfo-left-breed"> {props.doggo.breed}  |  {props.doggo.location}</div>
        <div className="doggoinfo-left-description"> Adult | {props.doggo.sex} | {props.doggo.size} | Black</div>
        <div className="doggoinfo-about">
          <div className="doggoinfo-about-title"> About </div>
          <div className="h4"> COAT LENGTH</div>
          <div className="h5"> {props.doggo.coatLength}</div>
          <div className="h4"> HOUSE-TRAINED</div>
          <div className="h5"> Yes. Look at the hat</div>
          <div className="h4"> HEALTH</div>
          <div className="h5"> {props.doggo.vaccinations}</div>
          <div className="h4"> GOOD IN HOME WITH</div>
          <div className="h5"> {props.doggo.goodInHomeWith}</div>
        </div>
        <div className="doggoinfo-meet">
          <div className="h1"> Meet {props.doggo.name}</div>
          <div className="doggoinfo-meet-info">
            {props.doggo.name} has been a super dank dog since before he was born. The hat seen in the picture was made for him my momma {props.doggo.name} and has stayed with him his whole life. {props.doggo.name} plans on taking this hat with him to the beyond realm. {props.doggo.name} is friendly towards anyone, but be careful around kids who are little b*tches. If they steal his hat, he will frick them up. Check out his insta @friggindoggonamed{props.doggo.name} he follows back. <br/>
            On his belly, {props.doggo.name} has a tattoo of aquarius to represent his love of the water and his perserverence through the doggo massacre of 2034. Throughout his life, he has been known as the number 1 doggo of all time. How he ended up at this random ass doggo adoption facility is still unknown. His swage levels can compare to that of the super cool pokemon Scizor. If you don't what that is you probably shouldn't adopt this dog. This is because {props.doggo.name}'s spirit animal is a scizor. They say in his past life, he was indeed a scizor. Friggin wild.
          </div>
        </div>
      </div>
      <div className="doggoinfo-right">
        <div className="doggoinfo-right-top">
            <div className="doggoinfo-right-top-ask" onClick={() => document.getElementById('askabout-outer').scrollIntoView()}> Ask About {props.doggo.name} </div>
            <div className="doggoinfo-right-top-sponsor"> Sponsor {props.doggo.name} </div>
          <div className="doggoinfo-right-top-shareprint">
            <div className="doggoinfo-right-top-share">Share</div> <div className="doggoinfo-right-top-print">Print</div>
          </div>
        </div>
        <div className="doggoinfo-right-bottom">
          <img className="doggoinfo-right-bottom-image" src="https://alumni.unca.edu/sites/default/files/doggo.gif"></img>
          <div className="doggoinfo-right-bottom-inner">
            <br/> <br/> <br/>
            <div className="h2">The Wholesome Doggo Club</div>
            <div className="h5">{props.doggo.location}</div>
            <br/> <br/> 
            <div className="doggoinfo-right-bottom-location">
              <img></img>
              <div className="h5">
                Location <br/>
                {props.doggo.location}
              </div>
            </div>
            
            <div className="doggoinfo-right-bottom-email">
              <img></img>
              <div className="h5">
                thewholesomedoggos@gmail.com
              </div>
            </div>

            <div className="doggoinfo-right-bottom-button">
              MORE ABOUT WHOLESOME DOGGOS
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoggoInfo;