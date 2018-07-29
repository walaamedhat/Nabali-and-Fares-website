import React,{Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../header'
import NewsBox from '../home/mediacenter/newsbox/index.js';
import allNews from '../../actions/getAllNewsAction';

import './index.css';


class MediaCenterPage extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
      const { allNews } = this.props;
      allNews();
  }

    render(){
      const {news} = this.props;
      console.log(this.props,'props');
        return(
            <div>
                <Header Logo='./assets/nabali-fares-colored.png' WhereAmI='mediacenterpage'/>
                <div className='mediacenterpage__nav'>
                    <span>المركز الإعلامي</span>
                    <span>ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى</span>
                </div>
                <div className='mediacenterpage__components'>
                  {
                    news.isFetching || news.newsData.length==0? <div>loading</div> :

                      news.newsData.map(e => {
                        return <NewsBox props={this.props} data={e}/>
                      })

                    }
                </div>
            </div>

        );
    }
}

MediaCenterPage.propTypes = {
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


export default connect(mapStateToProps,mapDispatchToProps)(MediaCenterPage);
