import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Button, Table ,FormGroup, ControlLabel, FormControl} from "react-bootstrap";
import { BarLoader } from 'react-spinners';
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import CustomButton from "../../components/CustomButton/CustomButton.jsx";
import { FormInputs } from "../../components/FormInputs/FormInputs.jsx";
import Card from "../../components/Card/Card.jsx";
import updateNewsData from '../../actions/newsActions/editNewsAction';
import uploadFiles from '../../actions/uploadFilesAction';



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

    updateNewsData(this.state);
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
  
  closeWindow= () => {
     document.getElementById('editing_div').style.display = "none";;
  }

  componentWillMount(){
    this.setState({
        data: this.props.data
    });
  }


  componentDidUpdate(prevProps){
      if(prevProps.data !== this.props.data){
          this.setState({
              data: this.props.data
          });
          this.forceUpdate();
      }
  }

  componentWillReceiveProps(nextProps){
    this.setState({data: nextProps.data});
  }

  render() {
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
            <form method="post" encType="multipart/form-data" onSubmit={this.onSubmit} id={this.state.data._id}>
              <FormInputs
                ncols={["col-md-5", "col-md-7"]}
                proprieties={[

                  {
                    label: "نوع الخبر",
                    type: "text",
                    bsClass: "form-control",
                    placeholder: "ادخل هنا نوع الخبر: مثال (خبر , إعلان)",
                    required: true,
                    defaultValue: this.state.data.type,
                    onChange: this.handleInputChange,
                    name: 'newsType'
                  },
                  {
                    label: "عنوان الخبر",
                    type: "text",
                    bsClass: "form-control",
                    placeholder: "ادخل هنا عنوان الخبر",
                    required: true,
                    defaultValue: this.state.data.name,
                    onChange: this.handleInputChange,
                    name: 'newsTitle'

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
                      defaultValue={this.state.data.discription}
                      onChange={this.handleInputChange}
                      name= 'newsDescription'
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
                    required: true,

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
                    multiple:true
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
                    onChange: this.onSelectedVideo
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
      isFetching: state.filesUrl.isFetching,
      message : state.filesUrl.message,
      isFetchingUpdate: state.editnewsData.isFetching,
      messageUpdate : state.editnewsData.message,
      };
  };

  const mapDispatchToProps = {
    updateNewsData,
    uploadFiles
  }

  export default connect(mapStateToProps, mapDispatchToProps)(EditSection);
