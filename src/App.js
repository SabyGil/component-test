import React, { Component } from 'react';
import './App.css';
// import { Container, Fade, Row, Col } from 'reactstrap';
import { Fade } from 'reactstrap';
import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';
import ScreenThree from './ScreenThree';
import ScreenFour from './ScreenFour';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      // videoURLS: ['https://pixabay.com/en/videos/download/video-4741_medium.mp4', 'https://pixabay.com/en/videos/download/video-7269_medium.mp4', 'https://pixabay.com/en/videos/download/video-4741_medium.mp4', 'https://pixabay.com/en/videos/download/video-6395_medium.mp4'],
      currentScreen: 'home',
      fadeIn: true
    }
    this.toggle = this.toggle.bind(this);
    this.handleScreens = this.handleScreens.bind(this);
    this.renderComponent = this.renderComponent.bind(this);
  }

  toggle() {
      this.setState({
          fadeIn: !this.state.fadeIn
      });
  }

  handleScreens(x){
      // this.toggle();
      this.setState({
          currentScreen: x
      })
  }

  renderComponent(){
    if(this.state.currentScreen === 'home'){
      return (
        <Fade in={this.state.fadeIn} tag="fade-div" timeout={150} addEndListener={this.toggle}>
          <ScreenOne />
        </Fade>
      );
    }
    if(this.state.currentScreen === 'client'){
      return (
        <Fade in={this.state.fadeIn} tag="fade-div" timeout={150} addEndListener={this.toggle}>
          <ScreenTwo />
        </Fade>
      );
    }
    if(this.state.currentScreen === 'consult'){
      return (
        <Fade in={this.state.fadeIn} tag="fade-div" timeout={150} addEndListener={this.toggle}>
          <ScreenThree />
        </Fade>
      );
    }
    if(this.state.currentScreen === 'inhouse'){
      return (
        <Fade in={this.state.fadeIn} tag="fade-div" timeout={150} addEndListener={this.toggle}>
          <ScreenFour />
        </Fade>
      );
    }
  }
  render() {
    // console.log(this.state)
    // console.table(this.state);
    return (
      <div>
        <div className="menu">
            <button name='0' onClick={ () => this.handleScreens('home') }>718 Digital</button>
            <button name='1' onClick={ () => this.handleScreens('client') }>Client Work</button>
            <button name='2' onClick={ () => this.handleScreens('consult') }>Consulting</button>
            <button name='3' onClick={ () => this.handleScreens('inhouse') }>In House</button>
        </div>
        <div className='for-media'>
          <Fade in={this.state.fadeIn} tag="fade-div" timeout={1000} addEndListener={this.toggle}>
            {this.renderComponent()}
          </Fade>
        </div>
     </div>
    );
  }
}

export default App;
