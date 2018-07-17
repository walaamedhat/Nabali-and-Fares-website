import React, {Component} from 'react';
import { connect } from 'react-redux';
import fetchAllProjects from '../../../actions/ourprojectsAction';
import PropTypes from 'prop-types';

import './index.css';

class NewProjects extends Component {
    constructor(props){
        super(props);

        this.state = {
            projects:[]
        }
    }
    componentDidMount(){
        const { fetchAllProjects } = this.props;
        fetchAllProjects();
    }
    render(){
        return(
        <div className='newprojects'>
            <div className='newprojects__top'>
                <div className='newprojects__title'>جديد مشاريعنا</div>
                <div className='newprojects__arrows'>
                    <span><i class="fas fa-arrow-right"></i></span>
                    <span><i class="fas fa-arrow-left"></i></span>
                </div>
            </div>
            <div className='newprojects__down'>
                <div className='newprojects__project'>
                    <img src='./assets/1.png' />
                    <div className='project__title'>مشروع سكاي تاورز</div>
                    <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.</p>
                    <div className='newprojects__project__contents'>
                        <div className='newprojects__project__col1'>
                            <div className='rooms'>
                                <img src='./assets/rooms.png'/>
                                <span>غرف</span>
                            </div>
                            <div className='bathrooms'>
                                <img src='./assets/bathroom.png'/>
                                <span>حمامات</span>
                            </div>
                            <div className='kitchen'>
                                <img src='./assets/kitchen.png'/>
                                <span>مطبخ</span>
                            </div>
                        </div>
                        <div className='newprojects__project__col2'>
                        <div className='tennis'>
                                <img src='./assets/tennis.png'/>
                                <span>نوادي رياضية</span>
                            </div>
                            <div className='swimming'>
                                <img src='./assets/swimming.png'/>
                                <span>مسابح</span>
                            </div>
                            <div className='gardens'>
                                <img src='./assets/gardens.png'/>
                                <span>حدائق</span>
                            </div>
                        </div>
                    </div>
                    <div className='newprojects__project__seemore'>
                        عرض المزيد
                        <span><i class="fas fa-arrow-left"></i></span>
                    </div>
                </div>
                <div className='newprojects__project'></div>
                <div className='newprojects__project'></div>
            </div>

        </div>
        )
    }
}
NewProjects.propTypes = {
    fetchAllProjects: PropTypes.func
}
const mapStateToProps = state =>{
    return{

    }
}

const mapDispatchToProps = {
    fetchAllProjects
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProjects);
