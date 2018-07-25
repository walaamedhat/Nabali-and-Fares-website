import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

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
  componentDidMount() {
    const { newsData, allComments } = this.props;
    newsData(this.props.match.params.news_id);
    allComments(this.props.match.params.news_id);
  }
  render() {
    const {isFetching , data, comments} = this.props;
    console.log(comments,'comments');
    console.log(data,'daaaata');
    return (
      <div className='posts' style={{ marginBottom:'198px' }}>
        {
          isFetching ? <div/> :
          <div>
            <NewsContent data={data}/>
            <SendComment id={data}/>
          </div>
      }
        <div className='allComments'>
          <div className='allComments-header'>
            <h3>التعليقات</h3>
            {
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
    comments : state.allComment.comments
  }
}
const mapDispatchToProps = {
  newsData,
  allComments
}

export default connect(mapStateToProps,mapDispatchToProps)(Post);
