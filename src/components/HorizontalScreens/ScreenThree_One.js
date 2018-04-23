import React from 'react';
import OwlCarousel from 'react-owl-carousel';

const styling = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}
export default class ScreenThreeOne extends React.Component {
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
  render(){
    return(
      <div style={styling}>
        <h1>Client Work</h1>
        <p>The quick brown fox jumps over the lazy dog</p>
        <p>The quick brown fox jumps over the lazy dog</p>
        <p>The quick brown fox jumps over the lazy dog</p>
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
      </div>
    );
  }
}
