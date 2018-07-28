import React, { Component } from "react";
import { Grid, Row, Col, Button, Table ,FormGroup, ControlLabel, FormControl} from "react-bootstrap";
import Card from "../../components/Card/Card.jsx";
import Project from './Project.jsx'
import PropTypes from 'prop-types';
import { BarLoader } from 'react-spinners';

import getAllProjects from '../../actions/projectsActions/getProjectsAction'
import { connect } from 'react-redux';
import EditProject from './EditProjects';

class OurProjects extends Component {
    constructor(props){
        super(props);
        this.state = {
            projectsData : null
        }
    }
    componentDidMount(){
        const { getAllProjects } = this.props
        getAllProjects()
    }

    render() {      
        const {projectDataToEdit, isFetchingProjectData} = this.props; 
        
        return(
        <div className="content">
            <Grid fluid>
                <Row>
                <Col md ={6} style={{float:'right'}}>
                    <Card
                    title="مشاريعنا"
                    category="هنا يمكنك تعديل او حذف اي مشروع"
                    content={
                        <div className="table-full-width">
                        <table className="table">
                            {
                                !this.props.isFetching ? 
                                    <Project />
                                : <BarLoader width='150' height='7' color='4A90E2'/>
                            }
                            
                        </table>
                        </div>
                    }
                    />
                </Col>
                    {
                        projectDataToEdit.length !==0 && !isFetchingProjectData ?  <EditProject projData={projectDataToEdit}/> : <div />
                    }
                </Row>
            </Grid> 
        </div>
        )
    } 
}

const mapStateTpProps = state => {
    return{
        allProjects: state.allProjects.projectsData,
        isFetching : state.allProjects.isFething,
        projectDataToEdit: state.transferProject.projectData,
        isFetchingProjectData : state.transferProject.isFetching,
        // projectData: state.transferIdReducer.projData
    }
}
const mapDispatchToProps = {
    getAllProjects,
    
}

export default connect(mapStateTpProps, mapDispatchToProps)(OurProjects);