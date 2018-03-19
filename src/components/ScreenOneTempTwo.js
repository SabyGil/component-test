import React from 'react';
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class ScreenOne extends React.Component {
  componentDidMount = () => {

    Events.scrollEvent.register('begin', (to, element) => {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', (to, element) => {
      console.log("end", arguments);
    });

    scrollSpy.update();

  }
  componentWillUnmount = () =>  {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  }
  scrollToBottom = () => {
    scroll.scrollToBottom();
  }
  scrollTo = () => {
    scroll.scrollTo(100);
  }

  scrollMore = () => {
    scroll.scrollMore(100);
  }
  handleSetActive (to) {
    console.log(to);
  }
  render() {
  	return (
      <div>
        <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} onSetActive={(e) => this.handleSetActive(e)}>
          Test 1
        </Link>
        <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} delay={1000}>
          Test 2 (delay)
        </Link>
        <Link className="test6" to="anchor" spy={true} smooth={true} duration={500}>
          Test 6 (anchor)
        </Link>
        <button activeClass="active" className="btn" type="submit" value="Test 2" to="test2" spy={true} smooth={true} offset={50} duration={500} >
          Test 2
        </button>

        <Element name="test1" className="element">
          test 1
        </Element>

        <Element name="test2" className="element">
          test 2
        </Element>

        <div id="anchor" className="element">
          test 6 (anchor)
        </div>


        <Link to="firstInsideContainer" containerId="containerElement">
          Go to first element inside container
        </Link>

        <Link to="secondInsideContainer" containerId="containerElement">
          Go to second element inside container
        </Link>
        <div className="element" id="containerElement">
          <Element name="firstInsideContainer">
            first element inside container
          </Element>

          <Element name="secondInsideContainer">
            second element inside container
          </Element>
        </div>

<div className='test'>
        <a onClick={(e) => this.scrollToTop(e)}>To the top!</a>
        <br/>
        <a onClick={(e) => this.scrollToBottom(e)}>To the bottom!</a>
        <br/>
        <a onClick={(e) => this.scrollTo(e)}>Scroll to 100px from the top</a>
        <br/>
        <a onClick={(e) => this.scrollMore(e)}>Scroll 100px more from the current position!</a>
      </div>
      </div>
	);
  }
}

export default ScreenOne;
