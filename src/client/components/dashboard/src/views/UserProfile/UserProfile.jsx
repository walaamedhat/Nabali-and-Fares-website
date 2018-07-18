import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import {connect} from 'react-redux';
import { Card } from "../../components/Card/Card.jsx";
import { FormInputs } from "../../components/FormInputs/FormInputs.jsx";
import { UserCard } from "../../components/UserCard/UserCard.jsx";
import Button from "../../components/CustomButton/CustomButton.jsx";

import {sendData} from './action';
import avatar from "../../assets/img/faces/face-3.jpg";

class UserProfile extends Component {
  constructor(){
    super();

    this.handleTestRequest = this.handleTestRequest.bind(this);

  }

  handleTestRequest(e){
    e.preventDefault();
    const value = document.getElementById('testId').value;

  }

  render() {
    console.log(this.props, ' this.props')
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Edit Profile"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Company (disabled)",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Company",
                          defaultValue: "Nabali & Fares",
                          disabled: true
                        },
                        {
                          label: "Username",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Username",
                          defaultValue: "Admin",
                          id:'testId'
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Old Password",
                          type: "password",
                          bsClass: "form-control",
                          placeholder: "Old Password",
                          defaultValue: ""
                        },
                        {
                          label: "New Password",
                          type: "password",
                          bsClass: "form-control",
                          placeholder: "New Password",
                          defaultValue: ""
                        }
                      ]}
                    />

                    <Button bsStyle="info" pullRight fill type="submit" onClick={this.handleTestRequest}>
                      Update Profile
                    </Button>
                    <div className="clearfix" />
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

const mapDispatchToProps = {
  data: sendData
}

export default UserProfile;
