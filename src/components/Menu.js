import React from 'react';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

// class Menu extends React.Component {
//
//   render(){
//     let self = this.props.self;
//     return (
//       <div className="menu">
//           <button name='0' onClick={ () => self.handleScreens('home') }>718 Digital</button>
//           <button name='1' onClick={ () => self.handleScreens('client') }>Client Work</button>
//           <button name='2' onClick={ () => self.handleScreens('consult') }>Consulting</button>
//           <button name='3' onClick={ () => self.handleScreens('inhouse') }>In House</button>
//       </div>
//     );
//   }
// }
class Menu extends React.Component {
  toggleNav = ( e ) => {
    const expanded = e.target.getAttribute('aria-expanded') === 'true' || false;
    // console.log( expanded );
    e.target.setAttribute('aria-expanded', !expanded);
    console.log( e.target)
  }
  render(){
    // const navButton = document.querySelectorAll('button[aria-expanded]');
    // let self = this.props.self;
    return (
      <nav className="menuTest">
          <ul className="">
            <li><Link containerId="scroll-container" activeClass="active" className="logo" to="test1" spy={true} duration={800} smooth={true}>LOGO</Link></li>
            <li><Link containerId="scroll-container" activeClass="active" className="contact-btn" to="test4" spy={true} duration={800} smooth={true}>Contact</Link></li>
            <div>
              <button onClick={ (e) => this.toggleNav(e) } aria-expanded="false" aria-controls="menu-list">
                <span className="open"><i className="fas fa-bars"></i></span>
                {/* <span className="close"><i class="fas fa-times"></i></span> */}
              </button>
              <div className='menu-list'>
                <li><Link containerId="scroll-container" activeClass="active" className="test4" to="test2" spy={true} duration={800} smooth={true}>About</Link></li>
                <li><Link containerId="scroll-container" activeClass="active" className="test3" to="test3" spy={true} duration={800} smooth={true}>Services</Link></li>
              </div>
            </div>
          </ul>
      </nav>
    );
  }
}

export default Menu;
