import React, { Component } from 'react';
import './App.css';
// import { Container, Fade, Row, Col } from 'reactstrap';
import { Fade, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
          videoURLS: ['https://fpdl.vimeocdn.com/vimeo-prod-skyfire-std-us/01/2010/9/235051444/835557002.mp4?token=1519997806-0x7537e413cacc026847fc9e6baa7f30a86e2d4975', 'https://pixabay.com/en/videos/download/video-7269_medium.mp4', 'https://fpdl.vimeocdn.com/vimeo-prod-skyfire-std-us/01/561/9/227807749/801681914.mp4?token=1519998033-0xfcf482320e2ec50482d5adbf2913c012a4b201d8'],
          currentScreen: 0,
          fadeIn: true
        }
        this.toggle = this.toggle.bind(this);
        this.handleScreens = this.handleScreens.bind(this);
    }

    toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }

    handleScreens(ev){
        ev.preventDefault();
        const name = ev.target.name;

        this.setState({
            currentScreen: parseInt([name], 10)
        })
        this.toggle;
    }

  render() {
     let screens = this.state.videoURLS.map((url) => {
        return (
            <video loop autoPlay >
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        )
     })
     console.table(this.state);
    return (
        <div>
          <div className="menu test-btn-container bounds bounds-wide">
              <button name='0' onClick={ this.handleScreens } style={{'borderTop': 'none'}}>Client Work</button>
              <button name='1' onClick={ this.handleScreens }>Consulting</button>
              <button name='2' onClick={ this.handleScreens }>In House</button>
          </div>
        <div className='temp vid' key={this.state.currentScreen}>
          <Fade in={this.state.fadeIn} tag="fade-div" timeout={300}>
              {screens[this.state.currentScreen]}
          </Fade>
          {/* <div className='test-btn-container bounds bounds-wide'>
            <h1>hello</h1>
            <button onClick={ this.handleScreens }>Change</button>
          </div> */}
       </div>
     </div>
    );
  }
}

export default App;
