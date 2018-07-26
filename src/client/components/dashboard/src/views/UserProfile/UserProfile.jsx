import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Card } from "../../components/Card/Card.jsx";
import { FormInputs } from "../../components/FormInputs/FormInputs.jsx";
import { UserCard } from "../../components/UserCard/UserCard.jsx";
import Button from "../../components/CustomButton/CustomButton.jsx";

import getUserDate from '../../actions/userProfileAction';
import updateUserDate from '../../actions/updateProfileAction';
import avatar from "../../assets/img/faces/face-3.jpg";

class UserProfile extends Component {
  constructor(){
    super();
    this.state = {}

  }
  componentDidMount() {
    const { getUserDate } = this.props;
    getUserDate();
    this.state = this.props.username;

  }
  onSubmit = e => {
      e.preventDefault();
      this.state={
          username: document.getElementById('username').value,
          oldPassword: document.getElementById('oldPassword').value,
          newPassword: document.getElementById('newPassword').value
      }
      const { updateUserDate } = this.props;
      updateUserDate(this.state);
      document.getElementById('oldPassword').value = '';
      document.getElementById('newPassword').value = '';
  }

  render() {
    const { isFetching , username, isFetchingUpdate} = this.props;
    return (
      <div className="content user-profile">
      {
        isFetching ? <div/> :
          <Grid fluid>
            <Row>
              <Col md={8}>
                <Card
                  title="تعديل اسم المستخدم وكلمة السر"
                  content={
                    <form onSubmit={this.onSubmit}>
                      <FormInputs
                        ncols={["col-md-6", "col-md-6"]}
                        proprieties={[
                          {
                            label: "اسم الشركة",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "الشركة",
                            defaultValue: "Nabali & Fares",
                            disabled: true
                          },
                          {
                            label: "اسم المستخدم",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "اسم المستخدم",
                            defaultValue: `${username}`,
                            id:'username'
                          }
                        ]}
                      />
                      <FormInputs
                        ncols={["col-md-6", "col-md-6"]}
                        proprieties={[
                          {
                            label: "كلمة السر الجديدة",
                            type: "password",
                            bsClass: "form-control",
                            placeholder: "ادخل هنا كلمة السر الجديدة",
                            id: 'newPassword',
                            required : 'true'

                          },
                          {
                            label: "كلمة السر القديمة",
                            type: "password",
                            bsClass: "form-control",
                            placeholder: "ادخل هنا كلمة السر القديمة",
                            id: 'oldPassword',
                            required : 'true'
                          }
                        ]}
                      />

                      <Button bsStyle="info" pullRight fill type="submit" onClick={this.handleTestRequest}>
                        احفظ التعديل الآن
                      </Button>
                      <div className="clearfix" />
                      {
                        isFetchingUpdate ? <div/> :
                        <div style={{ textAlign:'center', color:'blue' }}>{this.props.message}</div>
                      }
                    </form>
                  }
                />
              </Col>

            </Row>
          </Grid>
      }
    </div>
    );
  }
}

UserProfile.propTypes = {
    getUserDate: PropTypes.func,
    updateUserDate: PropTypes.func
}
const mapStateToProps = state => {
  return {
    message: state.updateUserData.message.message,
    username: state.getUserData.message.username,
    isFetching: state.getUserData.isFetching,
    isFetchingUpdate: state.updateUserData.isFetching
  };
};

const mapDispatchToProps = {
  getUserDate,
  updateUserDate
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
