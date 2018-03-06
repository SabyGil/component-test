import React from 'react';


class ScreenOne extends React.Component {
  render(){
    return (
      <div className='screen-one-container'>
        <video loop autoPlay >
            <source src={'https://pixabay.com/en/videos/download/video-4741_medium.mp4'} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className='content-container'>
          <span>my content</span>
        </div>

{/* className='temp vid content' */}
    </div>
    );
  }
}

export default ScreenOne;
