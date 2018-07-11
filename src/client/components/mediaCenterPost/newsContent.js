import React, { Component } from 'react';

import ReactPlayer from 'react-player'

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
  render() {
    return (
      <div>
        <Header Logo='./assets/nabali-fares-colored.png' WhereAmI='mediacenterpage'/>
        <div className='media-center-post'>
          <div className='post-image-header'>
            <img src='./assets/posts.jpg' className='header-postImage' />
            <div className="post-desc">النبالي والفارس تنظم نشاط تفاعلي يوم إعلان نتائج الثانوية العامة في مدينة رام الله</div>
            <div className='post-desc-time'>
              <div>
                <i className="fa fa-calendar" style={{ fontSize:'20px' }}></i>
                قبل 5 دقائق
              </div>
              <div>
                <i style={{fontSize:'24px'}} className="fa">&#xf11d;</i>
                خبر
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
                  <ReactPlayer url={[{src: './assets/videoplayback.mp4', type: 'video/webm'}]} playing={this.state.run} controls={this.state.controled}/>
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
              <img style={{ width:'100%' }} src='./assets/post-image.png'/>
              <div style={{ width:'100%' }} className='fourthSection-2img'>
                <img src='./assets/posts.jpg'/>
                <img src='./assets/posts.jpg'/>
              </div>
              <div className='fourthSection-6img'>
                <img src='./assets/posts.jpg'/>
                <div className='fourthSection-6img-left'>
                  <img src='./assets/posts.jpg'/>
                  <img src='./assets/posts.jpg'/>
                  <img src='./assets/posts.jpg'/>
                  <img src='./assets/posts.jpg'/>
                </div>
              </div>
            </div>
            <div className='content-fifthSection'>
              <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال "lorem ipsum" في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها</p>

            </div>
            <div className='content-sixthSection'>
              <div className='sixthSection-moreNews'>
                <h3 style={{ color:'#475669'}}>أخبار أخرى</h3>
                <h5 style={{ color:'#3da5f9'}}>عرض كل الأخبار</h5>
              </div>
              <div className='moreNews-desc'>
                <div className='moreNews-desc-right'>
                  <img style={{ width:'100%' }} src='./assets/arch.png'/>
                  <h3>مشروع سكاي تاورز</h3>
                  <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ </p>
                  <div className='newprojects__project__seemore'>
                      عرض المزيد
                      <span><i class="fas fa-arrow-left"></i></span>
                  </div>
                </div>
                <div className='moreNews-desc-left'>
                  <img style={{ width:'100%' }} src='./assets/arch.png'/>
                  <h3>مشروع سكاي تاورز</h3>
                  <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ </p>
                  <div className='newprojects__project__seemore'>
                      عرض المزيد
                      <span><i class="fas fa-arrow-left"></i></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}



export default MediaCenterPost;
