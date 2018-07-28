import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { RingLoader } from 'react-spinners';

import projectData from '../../actions/getProjectData';
import Header from '../header/index';
import Feature from './feature';
import ReactPlayer from 'react-player';
import Map from '../map/Map';
import Gallary from '../Gallary';



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
      const { projectData } = this.props;
      projectData(this.props.match.params.project_id);
    }

    render(){
      const {isFetching , data} = this.props;
      console.log(isFetching,'data');
        return(
            <div className='pojectpage'>
                <Header Logo='../assets/nabali-fares-colored.png' WhereAmI='ourprojectpage'/>
                {
                  isFetching || data.length === 0 ? <center style={{marginBottom:'10px'}}><RingLoader width='150' height='7' color='4A90E2'/></center>:
                <div>
                  <Gallary images={data[0].images}/>
                  <div className='projectpage__details'>
                      <div className='projectpage__row1'>
                          <h1 className='project__page__projecttitle'>
                              {data[0].name}
                          </h1>
                          <div className='project__page__street'>
                              <span>{data[0].address[0]}</span>
                              <span>{data[0].address[1]} - {data[0].address[2]}</span>
                          </div>
                      </div>
                      <div className='projectpage__row2'>
                          <div>وصف المشروع</div>
                          <div>
                            {data[0].description}
                          </div>
                      </div>
                      <div className='projectpage__row3'>
                          <div>مميزات المشروع</div>
                          <div className='projectpage__features'>
                            <div>{data[0].features}</div>
                              <div className='projectpage__CompFeature'>
                                  <Feature Image='../assets/rooms.png' Title='غرف' Paragraph='ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى' />
                                  <Feature Image='../assets/tennis.png' Title='نوادي رياضية' Paragraph='ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى' />
                                  <Feature Image='../assets/kitchen.png' Title='مطبخ' Paragraph='ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى' />
                                  <Feature Image='../assets/gardens.png' Title='حدائق' Paragraph='ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى' />
                                  <Feature Image='../assets/bathroom.png' Title='حمامات' Paragraph='ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى' />
                                  <Feature Image='../assets/swimming.png' Title='مسابح' Paragraph='ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى' />

                              </div>
                          </div>
                      </div>
                      <div className='projectpage__row4'>
                          <div>أنواع الشقق في المشروع</div>
                          <div>
                            {
                                data[0].typesOfApartments.map(e => {
                                return <a href='#'><span> {e}</span></a>

                              })
                            }

                          </div>
                      </div>
                      <div className='projectpage__row5'>
                          <div>فيديو المشروع</div>
                          <div className='projectpage__row5__video' onClick={this.runOrPauseVideo}>
                              {!this.state.controled && <input className='projectpage__runvideobutton'/>}
                              <ReactPlayer url={[{src: data[0].videoUrl, type: 'video/webm'}]}
                                youtubeConfig={{ playerVars: { showinfo: 1 } }}
                                 playing={this.state.run} controls={this.state.controled}/>
                          </div>
                      </div>
                  </div>
                  <div className='prjectpage__panorama'>
                    <img style={{width: '100%',height: '360px'}}src={data[0].images[0]}/>
                  </div>

                  <div className='prjectpage__map' style={{display: 'flex',height: '360px',justifyContent:'space-evenly',color:'#8492a6',marginBottom:'114px',marginTop:'35px'}}>
                    <div style={{display:'flex', width:'30%',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                      <h1>مكان المشروع</h1>
                      <div style={{display:'flex' , width:'100%', justifyContent:'space-around'}}>
                        <div>
                          <h5>الشارع</h5>
                          <h5>الحي</h5>
                          <h5>المدينة</h5>
                        </div>
                        <div>
                          <h5>{data[0].address[0]}</h5>
                          <h5>{data[0].address[1]}</h5>
                          <h5>{data[0].address[2]}</h5>
                        </div>
                      </div>
                    </div>
                    <div style={{width:'50%'}}>
                      <Map height='360px' data={data}/>
                    </div>
                  </div>
                </div>
              }
            </div>
        );
    }
}

ProjectPage.propTypes = {
    projectData: PropTypes.func
}
const mapStateToProps = state =>{
    return{
      data : state.projectData.projectData,
      isFetching : state.projectData.isFetching
    }
}

const mapDispatchToProps = {
    projectData
}


export default connect(mapStateToProps,mapDispatchToProps) (ProjectPage);
