import React from 'react';


class ScreenOne extends React.Component {
  render(){
    return (
      <div className='view-container'>
        <header className="v-header">
          <div className='fullscreen-video-wrap' >
            <video loop autoPlay >
                <source src={'https://pixabay.com/en/videos/download/video-6389_medium.mp4'} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
          </div>
          <div className="header-content text-md-center">
            <h1>Welcome Everyone</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id temporibus perferendis necessitatibus numquam amet impedit explicabo? Debitis quasi ullam aperiam!</p>
            <a className="btn">Find Out More</a>
          </div>
        </header>
      </div>
    );
  }
}

// export default ScreenOne;
