import React, { Component } from 'react';

import NewsContent from './newsContent';
import SendComment from './sendComment';
import AllComments from './allComments';


class Post extends Component{
  render() {
    return (
      <div className='posts' style={{ marginBottom:'198px' }}>
        <NewsContent/>
        <SendComment/>
        <div className='allComments'>
          <div className='allComments-header'>
            <h3>التعليقات</h3>
            <h5>عرض كل التعليقات</h5>
          </div>
          <AllComments/>
          <AllComments/>
        </div>
      </div>
    );
  }
}


export default Post;
