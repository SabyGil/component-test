import React from 'react';


const ScreenTwo = () => {
  return (
    <div className='view-container'>
      <header className="v-header">
        <div className='fullscreen-video-wrap' >
          <video loop autoPlay >
              <source src={'https://pixabay.com/en/videos/download/video-4741_medium.mp4'} type="video/mp4" />
              Your browser does not support the video tag.
          </video>
        </div>
        <div className="header-content">
          <div className='about-profile-img'>
            <img src='#' alt='' />
          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id temporibus perferendis necessitatibus numquam amet impedit explicabo? Debitis quasi ullam aperiam!</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id temporibus perferendis necessitatibus numquam amet impedit explicabo? Debitis quasi ullam aperiam!</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id temporibus perferendis necessitatibus numquam amet impedit explicabo? Debitis quasi ullam aperiam!</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id temporibus perferendis necessitatibus numquam amet impedit explicabo? Debitis quasi ullam aperiam!</p>
          {/* <h1>Welcome Everyone</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id temporibus perferendis necessitatibus numquam amet impedit explicabo? Debitis quasi ullam aperiam!</p>
          <a className="btn">Find Out More</a> */}
        </div>
      </header>
    </div>
  );
}

export default ScreenTwo;
