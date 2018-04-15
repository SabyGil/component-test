import React from 'react';
import HorizontalScroll from 'react-scroll-horizontal'
import OwlCarousel from 'react-owl-carousel';

class ScreenOne extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
            options: {
                loop: false,
                margin:10,
                mouseDrag: true,
                animateOut: true,
                touchDrag: true,
                rewind: true,
                nav:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:5
                    }
                }
            },

            items: [
                <div className="item" key={1}><h4>1</h4></div>,
                <div className="item" key={2}><h4>2</h4></div>,
                <div className="item" key={3}><h4>3</h4></div>,
                <div className="item" key={4}><h4>4</h4></div>,
                <div className="item" key={5}><h4>5</h4></div>,
                <div className="item" key={6}><h4>6</h4></div>,
                <div className="item" key={7}><h4>7</h4></div>,
                <div className="item" key={8}><h4>8</h4></div>,
                <div className="item" key={9}><h4>9</h4></div>,
                <div className="item" key={10}><h4>10</h4></div>,
                <div className="item" key={11}><h4>11</h4></div>,
                <div className="item" key={12}><h4>12</h4></div>,
            ],
        };
    }
    render () {
      return (
        <div className='view-container'>
          <header className="v-header ">
            <div className='fullscreen-video-wrap' >
              <video loop autoPlay className='desktop-video'>
                  <source src={'https://pixabay.com/en/videos/download/video-6395_medium.mp4'} type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
            </div>

          <div className="header-content">

            <h1>Welcome Everyone</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id temporibus perferendis necessitatibus numquam amet impedit explicabo? Debitis quasi ullam aperiam!</p>
            <a className="btn">Find Out More</a>
            {/* <div style={{ }} className='tile-container'>
                <HorizontalScroll style={{ border: `11px solid green`}}> */}
                <OwlCarousel
            className="owl-theme"
            loop margin={10} nav
            navText={['<', '>']}
            mouseDrag
            {...this.state.options}
          >
            <div className="item"><h4>1</h4></div>
            <div className="item"><h4>2</h4></div>
            <div className="item"><h4>3</h4></div>
            <div className="item"><h4>4</h4></div>
            <div className="item"><h4>5</h4></div>
            <div className="item"><h4>6</h4></div>
            <div className="item"><h4>7</h4></div>
            <div className="item"><h4>8</h4></div>
            <div className="item"><h4>9</h4></div>
            <div className="item"><h4>10</h4></div>
            <div className="item"><h4>11</h4></div>
            <div className="item"><h4>12</h4></div>
          </OwlCarousel>
                {/* </HorizontalScroll>
            </div> */}

          </div>
        </header>
      </div>
      )
    }
}

export default ScreenOne;
