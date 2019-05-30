import React from 'react';
import '../css/AskAbout.css';

class AskAbout extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      yes: 0 //yes: 2 no: 1
    }
    this.handleNo = this.handleNo.bind(this);
    this.handleYes = this.handleYes.bind(this);
  }

  handleYes() {
    this.setState({yes: 2})
  }

  handleNo() {
    this.setState({yes: 1})
  }

  render() {
    return (
      <div className="askabout-outer">
  
        <div className="askabout-top">
          <div className="askabout-top-upper">
            <div className="askabout-top-title">Ask About {this.props.doggo.name}</div>
            <div className="askabout-top-info"><br/> {this.props.doggo.breed} <br/> Adult  |  {this.props.doggo.sex}  |  {this.props.doggo.size}  |  Black</div>
            <img className="askabout-image" src="https://alumni.unca.edu/sites/default/files/doggo.gif"></img>
          </div>
          <div className="askabout-top-lower">
          <br/>
            <b>TO</b> <br/>
            Wholesome Doggo Club
          </div>
        </div>
  
        <div className="askabout-bottom">
          <div className="askabout-bottom-left">
          <br/>
          Have an account? Sign In <br/><br/>
            <b>OR INQUIRE AS GUEST</b> <br/>
            <div className="askabout-input-container">
              <div className="askabout-input"> First Name <br/>
                <input className="askabout-input-inside" type="text" name="fname"></input>
              </div>
            </div>
            <div className="askabout-input-container">
              <div className="askabout-input"> Last Name <br/>
                <input className="askabout-input-inside" type="text" name="fname"></input>
              </div>
            </div>
            <div className="askabout-input-container">
              <div className="askabout-input"> Email <br/>
                <input className="askabout-input-inside" type="text" name="fname"></input>
              </div>
            </div>
            <div className="askabout-input-container">
              <div className="askabout-input"> Phone Number (Optional) <br/>
                <input className="askabout-input-inside" type="text" name="fname"></input>
              </div>
            </div>
            <div className="askabout-input-container">
              <div className="askabout-input"> Country <br/>
                <input className="askabout-input-inside" type="text" name="fname"></input>
              </div>
            </div>
            <div className="askabout-input-container">
              <div className="askabout-input"> Zip Code <br/>
                <input className="askabout-input-inside" type="text" name="fname"></input>
              </div>
            </div>
            <div className="askabout-eula">
            By submitting this form, I agree to receive marketing and other communications from Petfinder. Read the Privacy Policy and About Our Ads.
            <br/><br/><br/>
            <input className="askabout-eula-checkbox" type="checkbox"></input>
            I’d like to receive email and other communications from Purina and its brands. Read the Privacy Policy and About Our Ads.
            </div>
          </div>
          <div className="askabout-bottom-right">
          <br/><br/><br/>
            YOUR MESSAGE (5000 CHARACTER LIMIT) <span className="askabout-smaller"><em>Additional Comments for Shelter or Rescue</em></span>
            <textarea className="askabout-textarea" placeholder="I'm wondering if..."></textarea>
            
            <div className="askabout-havepets">
            Do you have pets in your home? 
              <div className="askabout-yesorno">
                {this.state.yes !== 2 && <div className="askabout-yes" onClick={this.handleYes}>Yes</div>}
                {this.state.yes === 2 && <div className="askabout-yes-press" onClick={this.handleYes}>Yes</div>}
                {this.state.yes !== 1 && <div className="askabout-no" onClick={this.handleNo}>No</div>}
                {this.state.yes === 1 && <div className="askabout-no-press" onClick={this.handleNo}>No</div>}
              </div>
            </div>
            <div className="askabout-button">SEND MESSAGE</div>
          </div>
        </div>
  
      </div>
    )
  }
}
// const AskAbout = (props) => {

  
// }

export default AskAbout;