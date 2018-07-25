import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Grid, Row, Col, Button, Table ,FormGroup, ControlLabel, FormControl} from "react-bootstrap";
import { BarLoader } from 'react-spinners';
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import CustomButton from "../../components/CustomButton/CustomButton.jsx";
import { FormInputs } from '../../components/FormInputs/FormInputs';
import Card from "../../components/Card/Card.jsx";
import editProject from '../../actions/projectsActions/editProjectAction';
import uploadFiles from '../../actions/uploadFilesAction';

class EditProfile extends Component {
    constructor(props){
        super(props);
        this.state ={
            city:'',
            street:'',
            district:'',
            projData:[]
        }
    }
    closeWindow= () => {
        document.getElementById('editing_project').style.display = "none";;
    }

    onSubmit = e => { 
        e.preventDefault();
        // const newAddress = {
        //     street: e.target[1].value,
        //     district: e.target[2].value,
        //     city: e.target[3].value
        // }
        // this.state = {
        //         _id: e.target.id,
        //         name: e.target[0].value,
        //         address: newAddress,
        //         description: e.target[4].value,
        //         features: e.target[5].value
        // }
        this.handleTypesOfApartments()
        console.log(this.state, ' state in editpr oject');
        
        const { editProject } = this.props

        editProject(this.state)
    }


    // handleInputChange = (e) =>{
    //     f(e.target.name === 'apartmentType'){        
    //         let arr = []
    //         arr.push(e.target.value);
    //         this.setState({
    //         typesOfApartments: arr
    //         })
    //     }
    //     if(e.target.name === 'name'){
    //     this.setState({
    //         name: e.target.value
    //     })
    //     }
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     })
    // }

    onPlusClick = e =>{
        const div = document.querySelector(".apartmentType_div");
        var node = document.createElement("input");
        node.type = "text"
        node.placeholder = "إضافة نوع أخر من الشقق" 
        node.className = "apartmentType_inputText";
        div.appendChild(node)
    }

    handleTypesOfApartments = e =>{
        const arrTypesOfApartment = Array.from(document.querySelectorAll('.apartmentType_inputText'));
        const realTypes = arrTypesOfApartment.map(e =>{return e.value});
        this.state.typesOfApartments = realTypes;
    }

        
    handleFilesUpload = event => {
        const file = event.target.files[0];
        const fileName = event.target.files[0].name;
        
        const data = new FormData();
        data.append('image', file);
        data.append('name', fileName);
        const { uploadFiles } = this.props;
        uploadFiles(event.target.name ,data)
    }
    onSelectedMultipleImages = (e) => {
        const photos = Array.from(e.target.files);
        const fd = new FormData();
        photos.forEach((element,i) => {
        const fileName = element.name;
        const file = element;
        fd.append('image', file);
        fd.append('name', fileName);
        })
        const { uploadFiles } = this.props;
        uploadFiles('secondaryImages', fd)
    }

    onClickRadioBtn = e => {
    this.state.star ? this.setState({star: false}) : this.setState({star: true})
    }


    onChangeInput = e => {
        this.setState({
            
                ...this.state,
                [e.target.name]: e.target.value
            
        })
    }

    componentDidMount(){
        this.setState({
            name:this.props.projData[0].name,
            _id:this.props.projData[0]._id,
            city:this.props.projData[0].address.city,
            street:this.props.projData[0].address.street,
            district:this.props.projData[0].address.district,
            description:this.props.projData[0].description,
            features:this.props.projData[0].features,
            images:this.props.projData[0].images,
            image360Url:this.props.projData[0].image360Url,
            videoUrl:this.props.projData[0].videoUrl




        })
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps, 'nextprops');
        
        this.setState({
            projData: nextProps.projData
        })
    }

    render(){
        const {projectData, isFetching} = this.props;
        console.log(this.state, ' state is here')
        const close = <Tooltip id="edit_tooltip">Close Edit window</Tooltip>;        
        return(
            isFetching && this.state.projData.length ?
            <Col md={6} id='editing_project'>
                <OverlayTrigger placement="top" overlay={close}>
                    <CustomButton bsStyle="info" simple type="button" bsSize="xs" onClick={this.closeWindow}>
                        <i className="fa fa-close" />
                    </CustomButton>
                </OverlayTrigger>
                <Card 
                    title=" عدل المشروع من هنا"
                    content = {
                    <form method="post" encType="multipart/form-data" onSubmit={this.onSubmit} id={this.state._id}>
                        <FormInputs
                            ncols={["col-md-12"]}
                            proprieties={[
                                {
                                type: "text",
                                bsClass: "form-control",
                                placeholder: "ادخل اسم المشروع",
                                required: true,
                                name:"name",
                                value: this.state.name,
                                onChange: this.onChangeInput
                                }
                        ]} />
                        <h5>مكان المشروع</h5>
                        <FormInputs
                        ncols={["col-md-4", "col-md-4", "col-md-4"]}
                            proprieties={[
                                {
                                label: "اسم الشارع",
                                type: "text",
                                bsClass: "form-control",
                                placeholder: "ادخل اسم الشارع",
                                required: true,
                                name:"street",
                                value: this.state.street,
                                onChange: this.onChangeInput                            

                                },
                                {
                                label: "اسم الحي",
                                type: "text",
                                bsClass: "form-control",
                                placeholder: "ادخل اسم الحي",
                                required: true,
                                name:"district",
                                value: this.state.district,
                                onChange: this.onChangeInput
                                },
                                {
                                label: "اسم المدينة",
                                type: "text",
                                bsClass: "form-control",
                                placeholder: "ادخل اسم المدينة",
                                required: true,
                                name:"city",
                                value: this.state.city,
                                onChange: this.onChangeInput

                                }
                            ]}
                        />
                        <Row>
                        <Col md={12}>
                            <FormGroup>
                            <h5>وصف المشروع</h5>
                            <FormControl
                                rows="5"
                                componentClass="textarea"
                                bsClass="form-control"
                                placeholder="أدخل هنا وصف للمشروع"
                                required
                                name="description"
                                onChange={this.onChangeInput}
                                value={this.state.description}
                            />
                            </FormGroup>
                        </Col>
                        </Row>
                        <Row>
                        <Col md={12}>
                            <FormGroup>
                            <h5>مميزات المشروع</h5>
                            <FormControl
                                rows="5"
                                componentClass="textarea"
                                bsClass="form-control"
                                placeholder="أدخل هنا مميزات المشروع"
                                required
                                name="features"
                                onChange={this.onChangeInput}
                                value={this.state.features}

                            />
                            </FormGroup>
                        </Col>
                        </Row>
                        <Row>
                        <div className='apartmentType'>
                            <h5>أدخل هنا أنواع الشقق في المشروع</h5>
                            <div className='apartmentType_div'>
                            <div>
                                <input type='text' className='apartmentType_inputText' placeholder='نوع الشقة مثال: شقة غربية ,شقق ارضية' />
                                <input type="button" className='apartmentType_inputButton' name="button" onClick={this.onPlusClick}/>
                            </div>
                            </div>
                        </div>
                        </Row>
                        <h5>هل يعد المشروع من ضمن المشاريع المميزة</h5>
                        <div className="radio">
                            <input id='radioBtn' name="radioBtn" type="radio" checked={this.state.projData[0].star} onClick={this.onClickRadioBtn}/>
                            <label htmlFor='radioBtn'>يعد من المشاريع المميزة ؟</label>
                        </div>
                        <h5>صور المشروع</h5>
                        <FormInputs
                        ncols={["col-md-8"]}
                        proprieties={[                        
                            {
                            label: "أدخل هنا الصور",
                            type: "file",
                            bsClass: "form-control",
                            id:'secondaryImages',
                            onChange: this.onSelectedMultipleImages,
                            multiple:true,
                            defaultValue: this.state.images
                            }                       
                        ]}
                        />
                        <h5>صورة 360 درجة</h5>
                        <FormInputs
                            ncols={["col-md-8"]}
                            proprieties={[                        
                            {
                                label: "أدخل هنا صورة للمشروع ب360 درجة",
                                type: "file",
                                bsClass: "form-control",
                                name:"image360Url",
                                onChange:this.handleFilesUpload,
                                defaultValue:this.state.image360Url
                            }                        
                            ]}
                            />
                        <h5>فيديو عن المشروع</h5>
                        <FormInputs
                            ncols={["col-md-8"]}
                            proprieties={[                        
                            {
                                label: "أدخل هنا الفيديو (إن وجد)",
                                type: "file",
                                bsClass: "form-control",
                                name:"video",
                                onChange:this.handleFilesUpload,
                                defaultValue:this.state.videoUrl
                            }                        
                            ]}
                            />
                        <Button bsStyle="info" block type="submit">
                            إحفظ التعديلات
                        </Button>
                        </form>
                    }
                    
                />
            </Col>
        : <div></div>
        )
    }
}


const mapStateToProps = state => {
    return {
        projectData : state.transferIdReducer.projData,
        isFetching: state.transferIdReducer.isFetching
    };
};

const mapDispatchToProps = {
    editProject,
    uploadFiles
}

  export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);