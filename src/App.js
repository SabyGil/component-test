import React, { Component } from 'react';
import './App.css';
// import { Container, Fade, Row, Col } from 'reactstrap';
import { Fade } from 'reactstrap';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
          videoURLS: ['https://pixabay.com/en/videos/download/video-4741_medium.mp4', 'https://pixabay.com/en/videos/download/video-7269_medium.mp4', 'https://pixabay.com/en/videos/download/video-4741_medium.mp4', 'https://pixabay.com/en/videos/download/video-6395_medium.mp4'],
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
        this.toggle;
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
              <button name='0' onClick={ this.handleScreens }>718 Digital</button>
              <button name='1' onClick={ this.handleScreens } style={{'borderTop': 'none'}}>Client Work</button>
              <button name='2' onClick={ this.handleScreens }>Consulting</button>
              <button name='3' onClick={ this.handleScreens }>In House</button>
          </div>
        <div className='temp vid' key={this.state.currentScreen}>
          <Fade in={this.state.fadeIn} tag="fade-div" timeout={150} addEndListener={this.toggle}>
              {screens[this.state.currentScreen]}
          </Fade>
       </div>
     </div>
    );
  }
}

export default App;
