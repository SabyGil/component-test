import React, { Component} from 'react'

// const bgImg = {
//   backgroundImage: `url(${'https://images.craigslist.org/00I0I_lc2pBi5qCP5_50x50c.jpg'})`
// };

export default class ScreenOne extends Component {
  constructor(){
    super();
    this.state = {
      allImgs: '',
      currentImg: '',
      currentIndex: 0
    }
  }
  componentWillMount () {
    const allImgs = [
      'https://cdn.pixabay.com/photo/2017/06/06/22/46/mediterranean-cuisine-2378758_960_720.jpg',
      'https://pixabay.com/en/videos/download/video-6389_medium.mp4',
      'https://images.craigslist.org/00n0n_9y2AA8gJS8P_600x450.jpg'
    ]
    this.setState({
      allImgs,
      currentImg: allImgs[this.state.currentIndex]
    })
  }
  loopImages = () => {
    return this.state.allImgs.map((img, i) => {
      return (
          <div key={i} onClick={this.clickedThumb.bind(null, i)} className='thumb-image' style={{
              "backgroundImage": `url('${img}')`
          }}></div>
      )
    })
  }

  //buttons for next & previous
  nextBtn = () => {
    if(this.state.currentIndex != (this.state.allImgs.length - 1)){
        this.setState({
          currentIndex: this.state.currentIndex + 1
        })
      }
    }
  prevBtn = () => {
    if(this.state.currentIndex != 0){
      this.setState({
        currentIndex: this.state.currentIndex - 1
      })
    }
  }

  clickedThumb = (index) => {
    this.setState({
      currentIndex: index
    })
  }

  render () {
    return (
      <div className='view-container'>
        <div className='v-header'>
          <div className='fullscreen-video-wrap'>

            {/* <div className='image-1' style={{
              "backgroundImage": `url('${this.state.allImgs[this.state.currentIndex]}')`
            }}> */}
            <div className='thumb-image' ></div>
            {this.loopImages()}
            {/* </div> */}
          </div>
        </div>
        {/* <div className='thumbnails'> */}

        {/* </div> */}
        <div className='arrows left-arrow' onClick={this.prevBtn}>{'<'}</div>
        <div className='arrows right-arrow' onClick={this.nextBtn}>{'>'}</div>
      </div>
    );
  }
}
