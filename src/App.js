import React, { Component } from 'react';
import './App.css';
import { Fade } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            videoURLS: ['https://pixabay.com/en/videos/download/video-4741_medium.mp4', 'https://pixabay.com/en/videos/download/video-7269_medium.mp4', 'https://pixabay.com/en/videos/download/video-6395_medium.mp4'],
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
            <video className="background-video" loop autoPlay muted>
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        )
     })
     console.table(this.state);
    return (
      <div className="App">
            <div className="Menu">
                <button name='0' onClick={ this.handleScreens } style={{'borderTop': 'none'}}>Client Work</button>
                <button name='1' onClick={ this.handleScreens }>Consulting</button>
                <button name='2' onClick={ this.handleScreens }>In House</button>
            </div>
            <div key={this.state.currentScreen}>
                <Fade in={this.state.fadeIn} tag="div" timeout={300}>
                    {screens[this.state.currentScreen]}
                </Fade>
            </div>


      </div>
    );
  }
}

export default App;
