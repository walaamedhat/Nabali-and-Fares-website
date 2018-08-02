import React,{ Component } from 'react';

import { Link } from 'react-router-dom';

class NewsImages extends Component {
  constructor(props) {
    super(props)

  }
  render(){

    return(
      <div className='content-fourthSection'>
        <img style={{ width:'100%' }} src='../assets/post-image.png'/>
        <div style={{ width:'100%' }} className='fourthSection-2img'>
          <img src='../assets/post-image.png'/>
          <img src='../assets/post-image.png'/>
        </div>
        <div className='fourthSection-6img'>
          <img src='../assets/post-image.png'/>
          <div className='fourthSection-6img-left'>
            <img src='../assets/post-image.png'/>
            <img src='../assets/post-image.png'/>
            <img src='../assets/post-image.png'/>
            <img src='../assets/post-image.png'/>
          </div>
        </div>
      </div>


    )
  }
}

export default NewsImages;
