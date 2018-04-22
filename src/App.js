import React, { Component } from 'react';
import './App.css';
import { Fade } from 'reactstrap';
// import * as Scroll from 'react-scroll';
// import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
// import Menu from './components/Menu';
import FullpageReact from './components/Fullpage';


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentScreen: 'home',
      fadeIn: false,
    }
    // this.toggle = this.toggle.bind(this);
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

  render() {
    // console.log(this.state)
    // console.table(this.state);
    return (
      <div id="scroll-container">
        {/* <Menu self={ this }/> */}
        <FullpageReact  />
        <div  className='for-media'></div>
     </div>
    );
  }
}

export default App;
