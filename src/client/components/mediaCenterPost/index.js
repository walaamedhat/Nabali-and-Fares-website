import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { RingLoader } from 'react-spinners';

import NewsContent from './newsContent';
import SendComment from './sendComment';
import AllComments from './allComments';

import newsData from '../../actions/getNewsData';
import allComments from '../../actions/allComments';

class Post extends Component{
  constructor(props){
      super(props);
      this.state = {open: false}
  }
  openMore = ()=>{
    this.setState({open:true})
  }
  componentWillMount() {
    const { newsData, allComments } = this.props;
    newsData(this.props.match.params.news_id);
    allComments(this.props.match.params.news_id);
  }
  render() {
    const {isFetching , data, comments,isFetchingComments} = this.props
    return (
      <div className='posts' style={{ marginBottom:'198px' }}>
        {
          isFetching || data.length === 0 ?
            <center style={{marginBottom:'10px'}}><RingLoader width='150' height='7' color='4A90E2'/></center>
          :
          <div>
            <NewsContent data={data}/>
            <SendComment id={data}/>
          </div>
      }
        <div className='allComments'>
          <div className='allComments-header'>
            <h3>التعليقات</h3>
            {
              isFetchingComments || comments.length === 0?
              <center style={{marginBottom:'10px'}}><RingLoader width='150' height='7' color='4A90E2'/></center>
              :
              comments.length <=2 ?
              <h5 style={{color:'grey'}}>عرض كل التعليقات</h5>
              :
              <h5 onClick={this.openMore}>عرض كل التعليقات</h5>

            }
          </div>

          {
            (!this.state.open && comments.length>2)||(this.state.open && comments.length <=2)?
            <div style={{width:'50%'}}>
              <AllComments comment= {comments[0]} width='100%'/>
              <AllComments comment= {comments[1]} width='100%'/>
            </div>
            :
            <div style={{width:'50%'}}>

                {  comments.map(e =>{
                      return <AllComments comment= {e}/>


                  })}
                </div>
          }
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  newsData: PropTypes.func
}

const mapStateToProps = state =>{
  return {
    data : state.newsData.newsData,
    isFetching : state.newsData.isFetching,
    comments : state.allComment.comments,
    isFetchingComments : state.allComment.isFetching
  }
}
const mapDispatchToProps = {
  newsData,
  allComments
}

export default connect(mapStateToProps,mapDispatchToProps)(Post);
