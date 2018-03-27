import React from 'react';
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import ScreenTwo from './ScreenTwo';


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
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav nav-styles">
                <li><Link containerId="scroll-container" activeClass="active" className="test1" to="test1" spy={true} duration={500} >Test 1</Link></li>
                <li><Link containerId="scroll-container" activeClass="active" className="test2" to="test2" spy={true} duration={500}>Test 2</Link></li>
                {/* <li><Link containerId="scroll-container" activeClass="active" className="test3" to="test3" spy={true} duration={500} smooth={true}>Test 3</Link></li> */}
                <li><Link containerId="scroll-container" activeClass="active" className="test4" to="test4" spy={true} duration={500} smooth={true}>Test 4</Link></li>
                <li><Link containerId="scroll-container" activeClass="active" className="test5" to="test5" spy={true} duration={500} delay={1000}>Test 5 ( delay )</Link></li>
                {/* <li><Link containerId="scroll-container" activeClass="active" className="test6" to="anchor" spy={true} duration={500}>Test 6 (anchor)</Link></li> */}
                <li><Link containerId="scroll-container" activeClass="active" className="test7" to="test7" spy={true} duration={durationFn}>Test 7 (duration and container)</Link></li>

                <li><Link containerId="scroll-container" activeClass="active" className="test8" to="same" spy={true} smooth={true} duration={500}>Same target</Link></li>
                <li><Link containerId="scroll-container" activeClass="active" className="test9" to="same" spy={true} smooth={true} duration={500}>Same target</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        <Element name="test1" className="element" >
          test 1
        </Element>

        <Element name="test2" className="element">
          <ScreenTwo />
        </Element>

        <Element name="test3" className="element">
          test 3
        </Element>

        <Element name="test4" className="element">
          test 4
        </Element>

        <Element name="test5" className="element">
          test 5
        </Element>

        <div id="anchor" className="element">
          test 6 (anchor)
        </div>

        <Link activeClass="active" to="firstInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{display:'inline-block', margin: '20px'}}>
          Go to first element inside container
        </Link>

        <Link activeClass="active" to="secondInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{display:'inline-block', margin: '20px'}}>
          Go to second element inside container
        </Link>
        <Element name="test7" className="element" id="containerElement" style={{
          position: 'relative',
          height:'200px',
          overflow:'scroll',
          marginBottom: '100px'
        }}>
          test 7 (duration and container)

          <Element name="firstInsideContainer" style={{
            marginBottom: '200px'
          }}>
            first element inside container
          </Element>

          <Element name="secondInsideContainer" style={{
            marginBottom: '200px'
          }}>
            second element inside container
          </Element>
        </Element>


        <Element id="same" className="element">
          Two links point to this
        </Element>

        <a onClick={(event) => this.scrollToTop(event.target)}>To the top!</a>

      </div>
    );
  }

  render() {
    return (
      <div>
        {/* <div className="header">test header</div> */}
        <div id="scroll-container" className='navbar-default'>
          { this.renderContent() }
        </div>
      </div>
    );
  }
}

export default App;
