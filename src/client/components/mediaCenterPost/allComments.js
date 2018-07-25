import React, { Component } from 'react';



class AllComments extends Component{
  render() {
    const width = this.props.width
    return (
      <div style={{width:'100%'}}>
      {
      width ?

      <div className='comments-section'>
        <div className='comments-image'>
          <img style={{ width:'77px' }} src='../assets/pessoa-icon.png'/>
        </div>
        <div className='comments-details'>
          <div className='name-date'>
            <h3> {this.props.comment.commenter_name}</h3>
            <h5>منذ يوم واحد</h5>
          </div>
          <p>{this.props.comment.comment}</p>
        </div>
      </div>
      :
        <div className='comments-section'>
          <div className='comments-image'>
            <img style={{ width:'77px' }} src='../assets/pessoa-icon.png'/>
          </div>
          <div className='comments-details'>
            <div className='name-date'>
              <h3> {this.props.comment.commenter_name}</h3>
              <h5>منذ يوم واحد</h5>
            </div>
            <p>{this.props.comment.comment}</p>
          </div>
        </div>
    }
  </div>
    );
  }
}


export default AllComments;
