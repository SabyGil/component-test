import React from 'react';
import {Fullpage, Slide, HorizontalSlider} from 'fullpage-react';
import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';
import ScreenThree from './ScreenThree';
import ScreenFour from './ScreenFour';
import ScreenThreeOne from './HorizontalScreens/ScreenThree_One';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Menu from './Menu';

const {changeFullpageSlide, changeHorizontalSlide} = Fullpage;

const fullPageOptions = {

  // for mouse/wheel events

  // represents the level of force required to generate a slide change on non-mobile, 0 is default

  scrollSensitivity: 1,

  // for touchStart/touchEnd/mobile scrolling

  // represents the level of force required to generate a slide change on mobile, 0 is default

  touchSensitivity: 2,

  scrollSpeed: 200,

  resetSlides: true,

  hideScrollBars: true,

  enableArrowKeys: true,

  // optional, set the initial vertical slide

  activeSlide: 0

};

const topNavStyle = {

  textAlign: 'center',

  position: 'fixed',

  width: '100%',

  cursor: 'pointer',

  zIndex: 10,

  backgroundColor: 'rgba(255, 255, 255, 0.4)',

  top: '0px'

};

const horizontalNavStyle = {

  position: 'absolute',

  width: '100%',

  top: '50%',

  zIndex: 10

};

const horizontalSliderProps = {

  name: 'horizontalSlider1',

  infinite: true

};

const durationFn = function(deltaTop) {
  return deltaTop;
};

class FullpageReact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: {
        Fullpage: 0,
        horizontalSlider1: 0
      }
    };
    this.onSlideChangeStart = this.onSlideChangeStart.bind(this);
    this.onSlideChangeEnd = this.onSlideChangeEnd.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  onSlideChangeStart(name, props, state, newState) {
    if (!this.horizontalNav) {
      this.horizontalNav = document.getElementById('horizontal-nav');
    }
    if (name === 'horizontalSlider1') {
      scrollNavStart(this.horizontalNav);
    }
  }

  onSlideChangeEnd(name, props, state, newState) {
    if (name === 'horizontalSlider1') {
      scrollNavEnd(this.horizontalNav);
    }

    const oldActive = this.state.active;
    const sliderState = {
      [name]: newState.activeSlide
    };
    const updatedState = Object.assign(oldActive, sliderState);
    this.setState(updatedState);
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

  render() {

    const {active} = this.state;

    const currentActive = active.Fullpage;

    const prevSlide = changeFullpageSlide.bind(null, currentActive - 1);

    const nextSlide = changeFullpageSlide.bind(null, currentActive + 1);

    const goToTop = changeFullpageSlide.bind(null, 0);

    const horizontalSliderName = horizontalSliderProps.name;

    const horizontalActive = this.state.active[horizontalSliderName];

    const prevHorizontalSlide = changeHorizontalSlide.bind(null, horizontalSliderName, horizontalActive - 1);

    const nextHorizontalSlide = changeHorizontalSlide.bind(null, horizontalSliderName, horizontalActive + 1);

    const topNav = (
      <div style={topNavStyle}>

        <span onClick={prevSlide}>

          <button>Previous Slide</button>

        </span>

        <span onClick={goToTop}>

          <button>Back to Top</button>

        </span>

        <span onClick={nextSlide}>

          <button>Next Slide</button>

        </span>

      </div>
    );

    const horizontalNav = (<div id='horizontal-nav' style={horizontalNavStyle}>

      <span onClick={prevHorizontalSlide}>
        <button><i className="fas fa-chevron-left"></i></button>
      </span>

      <span style={{
          position: 'absolute',
          right: '0px'
        }} onClick={nextHorizontalSlide}>
        <button><i className="fas fa-chevron-right"></i></button>
      </span>

    </div>);

    const horizontalSlides = [
      <Slide className='no-flick'>
      <Element name="test3" className='element'>
          <ScreenThree />
      </Element>
    </Slide>,

      <Slide className='no-flick' style={{
          backgroundColor: 'lightGrey'
        }}>
        <ScreenThreeOne />
      </Slide>,

      <Slide className='no-flick' style={{
          backgroundColor: 'green'
        }}>
        <p>Horizontal 3</p>
      </Slide>,

      <Slide style={{
          backgroundColor: 'lightGrey'
        }}>
        <p>Horizontal 4</p>
      </Slide>

    ];

    horizontalSliderProps.slides = horizontalSlides;

    const horizontalSlider = <HorizontalSlider id='horizontal-slider-1' {...horizontalSliderProps}>{horizontalNav}</HorizontalSlider>;

    const verticalSlides = [
      <Slide>
        <Element name="test1" className='element'>
          <ScreenOne  />
        </Element>
      </Slide>,
      <Slide >
        <Element name="test2" className='element'>
          <ScreenTwo  />
        </Element>
      </Slide>,
      horizontalSlider,
      <Slide >
        <Element name="test4" className='element'>
          <ScreenFour />
        </Element>,
      </Slide>
    ];

    fullPageOptions.slides = verticalSlides;
    return (
      <div>
      <Fullpage
        onSlideChangeStart={this.onSlideChangeStart}
        onSlideChangeEnd={this.onSlideChangeEnd}
        {...fullPageOptions}
        >
          <Menu />
        {/* {topNav} */}
      </Fullpage>
    </div>
    );
  }
}

function scrollNavStart(nav) {
  // make the nav fixed when we start scrolling horizontally
  nav.style.position = 'fixed';
}

function scrollNavEnd(nav) {
  // make the nav absolute when scroll finishes
  nav.style.position = 'absolute';
}

export default FullpageReact;
