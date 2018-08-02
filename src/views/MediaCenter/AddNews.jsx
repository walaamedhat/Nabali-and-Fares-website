import React, { Component } from "react";
import { Grid, Row, Col, Button, Table ,FormGroup, ControlLabel, FormControl} from "react-bootstrap";
import { FormInputs } from "../../components/FormInputs/FormInputs.jsx";
import Card from "../../components/Card/Card.jsx";
import { connect } from 'react-redux';
import { BarLoader } from 'react-spinners';
import { DropdownButton, MenuItem } from "react-bootstrap";
import SweetAlert from 'react-bootstrap-sweetalert';


import addNewsData from '../../actions/newsActions/addNewsAction';
import uploadFiles from '../../actions/uploadFilesAction';

class AddNews extends Component {
  constructor(props){
    super(props);
    this.state = {
      newsType:'نوع المقال',
      newsTitle:"",
      newsDescription:"",
      mainImage:null,
      secondaryImages:[],
      video:null,
    }
  }

  onSubmit = (e) =>{
    e.preventDefault()
    const { addNewsData } = this.props;
    if(this.state.newsType === 'نوع المقال'){
      alert('اختار نوع المقال')
    }else{
      addNewsData(this.state);
    }
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

  loadWindow = () =>{
    window.location.pathname = '/mediacenter';
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

  changeTitleOfDrowdown = e =>{
  
    this.setState({
      newsType: e.target.innerText
    });

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
                    <Row className='dropdown-with-input'>
                    <Col md={6}>
                      <DropdownButton bsSize="small" title={this.state.newsType} id="dropdown-size-small" required>
                        <MenuItem eventKey="1" value='خبر' onClick={this.changeTitleOfDrowdown}>خبر</MenuItem>
                        <MenuItem eventKey="2" value='بيان صحفي' onClick={this.changeTitleOfDrowdown}>بيان صحفي</MenuItem>
                        <MenuItem eventKey="3" value='تقرير سنوي' onClick={this.changeTitleOfDrowdown}>تقرير سنوي</MenuItem>
                      </DropdownButton>
                    </Col>
                    <Col md={6}>
                      <FormInputs
                        ncols={["col-md-12"]}
                        proprieties={[
                          // {
                          //   label: "نوع الخبر",
                          //   type: "text",
                          //   bsClass: "form-control",
                          //   placeholder: "ادخل هنا نوع الخبر: مثال (خبر , إعلان)",
                          //   required: true,
                          //   onChange: this.handleTypeInputChange
                          // },
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
                    </Col>
                    </Row>
                    <Row>
                      <Col md={3}></Col>
                      <Col md={9}>
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
                    this.props.isFetching || this.props.isFetchingAddNews ?
                      <center style={{marginBottom:'10px'}}><BarLoader width='150' height='7' color='4A90E2'/></center>
                        : this.props.messageUpdate ?
                      <div style={{color: "4A90E2", fontSize: "18px", textAlign:'center', marginBottom:'15px'}}>{this.props.messageAddNews}</div>
                      : <div style={{color: "4A90E2", fontSize: "18px", textAlign:'center', marginBottom:'15px'}}>{this.props.message}</div>
                   }
                    <Button bsStyle="info" block type="submit">
                      Add News
                    </Button>
                    {
                       this.props.isAddingDone ?
                       <SweetAlert 
                       success 
                       title="تم إضاقة المشروع بنجاح" 
                       onConfirm={this.loadWindow}>
                       </SweetAlert>
                       :<div></div>
                     }
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
    isAddingDone: state.newsData.isAddingSuccess,
    messageAddNews: state.newsData.newsData.message
  }
}

const mapDispatchToProps = {
  addNewsData,
  uploadFiles
}



export default connect(mapStateToProps, mapDispatchToProps)(AddNews);
