import React,{ Component } from 'react';

import { Link } from 'react-router-dom';

class AnotherNews extends Component {
  constructor(props) {
    super(props)

  }
  render(){
    const length = this.props.anotherNews.newsData.length;
    const randomIndex = Math.floor(Math.random() * length);
    const randomIndex2 = randomIndex + 1 === length ? randomIndex-1: randomIndex+1
    return(
      <div className='moreNews-desc'>
        <div className='moreNews-desc-right'>
          <img style={{ width:'100%', height:'161.86px' }} src={this.props.anotherNews.newsData[randomIndex].mainImage}/>
          <h3>{this.props.anotherNews.newsData[randomIndex].name.substring(0, 55)}....</h3>
          <p>{this.props.anotherNews.newsData[randomIndex].discription.substring(0, 55)}.... </p>
          <Link to={'/post/' + `${this.props.anotherNews.newsData[randomIndex]._id}`} onClick={this.view}>
            <div className='newprojects__project__seemore'>
              عرض المزيد
              <span><i class="fas fa-arrow-left"></i></span>
          </div>
          </Link>
        </div>
        <div className='moreNews-desc-left'>
          <img style={{ width:'100%', height:'161.86px' }} src={this.props.anotherNews.newsData[randomIndex2].mainImage}/>
          <h3>{this.props.anotherNews.newsData[randomIndex2].name.substring(0, 55)}....</h3>
          <p>{this.props.anotherNews.newsData[randomIndex2].discription.substring(0, 55)}.... </p>
          <Link to={'/post/' + `${this.props.anotherNews.newsData[randomIndex2]._id}`} onClick={this.view}>
            <div className='newprojects__project__seemore'>
            عرض المزيد
            <span><i class="fas fa-arrow-left"></i></span>
            </div>
          </Link>
        </div>
      </div>

    )
  }
}

export default AnotherNews;
