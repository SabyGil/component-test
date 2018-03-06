import React, { Component } from 'react';
import './App.css';
// import { Container, Fade, Row, Col } from 'reactstrap';
import { Fade } from 'reactstrap';
import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';

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
        this.toggle;
        this.setState({
            currentScreen: x
        })
        // this.tooggle;
    }

    renderComponent(){
    if(this.state.currentScreen === 'home'){
      return (
        <ScreenOne />
      );
    }
    if(this.state.currentScreen === 'client'){
      return (
        <ScreenTwo />
      );
    }
  }
  render() {
    console.log(this.state)
    // let display = [<ScreenOne/>,<ScreenTwo/>, <ScreenThree/>];
    // let display = [<ScreenOne/>, <ScreenTwo />, 4];
    // console.log(display[1]);
    // let newScreens = display.map((screen, index) => {
    //   return
    // })

     // let screens = this.state.videoURLS.map((url) => {
     //    return (
     //        <video loop autoPlay >
     //            <source src={url} type="video/mp4" />
     //            Your browser does not support the video tag.
     //        </video>
     //    )
     // })
     console.table(this.state);
    return (

        <div>
          <Fade in={this.state.fadeIn} tag="fade-div" timeout={150} addEndListener={this.toggle}>

          <div className="menu">
              <button name='0' onClick={()=> this.handleScreens('home') }>718 Digital</button>
              <button name='1' onClick={ ()=> this.handleScreens('client')} style={{'borderTop': 'none'}}>Client Work</button>
              <button name='2' onClick={ ()=> this.handleScreens('consult') }>Consulting</button>
              <button name='3' onClick={ ()=> this.handleScreens('inhouse') }>In House</button>
          </div>
        <div className='testOne' key={this.state.currentScreen}>
          {/* <Fade in={this.state.fadeIn} tag="fade-div" timeout={150} addEndListener={this.toggle}> */}
            {this.renderComponent()}
              {/* {screens[this.state.currentScreen]} */}
       </div>
     </Fade>

     </div>
    );
  }
}
//current = client work show this

export default App;
