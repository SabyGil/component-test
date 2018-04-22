import React, { Component } from 'react';
import './App.css';
// import { Fade } from 'reactstrap';
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
    return (
      <div className='for-media' >
        <FullpageReact  />
     </div>
    );
  }
}

export default App;
