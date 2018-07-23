import React, {Component} from 'react';

import Header from '../header/index';
import Feature from './feature';
import ReactPlayer from 'react-player'


import './index.css'

class ProjectPage extends Component {
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
    componentDidMount() {
      console.log(this.props.match.params.project_id,'this.props.match.params.project_id');
      // const { pojectData } = this.props;
      // pojectData(this.props.match.params.project_id);
    }
    render(){
        return(
            <div className='pojectpage'>
                <Header Logo='./assets/nabali-fares-colored.png' WhereAmI='ourprojectpage'/>
                <div className='porjectpage__images'>
                    <img className='porjectpage__images__img' src='./assets/arch.png'/>
                    <div className='projectpage__4image'>
                        <img src='./assets/arch.png'/>
                        <img src='./assets/arch.png'/>
                        <img src='./assets/arch.png'/>
                        <img src='./assets/arch.png'/>
                    </div>
                </div>
                <div className='projectpage__details'>
                    <div className='projectpage__row1'>
                        <h1 className='project__page__projecttitle'>
                            مشروع سكاي تاورز الحديث
                        </h1>
                        <div className='project__page__street'>
                            <span>شارع فلان الفلاني 236</span>
                            <span>الحي الرئيسي - المدينة الرئيسية</span>
                        </div>
                    </div>
                    <div className='projectpage__row2'>
                        <div>وصف المشروع</div>
                        <div>
                        سكاي تاورز أول مشروع سكني فاخر في مركز المدينة يحتوي على مزايا خاصة لاولئك الذين يسعون للحصول على اسلوب ونمط حياة كما يحلمون.حيث تتوفر كل وسائل الراحة من حدائق خضراء.الى جانب وسائل الراحة الاخرى التي أصبحت تمثل محور اهتمام لكل عائلة في عصرنا الحالي الذي يمتاز بضغط العمل وضيق الوقت مما لا يسمح في كثير من الأحيان لأفراد العائلة بالاستمتاع بوقتهم. سكاي تاورز جعل من المستحيل ممكن.
                        </div>
                    </div>
                    <div className='projectpage__row3'>
                        <div>مميزات المشروع</div>
                        <div className='projectpage__features'>
                            <div>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها</div>
                            <div className='projectpage__CompFeature'>
                                <Feature Image='./assets/rooms.png' Title='غرف' Paragraph='ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى' />
                                <Feature Image='./assets/tennis.png' Title='نوادي رياضية' Paragraph='ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى' />
                                <Feature Image='./assets/kitchen.png' Title='مطبخ' Paragraph='ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى' />
                                <Feature Image='./assets/gardens.png' Title='حدائق' Paragraph='ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى' />
                                <Feature Image='./assets/bathroom.png' Title='حمامات' Paragraph='ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى' />
                                <Feature Image='./assets/swimming.png' Title='مسابح' Paragraph='ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى' />

                            </div>
                        </div>
                    </div>
                    <div className='projectpage__row4'>
                        <div>أنواع الشقق في المشروع</div>
                        <div>
                            <a href='#'><span>شقق شمالية</span></a>
                            <a href='#'><span>شقق جنوبية</span></a>
                            <a href='#'><span>شقق روف</span></a>
                            <a href='#'><span>شقق غربية</span></a>
                            <a href='#'><span>شقق شرقية</span></a>
                            <a href='#'><span>شقق أرضية</span></a>
                        </div>
                    </div>
                    <div className='projectpage__row5'>
                        <div>فيديو المشروع</div>
                        <div className='projectpage__row5__video' onClick={this.runOrPauseVideo}>
                            {!this.state.controled && <input className='projectpage__runvideobutton'/>}
                            <ReactPlayer url={[{src: './assets/videoplayback.mp4', type: 'video/webm'}]} playing={this.state.run} controls={this.state.controled}/>
                        </div>
                    </div>
                </div>
                <div className='prjectpage__panorama'>

                </div>
            </div>
        );
    }
}



export default ProjectPage;
