import React, { Component } from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import {connect} from 'react-redux';
import Button from "../../components/CustomButton/CustomButton.jsx";
import {transferIdNewsAction} from '../../reducers/newsReducers/transferNewsId';
import PropTypes from 'prop-types';
import deleteNews from '../../actions/newsActions/deleteNews';



class News extends Component {
  constructor(){
    super();
  }
  onClickEditButton = (e) =>{
    this.props.transferId(e.target.id);
  }
  
  onClickRemove = (e) =>{
    const {deleteNews} = this.props;
    console.log(e.target.id,'e.target.id');
    deleteNews({id: e.target.id})

  }
  render() {
    const news= this.props.allNews;
    const edit = <Tooltip id="edit_tooltip">Edit News</Tooltip>;
    const remove = <Tooltip id="remove_tooltip">Remove</Tooltip>;
      var News =[];
    {
      news ?
       News = news.map((news,i) => {
          return (
            <tr key={i}>
                <td>{news.name}</td>
                <td className="td-actions text-right">
                  <OverlayTrigger placement="top" overlay={edit}>
                    <Button bsStyle="info" simple type="button" bsSize="xs" id={news._id} onClick={this.onClickEditButton}>
                      <i className="fa fa-edit font-size-icon" id={news._id}/>
                    </Button>
                  </OverlayTrigger>

                  <OverlayTrigger placement="top" overlay={remove}>
                    <Button bsStyle="danger" simple type="button" bsSize="xs" id={news._id} onClick={this.onClickRemove}>
                      <i className="fa fa-times font-size-icon" id={news._id} />
                    </Button>
                  </OverlayTrigger>
                </td>
              </tr>
            )
          }) : []
        }
    return (<tbody>{News}</tbody>);
  }
}

News.propTypes = {
    transferId: PropTypes.func
}
const mapDispatchToProps = {
  transferId : transferIdNewsAction,
  deleteNews
}
export default connect (null, mapDispatchToProps)(News);
