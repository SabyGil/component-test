import React from 'react';
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';
import ScreenThree from './ScreenThree';
import ScreenFour from './ScreenFour';

import Menu from './Menu';

import '../App.css';

var durationFn = function(deltaTop) {
    return deltaTop;
};

class App extends React.Component{

  constructor (props){
      super(props);
      this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

    scrollSpy.update();

  }
  scrollToTop(options) {
    scroll.scrollToTop(options);
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  renderContent () {
    return (
      <div>
        <Element name="test1" className="element bg1" >
          <ScreenOne />
        </Element>

        <Element name="test2" className="element bg2">
          <ScreenTwo />
        </Element>

        <Element name="test3" className="element bg3">
          <ScreenThree />
        </Element>

        <Element name="test4" className="element bg4">
          <ScreenFour />
        </Element>

        <a onClick={(event) => this.scrollToTop(event.target)}>To the top!</a>

      </div>
    );
  }

  render() {
    return (
      <div>
        <Menu  />
        <div id="scroll-container" className='for-media'>
          { this.renderContent() }
        </div>
      </div>
    );
  }
}

export default App;
