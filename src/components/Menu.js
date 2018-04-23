import React from 'react';
// import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const durationFn = function(deltaTop) {
  return deltaTop;
};

class Menu extends React.Component {
  constructor(props){
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

  toggleNav = ( e ) => {
    const expanded = e.target.getAttribute('aria-expanded') === 'true' || false;
    // console.log( expanded );
    e.target.setAttribute('aria-expanded', !expanded);
    console.log( e.target)
  }

  render(){
    // const navButton = document.querySelectorAll('button[aria-expanded]');
    return (
      <nav className="menuTest">
        <ul className="">
          <li><Link activeClass="active" className="logo" to="test1"  spy={true} duration={600} smooth={true}>LOGO</Link></li>
          <li><Link activeClass="active" className="contact-btn" to="test4"  spy={true} duration={600} smooth={true}>Contact</Link></li>
          <div>
            <button onClick={ (e) => this.toggleNav(e) } aria-expanded="false" aria-controls="menu-list">
              <span className="open"><i className="fas fa-bars"></i></span>
              {/* <span className="close"><i class="fas fa-times"></i></span> */}
            </button>
            <div className='menu-list'>
              <li><Link activeClass="active" className="test2" to="test2"  spy={true} duration={600} smooth={true}>About</Link></li>
              <li><Link activeClass="active" className="test3" to="test3"  spy={true} duration={600} smooth={true}>Services</Link></li>
            </div>
          </div>
        </ul>
      </nav>
    );
  }
}

export default Menu;
