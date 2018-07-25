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
