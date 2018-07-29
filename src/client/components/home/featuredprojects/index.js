import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import { RingLoader } from 'react-spinners';
import  getStarProjects from '../../../actions/getFeaturedAction';

import './index.css';


function SampleNextArrow(props) {
    const {onClick } = props;
    return (
        <span style={{ marginRight: '30px',fontWeight: '100',fontSize: '20px',position: 'absolute',right: '17px', bottom: '-32px'}} onClick={onClick}>
          <i style={{color:'#3da5f9'}} class="fas fa-arrow-left"></i>
        </span>
    )
  }

function SamplePrevArrow(props) {
  const {onClick } = props;
  return (
    <span style={{ marginRight: '30px',fontWeight: '100',fontSize: '20px',position: 'absolute',right: '-30px', bottom: '-32px'}} onClick={onClick}>
      <i style={{color:'#3da5f9'}} class="fas fa-arrow-right"></i>
    </span>
  );
}

class FeaturedProjects extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
      const { getStarProjects } = this.props;
      getStarProjects();
  }

    render(){
      var settings = {
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

     };
      const {starProjects} = this.props;
      console.log(starProjects,'starProjects');
        return(
            <div className='featured__project' style={{position:'relative'}}>
                <span className='featured__project__title0'>مشاريع مميزة</span>
                  {
                    starProjects.isFetching || starProjects.starProjects.length==0?
                    <center style={{marginBottom:'10px'}}><RingLoader width='150' height='7' color='4A90E2'/></center>
                     :
                    <Slider {...settings}>
                      {
                        starProjects.starProjects.map(e =>{
                            return (<div dir='rtl' className='featured__project__divAndimg'>
                            <div className='featured__project__right'>
                              <div className='featured__project__title'>{e.name}</div>
                              <p className='featured__project__paragraph'>
                                {e.description.substring(0, 250)}....
                              </p>
                            </div>
                            <img src={e.images[0]}/>
                          </div>
                        )


                        })
                      }

                    </Slider>
                  }
            </div>
        )
    }
}

FeaturedProjects.propTypes = {
    getStarProjects: PropTypes.func
}
const mapStateToProps = state =>{
    return{
      starProjects : state.starProjects
    }
}

const mapDispatchToProps = {
    getStarProjects
}

export default connect(mapStateToProps,mapDispatchToProps)(FeaturedProjects);




// <div dir='rtl' className='featured__project__divAndimg'>
//     <div className='featured__project__right'>
//         <div className='featured__project__title'>مشروع سكاي تاورز السكني الحديث</div>
//         <p className='featured__project__paragraph'>
//         سكاي تاورز أول مشروع سكني فاخر في مركز المدينة يحتوي على مزايا خاصة لاولئك الذين يسعون للحصول على اسلوب ونمط حياة كما يحلمون.حيث تتوفر كل وسائل الراحة من حدائق خضراء.الى جانب وسائل الراحة الاخرى التي أصبحت تمثل محور اهتمام لكل عائلة في عصرنا الحالي الذي يمتاز بضغط العمل وضيق الوقت مما لا يسمح في كثير من الأحيان لأفراد العائلة بالاستمتاع بوقتهم. سكاي تاورز جعل من المستحيل ممكن.
//         </p>
//
//     </div>
//     <img src='./assets/featuredproject.png'/>
// </div>
