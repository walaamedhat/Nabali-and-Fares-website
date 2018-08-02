import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { RingLoader } from 'react-spinners';

import allNews from '../../actions/getAllNewsAction';
import AnotherNews from './anotherNews';
import NewsImages from './newsImages';
import Content from './descContent';
import Header from '../header';

import './index.css';


class MediaCenterPost extends Component {
  constructor(props){
      super(props)

      this.state = {
          run: false,
          controled:false
      }
      this.runOrPauseVideo = this.runOrPauseVideo.bind(this);
  }
  runOrPauseVideo(){
      if(this.state.run){
          this.setState({
              run:false
          })
      }else{
          this.setState({
              run:true,
              controled:true

          })
      }

  }
  componentDidMount(){
      const { allNews } = this.props;
      allNews('lastnews');
  }
  view = (e)=> {
    window.scrollTo(0, 0);
    window.location.reload()
   }

  render() {
      const desc = this.props.data[0].discription.split("[\\. \\]+");
      console.log(desc,'desc kkkkkkk');
      // console.log(this.props.data[0].discription.split("[\\s\\.]+")[0],'desc desc'):

    return (
      <div>
        <Header Logo='../assets/nabali-fares-colored.png' WhereAmI='mediacenterpage'/>
        {
          !this.props.data || this.props.data.length == 0 ?

          <center style={{marginBottom:'10px'}}><RingLoader width='150' height='7' color='4A90E2'/></center>
          :
        <div className='media-center-post'>
          <div className='post-image-header'>
            <img src={this.props.data[0].mainImage} className='header-postImage' />
            <div class="content_over_image">
              <h2>{this.props.data[0].name}</h2>
              <div className='post-desc-time'>
                <div>
                  <i className="fa fa-calendar" style={{ fontSize:'20px' }}></i>
                  قبل 5 دقائق
                </div>
                <div>
                  <i style={{fontSize:'24px'}} className="fa fa-flag"></i>
                  خبر
                </div>
              </div>
            </div>
          </div>
          <div className='post-content'>
            <Content  desc={this.props.data[0].discription}/>

            <div className='content-secondSection'>
              <div style={{ position:'relative' }} className='projectpage__row5__video' onClick={this.runOrPauseVideo}>
                  {!this.state.controled && <input className='secondSection__runvideobutton'/>}
                  <ReactPlayer url={[{src:this.props.data[0].video, type: 'video/webm'}]} playing={this.state.run} controls={this.state.controled}/>
              </div>
            </div>

            <Content  desc={this.props.data[0].discription}/>

            <NewsImages />

            <Content  desc={this.props.data[0].discription}/>

            <div className='content-sixthSection'>
              <div className='sixthSection-moreNews'>
                <h3 style={{ color:'#475669'}}>أخبار أخرى</h3>
                <Link to='/mediacenter/lastnews'>
                  <h5 style={{ color:'#3da5f9'}}>عرض كل الأخبار</h5>
                </Link>
              </div>
              {
                this.props.anotherNews.isFetching || this.props.anotherNews.newsData.length==0? <div>loading</div> :
                  <AnotherNews anotherNews={this.props.anotherNews}/>
                }
            </div>
          </div>
        </div>

      }

      </div>

    );
  }
}

MediaCenterPost.propTypes = {
    allNews: PropTypes.func
}

const mapStateToProps = state =>{
    return{
      anotherNews : state.allNews
    }
}

const mapDispatchToProps = {
    allNews
}


export default connect(mapStateToProps,mapDispatchToProps)(MediaCenterPost);
