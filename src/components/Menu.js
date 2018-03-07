import React from 'react';

class Menu extends React.Component {

  render(){
    let self = this.props.self;
    return (
      <div className="menu">
          <button name='0' onClick={ () => self.handleScreens('home') }>718 Digital</button>
          <button name='1' onClick={ () => self.handleScreens('client') }>Client Work</button>
          <button name='2' onClick={ () => self.handleScreens('consult') }>Consulting</button>
          <button name='3' onClick={ () => self.handleScreens('inhouse') }>In House</button>
      </div>
    );
  }
}

export default Menu;
