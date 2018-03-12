import React from 'react';
import ClientCards from './ClientCards';

const ScreenTwo = () => {
  return (
    <div className='view-container'>
      <header className="v-header container">
        <div className='fullscreen-video-wrap' >
          <video loop autoPlay >
              <source src={'https://pixabay.com/en/videos/download/video-7269_medium.mp4'} type="video/mp4" />
              Your browser does not support the video tag.
          </video>
        </div>
        <div className="header-content">
              <h1>Client Work</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id temporibus perferendis necessitatibus numquam amet impedit explicabo? Debitis quasi ullam aperiam!</p>
              <a className="btn">Frameworks & Languages</a>
              <ul>
                  <li>Python</li>
                  <li>React</li>
                  <li>Angular</li>
                  <li>Ionic</li>
                  <li>Vue</li>
                  <li>Sup Joe</li>
            </ul>
        <ClientCards/>
        </div>
      </header>
    </div>
  );
}

export default ScreenTwo;
