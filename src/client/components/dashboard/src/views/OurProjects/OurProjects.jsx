import React, { Component } from "react";
import { Grid, Row, Col, Button, FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import { FormInputs } from "../../components/FormInputs/FormInputs.jsx";
import CustomRadio from "../../components/CustomRadio/CustomRadio.jsx";

import { connect } from 'react-redux';

import Card from "../../components/Card/Card.jsx";
import uploadFiles from '../../actions/uploadFilesAction';
import { BarLoader } from 'react-spinners';

import AddProject from '../../actions/addProjectsAction';

class OurProjects extends Component {
  constructor(props){
    super(props);
    this.state ={
      name:"",
      address:{
        city:"",
        district:"",
        street:""
      },
      description:"",
      features:"",
      typesOfApartments:[],
      images:[],
      image360Url: null,
      videoUrl:null,
      star:false
    }
  }
  onSubmit = (e) => { 
    e.preventDefault();
    console.log(this.state, ' this.state');
    this.handleTypesOfApartments();
    const { AddProject } = this.props;
    AddProject(this.state)
  }


  handleInputChange = (e) =>{
    if(e.target.name === 'city' || e.target.name === 'district' || e.target.name === 'street'){
      this.setState({
        address: {
          ...this.state.address,
          [e.target.name]:e.target.value
        }
      })
    }else if(e.target.name === 'apartmentType'){
        console.log('hey its me', e.target.name);
        
        let arr = []
        console.log(arr, 'arr ');
        arr.push(e.target.value);

        this.setState({
          typesOfApartments: arr
        })
    }
    else{
        this.setState({
        [e.target.name]: e.target.value,
      })
    }
    
  }

  onPlusClick = (e) =>{
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
  render() {    
    const { isFetching, massage } = this.props
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="إضافة مشروع جديد"
                content={
                  <form method="post" encType="multipart/form-data" onSubmit={this.onSubmit}>
                    <h5>اسم المشروع</h5>
                    <FormInputs
                      ncols={["col-md-12"]}
                      proprieties={[
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "ادخل هنا اسم المشروع",
                          required: true,
                          name:"name",
                          onKeyUp: this.handleInputChange
                        }
                      ]}
                    />
                    <h5>مكان المشروع</h5>
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      proprieties={[
                        {
                          label: "اسم الشارع",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "ادخل هنا اسم الشارع",
                          required: true,
                          name:"street",
                          onKeyUp: this.handleInputChange
                        },
                        {
                          label: "اسم الحي",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "ادخل هنا اسم الحي",
                          required: true,
                          name:"district",
                          onKeyUp: this.handleInputChange
                        },
                        {
                          label: "اسم المدينة",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "ادخل هنا اسم المدينة",
                          required: true,
                          name:"city",
                          onKeyUp: this.handleInputChange
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
                            onKeyUp={this.handleInputChange}
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
                            onKeyUp={this.handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <div className='apartmentType'>
                        <h5>أدخل هنا أنواع الشقق في المشروع</h5>
                        <div className='apartmentType_div'>
                          <div>
                            <input type='text' className='apartmentType_inputText' placeholder='نوع الشقة مثال: شقة غربية ,شقق ارضية' onKeyUp={this.handleInputChange}/>
                            <input type="button" className='apartmentType_inputButton' name="button" onClick={this.onPlusClick}/>
                          </div>
                        </div>
                      </div>
                    </Row>
                    <h5>هل يعد المشروع من ضمن المشاريع المميزة</h5>
                    <div className="radio">
                        <input id='radioBtn' name="radioBtn" type="radio" checked={this.state.star} onClick={this.onClickRadioBtn}/>
                        <label htmlFor='radioBtn'>يعد من المشاريع المميزة ؟</label>
                    </div>
                    <h5>صور المشروع</h5>
                    <FormInputs
                      ncols={["col-md-12"]}
                      proprieties={[                        
                        {
                          label: "أدخل هنا الصور",
                          type: "file",
                          bsClass: "form-control",
                          id:'secondaryImages',
                          onChange: this.onSelectedMultipleImages,
                          multiple:true
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
                            onChange:this.handleFilesUpload
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
                            onChange:this.handleFilesUpload
                          }                        
                        ]}
                        />
                        {
                        isFetching ? 
                          <center style={{marginBottom:'10px'}}><BarLoader width='150' height='7' color='4A90E2'/></center> : <div/>
                        }
                      <div style={{color: "4A90E2", fontSize: "18px", textAlign:'center', marginBottom:'15px'}}>{this.props.massage}</div>

                      <Button bsStyle="info" block type="submit">
                        إضافة المشروع الآن
                     </Button>
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {   
  return {
    filesUrl: state.filesUrl,
    isFetching: state.filesUrl.isFetching,
    massage : state.filesUrl.massage
  }
}

const mapDispatchToProps = {
  AddProject,
  uploadFiles
}

export default connect(mapStateToProps, mapDispatchToProps)(OurProjects);
