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
import {handelNewsInputsChange, handleNewsTypeChange} from '../../reducers/newsReducers/transferNewsId';
import SweetAlert from 'react-bootstrap-sweetalert';
import { DropdownButton, MenuItem } from "react-bootstrap";


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
    const {newsData} = this.props;
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
    window.location.pathname = '/mediacenter';
  }
  closeWindow= () => {
     document.getElementById('editing_div').style.display = "none";;
  }
  changeTitleOfDrowdown = e => {
    this.setState({
        projectType: e.target.innerText
    });
    const { handleNewsTypeChange } = this.props;
    handleNewsTypeChange(e.target.innerText)
}
  handleInputChange = e => {
    const {handelNewsInputsChange} = this.props;
    handelNewsInputsChange(e.target)
  }

  render() {
    const {newsData} = this.props;
    const close = <Tooltip id="edit_tooltip">Close Edit window</Tooltip>;
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
                  <Row>
                  <Col md={6}>
                    <h5 className='edit-news-type'>نوع الخبر</h5>
                    <DropdownButton bsSize="small" title={newsData[0].type} id="dropdown-size-small2" required>
                        <MenuItem eventKey="1" value='خبر' onClick={this.changeTitleOfDrowdown}>خبر</MenuItem>
                        <MenuItem eventKey="2" value='بيان صحفي' onClick={this.changeTitleOfDrowdown}>بيان صحفي</MenuItem>
                        <MenuItem eventKey="3" value='تقرير سنوي' onClick={this.changeTitleOfDrowdown}>تقرير سنوي</MenuItem>
                    </DropdownButton>
                    </Col>
                    <Col md={6}>
                    <FormInputs
                    ncols={["col-md-12"]}
                    proprieties={[
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
                    </Col>
                </Row>
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
                    this.props.isFetching ?
                      <center style={{marginBottom:'10px'}}><BarLoader width='150' height='7' color='4A90E2'/></center>
                      : <div style={{color: "4A90E2", fontSize: "18px", textAlign:'center', marginBottom:'15px'}}>{this.props.message}</div>
                }
                {
                  this.props.isUpdateSuccess?
                    <SweetAlert 
                              success 
                              title="تم تعديل الخبر بنجاح" 
                              onConfirm={this.loadWindow}>
                    </SweetAlert>:<div></div>

                }
              <Button bsStyle="info" block type="submit">
                احفظ التعديلات
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
      isFetchingNewsData: state.editnewsData.message,
      isUpdateSuccess: state.editnewsData.isUpdateSuccess,
      };
  };

  const mapDispatchToProps = {
    updateNewsData,
    uploadFiles,
    handelNewsInputsChange,
    handleNewsTypeChange
  }

  export default connect(mapStateToProps, mapDispatchToProps)(EditSection);
