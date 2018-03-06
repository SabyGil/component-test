import React from 'react';


const ScreenTwo = () => {
  return (
    <div className='screen-two-container'>
      <h1>screenTwo</h1>
      <video loop autoPlay >
          <source src={'https://pixabay.com/en/videos/download/video-7269_medium.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
      </video>
  </div>
  );
}

export default ScreenTwo;
