import React, { Component } from 'react';
import './App.css';
import { Container, Fade, Row, Col } from 'reactstrap';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            videoURLS: ['http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4', 'http://techslides.com/demos/sample-videos/small.mp4'],
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

    handleScreens(){
        if(this.state.currentScreen === 0){
            this.setState({
                currentScreen: this.state.currentScreen + 1
            })
        }else{
            this.setState({
                currentScreen: this.state.currentScreen - 1
            })
        }
        this.toggle;
    }

  render() {
     let screens = this.state.videoURLS.map((url) => {
        return (
            <video className="vid" loop autoPlay >
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        )
     })
     console.table(this.state);
    return (
      <div className='temp' key={this.state.currentScreen}>
        <div className='inner-bg'>
        <Fade in={this.state.fadeIn} tag="div" timeout={300}>
            {screens[this.state.currentScreen]}
        </Fade>
      </div>
      <button onClick={ this.handleScreens }>Change</button>

     </div>

    );
  }
}

export default App;
