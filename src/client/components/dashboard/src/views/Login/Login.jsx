import React, { Component }from 'react';
import Button from "../../components/CustomButton/CustomButton.jsx";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginUser from '../../actions/loginAction';


class Login extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    onSubmit = e => {
        e.preventDefault();
        this.state={
            username: document.getElementById('username').value,
            password: document.getElementById('password').value
        }
        const { LoginUser } = this.props;
        LoginUser(this.state);
    }


    render(){
      switch (this.props.message) {
      case 'Login Success':
        this.props.history.push(`/dashboard`);
      default:
        return(
            <div className='login'>
                  <form className='login__form' onSubmit={this.onSubmit}>
                        <h6>Username</h6>
                        <input type='text' name='username' placeholder='Your username' id='username' />
                        <h6>Password</h6>
                        <input type='password' name='password' placeholder='Your password' id='password' />
                        <Button bsStyle="info" fill type="submit">
                          Login
                        </Button>
                      <div className="clearfix" />


                          <div style={{ marginTop:"10px", color:'red' }}>{this.props.message}</div>

                  </form>
            </div>
        )
    }

  }

}

Login.propTypes = {
    LoginUser: PropTypes.func
}

const mapStateToProps = state => {
  return {
    message: state.userData.message.message};
};

const mapDispatchToProps = {
    LoginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
