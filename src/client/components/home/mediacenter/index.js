import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import allNews from '../../../actions/getAllNewsAction';
import NewsBox from './newsbox/index'
import './index.css'

class MediaCenter extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
      const { allNews } = this.props;
      allNews();
  }

    render(){
      const {news} = this.props;
      console.log(news,'props news');
        return(
            <div className='mediacenter'>
                <div className='mediacenter__top'>
                    <span className='mediacenter__top__righttext'>المركز الإعلامي</span>
                    <Link to='/mediacenter'><span className='mediacenter__top__lefttext'>عرض كل الأخبار</span></Link>
                </div>
                {
                  news.isFetching || news.newsData.length==0? <div>loading</div> :
                <div className='mediacenter__bottom'>
                    <NewsBox data={news.newsData[0]} />
                    <NewsBox data={news.newsData[1]} />
                    <NewsBox data={news.newsData[2]} />
                </div>
              }
            </div>
        );
    }
}

MediaCenter.propTypes = {
    allNews: PropTypes.func
}
const mapStateToProps = state =>{
    return{
      news : state.allNews
    }
}

const mapDispatchToProps = {
    allNews
}


export default connect(mapStateToProps,mapDispatchToProps)(MediaCenter);
