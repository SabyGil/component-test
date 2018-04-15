import React from 'react';
import ClientCards from './ClientCards';

const ScreenThree = () => {
  return (
    <div className='view-container'>
      <header className="v-header ">
        <div className='fullscreen-video-wrap' >
          <video loop autoPlay className='desktop-video'>
              <source src={'https://pixabay.com/en/videos/download/video-7269_medium.mp4'} type="video/mp4" />
              Your browser does not support the video tag.
          </video>
        </div>
        <div className="header-content">
              
        <ClientCards/>
        </div>
      </header>
    </div>
  )
}

export default ScreenThree;
