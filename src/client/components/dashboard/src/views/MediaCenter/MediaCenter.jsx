import React, { Component } from "react";
import { Grid, Row, Col, Button, Table ,FormGroup, ControlLabel, FormControl} from "react-bootstrap";

import News from "./News.jsx";
import Card from "../../components/Card/Card.jsx";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import getAllNews from '../../actions/newsActions/getNewsAction';
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

  componentWillReceiveProps(nextProps){
    this.setState({data: nextProps.AllNews.data});
  }

  render() {
    const {AllNews , idNewsToEdit , isFetching, editMessage, dataToEdit} = this.props;
    return (
      <div className="content">
        {
          editMessage ? <div></div>:

          <Grid fluid>
            <Row>
              <Col md ={6} style={{float:'right'}}>
                <Card
                  title="الأخبار والإعلانات"
                  category="هنا يمكنك اضافة وتعديل الأخبار والإعلانات"
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
                dataToEdit && ! isFetching?
                <EditSection  data={dataToEdit} />

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
    dataToEdit : state.transferIdReducer.data,
    idNewsToEdit : state.transferIdReducer.id,
    isFetching : state.transferIdReducer.isFetching,
    editMessage: state.editnewsData.message
    };
};

const mapDispatchToProps = {
  getAllNews
}

export default connect(mapStateToProps, mapDispatchToProps)(MediaCenter);
