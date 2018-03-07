import React from 'react';

class Main extends React.Component {

  render(){
    let self = this.props.self;
    return (
      <div className="menu">
          {self.renderComponent()}
      </div>
    );
  }
}

export default Main;
