import React, { Component } from "react";
import { Grid, Row, Col, Button, Table ,FormGroup, ControlLabel, FormControl} from "react-bootstrap";
import { StatsCard } from "../../components/StatsCard/StatsCard.jsx";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import CustomButton from "../../components/CustomButton/CustomButton.jsx";

import { FormInputs } from "../../components/FormInputs/FormInputs.jsx";

import News from "./News.jsx";
import Card from "../../components/Card/Card.jsx";
import { thArray, tdArray } from "../../variables/Variables.jsx";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import getAllNews from '../../actions/getNewsAction';
import EditSection from './EditNews';



class MediaCenter extends Component {
  constructor(){
    super();
    this.state ={data:''}

  }
  componentDidMount() {
    const { getAllNews } = this.props;
    getAllNews();

  }
  reRender(){
    this.componentDidMount;
    this.setState({
        data: this.props.AllNews.data
    });
  }

  render() {
    {
      this.props.AllNews.data ?
        this.state={
            data: this.props.AllNews.data
        }
      : this.state={data:''}
    }
    const {AllNews , idNewsToEdit , isFetching, editMessage} = this.props;
    var newsDataToEdit ;
    {
      ! idNewsToEdit ? <div/> :
       newsDataToEdit = AllNews.data.filter(e => e._id === idNewsToEdit);
    }
    // this.state = newsDataToEdit;
    console.log(this.state,'stttttattatt');

    return (
      <div className="content">
        {
          editMessage ? this.reRender:

          <Grid fluid>
            <Row>
              <Col md ={6} style={{float:'right'}}>
                <Card
                  title="News"
                  category="Media Center News"
                  stats="Updated 3 minutes ago"
                  statsIcon="fa fa-history"
                  content={
                    <div className="table-full-width">
                      <table className="table">
                        <News allNews={this.state.data}/>
                      </table>
                    </div>
                  }
                  />
              </Col>
              {
                newsDataToEdit && ! isFetching?
                <EditSection data={newsDataToEdit[0]}/>

                : <div/>
            }

          </Row>
        </Grid>
        }
      </div>
    );
  }
}

MediaCenter.propTypes = {
    getAllNews: PropTypes.func
}
const mapStateToProps = state => {
  return {
    AllNews: state.allNews.newsData,
    idNewsToEdit : state.transferIdReducer.id,
    isFetching : state.transferIdReducer.isFetching,
    editMessage: state.editnewsData.message
    };
};

const mapDispatchToProps = {
  getAllNews
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaCenter);






// <Col md={6} id='editing_div'>
//   <OverlayTrigger placement="top" overlay={close}>
//     <CustomButton bsStyle="info" simple type="button" bsSize="xs" onClick={this.closeWindow}>
//       <i className="fa fa-close" />
//     </CustomButton>
//   </OverlayTrigger>
//   <Card
//     title=" عدل الخبر من هنا  "
//     content={
//       <form method="post" encType="multipart/form-data" onSubmit={this.onSubmit}>
//         <FormInputs
//           ncols={["col-md-5", "col-md-7"]}
//           proprieties={[
//
//             {
//               label: "نوع الخبر",
//               type: "text",
//               bsClass: "form-control",
//               placeholder: "ادخل هنا نوع الخبر: مثال (خبر , إعلان)",
//               required: true,
//               defaultValue: newsDataToEdit[0].type,
//               onChange: this.handleTypeInputChange
//             },
//             {
//               label: "عنوان الخبر",
//               type: "text",
//               bsClass: "form-control",
//               placeholder: "ادخل هنا عنوان الخبر",
//               required: true,
//               defaultValue: newsDataToEdit[0].name,
//               onChange: this.handleTitInputChange
//
//             }
//           ]}
//         />
//         <Row>
//           <Col md={12}>
//             <FormGroup>
//               <ControlLabel>وصف الخبر/الإعلان</ControlLabel>
//               <FormControl
//                 rows="5"
//                 componentClass="textarea"
//                 bsClass="form-control"
//                 placeholder="أدخل هنا وصف الخبر/الإعلان"
//                 defaultValue={newsDataToEdit[0].discription}
//                 onChange={this.handleDesInputChange}
//               />
//             </FormGroup>
//           </Col>
//         </Row>
//         <FormInputs
//           ncols={["col-md-12"]}
//           proprieties={[
//
//             {
//               label: "أدخل هنا الصورة الرئيسية",
//               type: "file",
//               bsClass: "form-control",
//               id:'mainImage',
//               onChange:this.onSelectedMainImage,
//               required: true,
//
//             }
//           ]}
//           />
//           <FormInputs
//           ncols={["col-md-12"]}
//           proprieties={[
//             {
//               label: "أدخل هنا الصور الثانوية",
//               type: "file",
//               bsClass: "form-control",
//               id:'secondaryImages',
//               onChange: this.onSelectedMultipleImages,
//               multiple:true
//             }
//           ]}
//           />
//           <FormInputs
//           ncols={["col-md-12"]}
//           proprieties={[
//             {
//               label: "أدخل هنا الفيديو (إن وجد)",
//               type: "file",
//               bsClass: "form-control",
//               id:'newsVideo',
//               onChange: this.onSelectedVideo
//             }
//           ]}
//           />
//
//
//         <Button bsStyle="info" block type="submit">
//           Update News
//         </Button>
//       </form>
//     }
//   />
// </Col>
//
