import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

// import {connect} from 'react-redux';
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

    console.log(value);
    fetch('http://localhost:8000/savadata',{
      method: 'POST',
      headers: {
          Accept : 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(value)
      })
      .then(res => {
          console.log(res, ' res')}
      ).catch(err => {
          console.log(err, ' err')
  })
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
                          defaultValue: "Walaa"
                        },
                        {
                          label: "New Password",
                          type: "password",
                          bsClass: "form-control",
                          placeholder: "New Password",
                          defaultValue: "Medhat"
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






// <Col md={4}>
//   <UserCard
//     bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
//     avatar={avatar}
//     name="Mike Andrew"
//     userName="michael24"
//     description={
//       <span>
//         "Lamborghini Mercy
//         <br />
//         Your chick she so thirsty
//         <br />
//         I'm in that two seat Lambo"
//       </span>
//     }
//     socials={
//       <div>
//         <Button simple>
//           <i className="fa fa-facebook-square" />
//         </Button>
//         <Button simple>
//           <i className="fa fa-twitter" />
//         </Button>
//         <Button simple>
//           <i className="fa fa-google-plus-square" />
//         </Button>
//       </div>
//     }
//   />
// </Col>


// <Row>
//   <Col md={12}>
//     <FormGroup controlId="formControlsTextarea">
//       <ControlLabel>About Me</ControlLabel>
//       <FormControl
//         rows="5"
//         componentClass="textarea"
//         bsClass="form-control"
//         placeholder="Here can be your description"
//         defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
//       />
//     </FormGroup>
//   </Col>
// </Row>

// <FormInputs
//   ncols={["col-md-12"]}
//   proprieties={[
//     {
//       label: "Adress",
//       type: "text",
//       bsClass: "form-control",
//       placeholder: "Home Adress",
//       defaultValue:
//         "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
//     }
//   ]}
// />
// <FormInputs
//   ncols={["col-md-4", "col-md-4", "col-md-4"]}
//   proprieties={[
//     {
//       label: "City",
//       type: "text",
//       bsClass: "form-control",
//       placeholder: "City",
//       defaultValue: "Mike"
//     },
//     {
//       label: "Country",
//       type: "text",
//       bsClass: "form-control",
//       placeholder: "Country",
//       defaultValue: "Andrew"
//     },
//     {
//       label: "Postal Code",
//       type: "number",
//       bsClass: "form-control",
//       placeholder: "ZIP Code"
//     }
//   ]}
// />
