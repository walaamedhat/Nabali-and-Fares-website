import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { RingLoader } from 'react-spinners';

import allNews from '../../actions/getAllNewsAction';

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
      allNews();
  }
  view = (e)=> {
    window.scrollTo(0, 0);
    window.location.reload()
   }

  render() {
    const data = this.props.data;
    const {anotherNews} = this.props;
    const randomIndex = Math.floor(Math.random() * anotherNews.newsData.length);
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
            <div className='content-fistSection'>
              <p>
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال "lorem ipsum" في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها
              </p>
            </div>
            <div className='content-secondSection'>
              <div style={{ position:'relative' }} className='projectpage__row5__video' onClick={this.runOrPauseVideo}>
                  {!this.state.controled && <input className='secondSection__runvideobutton'/>}
                  <ReactPlayer url={[{src:this.props.data[0].video, type: 'video/webm'}]} playing={this.state.run} controls={this.state.controled}/>
              </div>
            </div>
            <div className='content-thirdSection'>
              <h3>عنوان وهمي لاظهار شكل عناوين الفقرات</h3>
              <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال "lorem ipsum" في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها</p>
              <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال "lorem ipsum" في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها</p>
              <h3>عنوان وهمي ثاني</h3>
              <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال "lorem ipsum" في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها</p>
            </div>
            <div className='content-fourthSection'>
              <img style={{ width:'100%' }} src='../assets/post-image.png'/>
              <div style={{ width:'100%' }} className='fourthSection-2img'>
                <img src='../assets/posts.jpg'/>
                <img src='../assets/posts.jpg'/>
              </div>
              <div className='fourthSection-6img'>
                <img src='../assets/posts.jpg'/>
                <div className='fourthSection-6img-left'>
                  <img src='../assets/posts.jpg'/>
                  <img src='../assets/posts.jpg'/>
                  <img src='../assets/posts.jpg'/>
                  <img src='../assets/posts.jpg'/>
                </div>
              </div>
            </div>
            <div className='content-fifthSection'>
              <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال "lorem ipsum" في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها</p>

            </div>
            <div className='content-sixthSection'>
              <div className='sixthSection-moreNews'>
                <h3 style={{ color:'#475669'}}>أخبار أخرى</h3>
                <Link to='/mediacenter'>
                  <h5 style={{ color:'#3da5f9'}}>عرض كل الأخبار</h5>
                </Link>
              </div>
              {
                anotherNews.isFetching || anotherNews.newsData.length==0? <div>loading</div> :
                  <div className='moreNews-desc'>
                    <div className='moreNews-desc-right'>
                      <img style={{ width:'100%', height:'161.86px' }} src={anotherNews.newsData[randomIndex].mainImage}/>
                      <h3>{anotherNews.newsData[randomIndex].name.substring(0, 55)}....</h3>
                      <p>{anotherNews.newsData[randomIndex].discription.substring(0, 55)}.... </p>
                      <Link to={'/post/' + `${anotherNews.newsData[randomIndex]._id}`} onClick={this.view}>
                        <div className='newprojects__project__seemore'>
                          عرض المزيد
                          <span><i class="fas fa-arrow-left"></i></span>
                        </div>
                      </Link>
                    </div>
                    <div className='moreNews-desc-left'>
                      <img style={{ width:'100%', height:'161.86px' }} src={anotherNews.newsData[randomIndex+1].mainImage}/>
                      <h3>{anotherNews.newsData[randomIndex+1].name.substring(0, 55)}....</h3>
                      <p>{anotherNews.newsData[randomIndex+1].discription.substring(0, 55)}.... </p>
                        <Link to={'/post/' + `${anotherNews.newsData[randomIndex+1]._id}`} onClick={this.view}>
                          <div className='newprojects__project__seemore'>
                            عرض المزيد
                            <span><i class="fas fa-arrow-left"></i></span>
                          </div>
                        </Link>
                    </div>
                  </div>
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
