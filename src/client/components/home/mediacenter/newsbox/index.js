import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../index.css'

class NewsBox extends Component {
  constructor(props){
    super(props)
  }
  view = (e)=> {
    this.props.props.history.push(`/post/${e.target.id}`);
  }
  render(){
    const news = this.props.data;
  console.log(this.props.data,'props box news');
  console.log(this.props,'props box news');
    return (
        <div className='mediacenter__bottom__box'>
                        <img src={news.mainImage}/>
                        <div className='mediacenter__bottom__icon'>
                            <img src='./assets/calender.png'/>
                            <span>قبل 5 دقائق</span>
                            <img src='./assets/flag.png'/>
                            <span>{news.type}</span>
                        </div>
                        <div className='mediacenter__bottom__title'>{news.name.substring(0, 30)}...</div>
                        <p className='mediacenter__bottom__p'>{news.discription.substring(0, 151)}...</p>
                          <div id={news._id} className='mediacenter__bottom__readmore' onClick={this.view}>
                            إقرأ المزيد
                            <span><i class="fas fa-arrow-left"></i></span>
                          </div>
        </div>
    );
  }

 }
 // <Link to={'/post/' + `${news._id}`}>
// </Link>

 export default NewsBox;
