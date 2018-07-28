import React, { Component } from 'react';
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import {connect} from 'react-redux';
import Button from "../../components/CustomButton/CustomButton.jsx";
import DeleteProject from '../../actions/projectsActions/deleteProjectAction';
import { BarLoader } from 'react-spinners';
import {transferIdProjectAction} from '../../actions/projectsActions/transferIdProjectAction';
import PropTypes from 'prop-types';

class Project extends Component {
    
  constructor(props){
        super(props);
  }
  onClickEditButton = (e) =>{
    this.props.transferId(e.target.id);
  }
  onClickRemove = (e) =>{
    const { DeleteProject } = this.props;
    DeleteProject({id: e.target.id})
  }

  hideAlert = (e) => {
    const div = document.querySelector('.sweet-alert');
    if (div.style.display === "none") {
      div.style.display = "block";
    } else {
        div.style.display = "none";
    }
  }

  render(){
    let projects = this.props.projectData          
    const edit = <Tooltip id="edit_tooltip">Edit News</Tooltip>
    const remove = <Tooltip id="remove_tooltip">Remove</Tooltip>
    var Projs;
    projects ? 
      Projs = projects.map((project,i) =>{
        return(
              <tr key={i}>
                  <td>{project.name}</td>
                  <td className="td-actions text-right">
                    <OverlayTrigger placement="top" overlay={edit}>
                      <Button bsStyle="info" simple type="button" bsSize="small" id={project._id} onClick={this.onClickEditButton}>
                        <i className="fa fa-edit font-size-icon" id={project._id}/>
                      </Button>
                    </OverlayTrigger>

                    <OverlayTrigger placement="top" overlay={remove}>
                      <Button bsStyle="danger" simple type="button" bsSize="small" id={project._id} onClick={this.onClickRemove}>
                        <i className="fa fa-times font-size-icon" id={project._id} />
                      </Button>
                    </OverlayTrigger>
                  </td>
              </tr>
          )
      }) : Projs = []  


    return (<tbody>
              {Projs}
              {
                this.props.isDeleted ? 
                <center style={{marginBottom:'10px'}}><BarLoader width='150' height='7' color='4A90E2'/></center> : <div style={{color: "4A90E2", fontSize: "18px", textAlign:'center', marginBottom:'15px'}}>{this.props.massage}</div>
              }
            </tbody>
    )

  }
}


Project.propTypes = {
  transferId: PropTypes.func
}


const mapStateToProps = store => {
    return{
      data : store.deletedProject.data,
      isFetching : store.deletedProject.isFetching,
      isDeleted: store.deletedProject.isDeleted,
      deletedProject: store.deletedProject,
      massage : store.deletedProject.massage,
      projectData : store.allProjects.projectsData.data
  }
}

const mapDispatchToProps = {
  DeleteProject,
  transferId : transferIdProjectAction,

}

export default connect(mapStateToProps, mapDispatchToProps)(Project)