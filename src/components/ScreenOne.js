import React from 'react';

//
// class ScreenOne extends React.Component {
//   render(){
//     return (
//       <div className='view-container'>
//         <header className="v-header">
//           <div className='fullscreen-video-wrap' >
//             <video loop autoPlay >
//                 <source src={'https://pixabay.com/en/videos/download/video-6389_medium.mp4'} type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>
//           </div>
//           <div className="header-content text-md-center">
//             <h1>Welcome Everyone</h1>
//             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id temporibus perferendis necessitatibus numquam amet impedit explicabo? Debitis quasi ullam aperiam!</p>
//             <a className="btn">Find Out More</a>
//           </div>
//         </header>
//       </div>
//     );
//   }
// }

import HorizontalScroll from 'react-scroll-horizontal'

class ScreenOne extends React.Component {


    genData() {
      var data = []
      var max = Math.random() * 20 + 1

      for (; --max > 0;) {
        data.push({
          text: 'Scroll Me ' + max + '!!'
        })
      }

      return data
    }

    state = {
      someDivs: this.genData()
    };

    render () {
      const exampleItems = this.state.someDivs.map((item, i) => {
      return (
        <div key={ i } className='tile'>
          <h2>{ item.text }</h2>
        </div>
        )
      })
      return (
        <div className='view-container'>
          <header className="v-header ">
            <div className='fullscreen-video-wrap' >
              <video loop autoPlay className='desktop-video'>
                  <source src={'https://pixabay.com/en/videos/download/video-7269_medium.mp4'} type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
            </div>
          {/* <h1 className='center' onClick={ e => this.setState({ someDivs: this.genData() }) }>Full Width</h1> */}

          <div className="hr"></div>
          {/* <h1 className='center' onClick={ e => this.setState({ someDivs: this.genData() }) }>Arbitrary Width, Spring Config</h1> */}
          {/* <div style={{ height: `22.7em`, width: `66%`}} > */}
              {/* <HorizontalScroll config={{ stiffness: 160, damping: 110}}> */}
                {/* { exampleItems } */}
                {/* <div className='tile'>Lorem ipsum loream ipsuim</div>
                <div className='tile'>Lorem ipsum loream ipsuim</div>
                <div className='tile'>Lorem ipsum loream ipsuim</div>
                <div className='tile'>Lorem ipsum loream ipsuim</div>
                <div className='tile'>Lorem ipsum loream ipsuim</div> */}
              {/* </HorizontalScroll> */}
          {/* </div> */}
          {/* <footer>
            <p>Made by <a href="http://github.com/hew">hew</a></p>
          </footer> */}
          <div className="header-content">

            <h1>Welcome Everyone</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id temporibus perferendis necessitatibus numquam amet impedit explicabo? Debitis quasi ullam aperiam!</p>
            <a className="btn">Find Out More</a>
            <div style={{ }} className='tile-container'>
                <HorizontalScroll style={{ border: `11px solid green`}}>
                  {/* { exampleItems } */}
                  <div className='tile'>ssaa</div>
                  <div className='tile'>Lorem ipsum loream ipsuim</div>
                  <div className='tile'>Lorem ipsum loream ipsuim</div>
                  <div className='tile'>Lorem ipsum loream ipsuim</div>
                  <div className='tile'>Lorem ipsum loream ipsuim</div>
                  <div className='tile'>Lorem ipsum loream ipsuim</div>
                </HorizontalScroll>
            </div>

          </div>
        </header>
      </div>
      )
    }
}

export default ScreenOne;
