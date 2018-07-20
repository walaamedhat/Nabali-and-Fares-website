import React, { Component } from "react";
import { Grid, Row, Col, Button, Table ,FormGroup, ControlLabel, FormControl} from "react-bootstrap";
import { FormInputs } from "../../components/FormInputs/FormInputs.jsx";
import Card from "../../components/Card/Card.jsx";
import { thArray, tdArray } from "../../variables/Variables.jsx";
import { connect } from 'react-redux';
import { BarLoader } from 'react-spinners';
import Popup from 'react-popup';


import addNewsData from '../../actions/addNewsAction';
import uploadFiles from '../../actions/uploadFilesAction';

class AddNews extends Component {
  constructor(props){
    super(props);
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
    const { addNewsData } = this.props;
    addNewsData(this.state);
  }
  handleTypeInputChange = (e) =>{
    this.setState({
      newsType: e.target.value
    })
  }
  handleTitInputChange = (e) =>{
    this.setState({
      newsTitle: e.target.value
    })
  }
  handleDesInputChange = (e) =>{
    this.setState({
      newsDescription: e.target.value
    })
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

  render() {
    const {isFetching, isFetchingAddNews , messageAddNews} = this.props;
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="إضف هنا في المركز الإعلامي"
                content={
                  <form method="post" encType="multipart/form-data" onSubmit={this.onSubmit}>
                    <FormInputs
                      ncols={["col-md-5", "col-md-7"]}
                      proprieties={[

                        {
                          label: "نوع الخبر",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "ادخل هنا نوع الخبر: مثال (خبر , إعلان)",
                          required: true,
                          onChange: this.handleTypeInputChange
                        },
                        {
                          label: "عنوان الخبر",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "ادخل هنا عنوان الخبر",
                          required: true,
                          onChange: this.handleTitInputChange

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
                            required
                            onChange={this.handleDesInputChange}
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
                          required: true
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
                        isFetching ?
                          <center style={{marginBottom:'10px'}}><BarLoader width='150' height='7' color='4A90E2'/></center>
                            :
                          <div style={{color: "4A90E2", fontSize: "18px", textAlign:'center', marginBottom:'15px'}}>{this.props.message}</div>
                    }


                    <Button bsStyle="info" block type="submit">
                      Add News
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
    message : state.filesUrl.message,
    isFetchingAddNews: state.newsData.newsData.isFetching,
    messageAddNews: state.newsData.newsData.message
  }
}

const mapDispatchToProps = {
  addNewsData,
  uploadFiles
}



export default connect(mapStateToProps, mapDispatchToProps)(AddNews);
