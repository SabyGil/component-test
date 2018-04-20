import React from 'react';
import ClientCards from './ClientCards';

const ScreenThree = () => {
  return (
    <div className='view-container'>
      <div className='fullscreen-video-wrap' >
        <video loop autoPlay className='desktop-video'>
            <source src={'https://pixabay.com/en/videos/download/video-7269_medium.mp4'} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      </div>
      <div className="header-content">
        <ClientCards/>
        {/* <div className='card'>a</div>
        <div className='card'>b</div>
        <div className='card'>c</div> */}
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id temporibus perferendis necessitatibus numquam amet impedit explicabo? Debitis quasi ullam aperiam!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id temporibus perferendis necessitatibus numquam amet impedit explicabo? Debitis quasi ullam aperiam!</p>
      </div>
    </div>
  );
}

export default ScreenThree;
