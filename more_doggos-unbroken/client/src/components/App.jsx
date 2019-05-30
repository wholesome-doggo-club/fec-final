import React from 'react';
import BottomBar from './BottomBar.jsx';
import DoggoRow from './DoggoRowStatic.jsx';
import DoggoAdvice from './DoggoAdvice.jsx';
import AskAbout from './AskAbout.jsx';
import DoggoInfo from './DoggoInfo.jsx';
// import DogCard from './DogLink.jsx';
// import Doggoverflow from './Doggoverflow.jsx';
import $ from 'jquery';

import '../css/Main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0,
      doggos: [],
      doggos2: {}
    }
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions() {
    this.setState({ width: $(window).width(), height: $(window).height() });
  }

  componentDidMount() {
    $.get('/api/doggos/doggo1', (doggos) => {
      this.setState({ doggos: doggos });
    })
    
    $.get('./api/doggos/doggo2', (doggo) => {
      this.setState({doggos2: doggo})
    })
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render(props) {
    return (
      <span className="fullpage">
      <div className="doggoinfo-main">
        <DoggoInfo doggo={this.state.doggos2}/>
      </div>
      <div className="askabout-main">
        <AskAbout doggo={this.state.doggos2}/>
      </div>
      <div className="doggoadvice-main">
        <div className="doggoadvice-container">
          <DoggoAdvice src="https://cdn.images.express.co.uk/img/dynamic/130/590x/17f29pets3-489698.jpg" num={0}/>
          <DoggoAdvice src="https://cdn2-www.dogtime.com/assets/uploads/2016/04/kid-friendly-dog-breeds-1.jpg" num={1}/>
        </div>
      </div>
      <div className="doggorow-main">
        <div className="title-thing-TEMP">More Doggos from the Wholesome Doggo Club</div>
        <div className="dogcard-container">
          <DoggoRow height={this.state.height} width={this.state.width} doggos={this.state.doggos.slice(0, Math.floor((this.state.width) / 298))} />
          <div className="filler"></div>
        </div>
        <div className="title-thing-TEMP">Dogs available for adoption near you</div>
        <div className="dogcard-container">
          <DoggoRow height={this.state.height} width={this.state.width} doggos={this.state.doggos.slice(Math.floor((this.state.width) / 298), 2 * Math.floor((this.state.width) / 298))} />
          <div className="filler"></div>
        </div>
      </div>
      <BottomBar doggo={this.state.doggos2}/>
      </span>
    )
  }
}

export default App;

