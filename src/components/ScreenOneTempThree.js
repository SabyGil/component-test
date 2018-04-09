import React from 'react';
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import ScreenOne from './ScreenOneFinal';
import ScreenTwo from './ScreenTwo';
import ScreenThree from './ScreenThree';
import ScreenFour from './ScreenFour';


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
        {/* <nav className="navbar navbar-default navbar-fixed-top"> */}
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav nav-styles">
                <li><Link containerId="scroll-container" activeClass="active" className="test1" to="test1" spy={true} duration={900} smooth={true}>LOGO</Link></li>
                <li><Link containerId="scroll-container" activeClass="active" className="test2" to="test2" spy={true} duration={900} smooth={true}>Contact</Link></li>
                <li><Link containerId="scroll-container" activeClass="active" className="test3" to="test3" spy={true} duration={900} smooth={true}>Services</Link></li>
                <li><Link containerId="scroll-container" activeClass="active" className="test4" to="test4" spy={true} duration={900} smooth={true}>Client Work</Link></li>
              </ul>
            </div>
          </div>
        {/* </nav> */}

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
        <div id="scroll-container" className=''>
          { this.renderContent() }
        </div>
      </div>
    );
  }
}

export default App;
