import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Button, Table ,FormGroup, ControlLabel, FormControl} from "react-bootstrap";
import { BarLoader } from 'react-spinners';
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import CustomButton from "../../components/CustomButton/CustomButton.jsx";
import { FormInputs } from "../../components/FormInputs/FormInputs.jsx";
import Card from "../../components/Card/Card.jsx";
import updateNewsData from '../../actions/newsActions/editNewsAction';
import uploadFiles from '../../actions/uploadFilesAction';
import {handelNewsInputsChange} from '../../reducers/newsReducers/transferNewsId';
import SweetAlert from 'react-bootstrap-sweetalert';


class EditSection extends Component {
  constructor(){
    super();
    this.state = {
      newsType:"",
      newsTitle:"",
      newsDescription:"",
      mainImage:null,
      secondaryImages:[],
      video:null
    }
  }

  onSubmit = (e) =>{
    e.preventDefault()
    this.state ={
      _id : e.target.id,
      [e.target[0].name]: e.target[0].value,
      [e.target[1].name]: e.target[1].value,
      [e.target[2].name]: e.target[2].value
    }
    const { updateNewsData } = this.props;
    console.log(
      'this.state',
    );
    const {newsData} = this.props;
    console.log(
      'this.newsData', newsData
    );
    updateNewsData(newsData);
  }


  onSelectedMainImage = (event) => {
    const file = event.target.files[0];
    const fileName = event.target.files[0].name;

    const data = new FormData();
    data.append('image', file);
    data.append('name', fileName);
    const { uploadFiles } = this.props;
    uploadFiles('mainImage', data)

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
    uploadFiles('secondaryImages',fd)

}
  onSelectedVideo = (event) => {
    const file = event.target.files[0];
    const fileName = event.target.files[0].name;
    const data = new FormData();
    data.append('image', file);
    data.append('name', fileName);
    const { uploadFiles } = this.props;
    uploadFiles('video',data)

  }
  loadWindow = () =>{
    window.location.pathname = '/ourprojects';
  }
  closeWindow= () => {
     document.getElementById('editing_div').style.display = "none";;
  }

  handleInputChange = e => {
    const {handelNewsInputsChange} = this.props;
    handelNewsInputsChange(e.target)
  }

  render() {
    const {newsData} = this.props;
    const close = <Tooltip id="edit_tooltip">Close Edit window</Tooltip>;
    console.log(this.props.isUpdateSuccess,' this.props.isUpdated');
    
    return(

      <Col md={6} id='editing_div'>
        <OverlayTrigger placement="top" overlay={close}>
          <CustomButton bsStyle="info" simple type="button" bsSize="xs" onClick={this.closeWindow}>
            <i className="fa fa-close" />
          </CustomButton>
        </OverlayTrigger>
        <Card
          title=" عدل الخبر من هنا  "
          content={
            <form method="post" encType="multipart/form-data" onSubmit={this.onSubmit} id={newsData[0]._id}>
              <FormInputs
                ncols={["col-md-5", "col-md-7"]}
                proprieties={[

                  {
                    label: "نوع الخبر",
                    type: "text",
                    bsClass: "form-control",
                    placeholder: "ادخل هنا نوع الخبر: مثال (خبر , إعلان)",
                    required: true,
                    value: newsData[0].type,
                    onChange: this.handleInputChange,
                    name: 'type'
                  },
                  {
                    label: "عنوان الخبر",
                    type: "text",
                    bsClass: "form-control",
                    placeholder: "ادخل هنا عنوان الخبر",
                    required: true,
                    value: newsData[0].name,
                    onChange: this.handleInputChange,
                    name: 'name'

                  }
                ]}
              />
              <Row>
                <Col md={12}>
                  <FormGroup>
                    <ControlLabel>وصف الخبر/الإعلان</ControlLabel>
                    <FormControl
                      rows="5"
                      componentClass="textarea"
                      bsClass="form-control"
                      placeholder="أدخل هنا وصف الخبر/الإعلان"
                      value={newsData[0].discription}
                      onChange={this.handleInputChange}
                      name= 'discription'
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormInputs
                ncols={["col-md-12"]}
                proprieties={[

                  {
                    label: "أدخل هنا الصورة الرئيسية",
                    type: "file",
                    bsClass: "form-control",
                    id:'mainImage',
                    onChange:this.onSelectedMainImage,
                    defaultValue:newsData[0].mainImage

                  }
                ]}
                />
                <FormInputs
                ncols={["col-md-12"]}
                proprieties={[
                  {
                    label: "أدخل هنا الصور الثانوية",
                    type: "file",
                    bsClass: "form-control",
                    id:'secondaryImages',
                    onChange: this.onSelectedMultipleImages,
                    multiple:true,
                    defaultValue:newsData[0].secondaryImages
                  }
                ]}
                />
                <FormInputs
                ncols={["col-md-12"]}
                proprieties={[
                  {
                    label: "أدخل هنا الفيديو (إن وجد)",
                    type: "file",
                    bsClass: "form-control",
                    id:'newsVideo',
                    onChange: this.onSelectedVideo,
                    defaultValue: newsData[0].video
                  }
                ]}
                />
                {
                    this.props.isFetching || this.props.isFetchingUpdate ?
                      <center style={{marginBottom:'10px'}}><BarLoader width='150' height='7' color='4A90E2'/></center>
                        : this.props.messageUpdate ?
                      <div style={{color: "4A90E2", fontSize: "18px", textAlign:'center', marginBottom:'15px'}}>{this.props.messageUpdate}</div>
                      : <div style={{color: "4A90E2", fontSize: "18px", textAlign:'center', marginBottom:'15px'}}>{this.props.message}</div>
                }

                {
                    this.props.isFetching ?
                    <center style={{marginBottom:'10px'}}><BarLoader width='150' height='7' color='4A90E2'/></center>
                    :<div style={{color: "4A90E2", fontSize: "18px", textAlign:'center', marginBottom:'15px'}}>{this.props.messageUpload}</div>
                }
                {
                  this.props.isUpdateSuccess?
                  <div>successsssssssssssssssss</div>
                  :<div></div>
                }
              <Button bsStyle="info" block type="submit">
                Update News
              </Button>
            </form>
          }
        />
      </Col>

    )

  }

}

const mapStateToProps = state => {
    return {
      newsData : state.editnewsData.newsData,
      isFetching: state.filesUrl.isFetching,
      message : state.filesUrl.message,
      isUpdateSuccess: state.editnewsData.isUpdateSuccess,
      messageUpdate : state.editnewsData.message,
      };
  };

  const mapDispatchToProps = {
    updateNewsData,
    uploadFiles,
    handelNewsInputsChange
  }

  export default connect(mapStateToProps, mapDispatchToProps)(EditSection);
