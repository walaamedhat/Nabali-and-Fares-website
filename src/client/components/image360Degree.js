// import React from 'react';
//
// import {
//   AppRegistry,
//   View,
//   Pano
// } from 'react-vr';
//
//
//
// export default class PanoramaImage extends React.Component {
//
//   constructor() {
//     super();
//
//     this.state = {
//       src: 'reactconf_00.jpg',
//     };
//   }
//
//   render() {
//     return (
//       <View>
//         <Pano source={{uri :'https://www.google.ps/search?q=360+degree+photo&tbm=isch&tbo=u&source=univ&sa=X&ved=0ahUKEwjnjNvxprjcAhUCJFAKHey8Cw0QsAQIJA&biw=1299&bih=648#imgrc=AM8IWZj4ACKRTM:'}}/>
//       </View>
//     );
//   }
// };
//
// AppRegistry.registerComponent('PanoramaImage', () => PanoramaImage);
import React, { Component } from 'react'
import { Pannellum } from '360-react-pannellum'

class Example extends Component {
  render () {
    <Pannellum
      width='100%'
      height='200px'
      imagePath='https://pannellum.org/images/alma.jpg'
      isDisplayCloseButton={true}
      closeButtonTitle='Close'
      showZoomCtrl={false}
      showFullscreenCtrl={false}
      autoLoad />
  }


}

export default Example;
