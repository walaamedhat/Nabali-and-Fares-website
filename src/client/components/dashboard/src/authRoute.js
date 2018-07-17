import React,{ Component } from 'react';
import { Route,Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { REQUEST_PENDING } from './constants/actionTypes';

import auth from './actions/authAction';

class PrivateRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    this.props.auth();

  }

  render() {
    const { ComponentName, reqestStatus, user,isLogged ,...rest } = this.props;
    if (reqestStatus === undefined || reqestStatus === REQUEST_PENDING) {
      return <div>Loading  ...</div>;
    }
    switch (rest.path) {
      case '/' :

        return (
          <Route
            {...rest}
            render={props => {

              return (
                isLogged && user === 'Admin'? (
                  <Redirect
                    to={{ pathname: '/dashboard' }}
                  />
                ) :!isLogged? (<Redirect
                  to={{ pathname: '/dashboard' }}
                />):
                  !isLogged &&(rest.path==='/')?
                    (
                      <Redirect
                        to={{ pathname: '/' }}
                      />
                    )
                    :(<Redirect
                      to={{ pathname: '/page404' }}
                    />)
              );
            }
            }
          />
        );
      case '/login' :

        return (
          <Route
            {...rest}
            render={props => {

              return (
                !isLogged? (
                  <ComponentName {...props} />
                ) :isLogged && user === 'Admin'? (<Redirect
                  to={{ pathname: '/dashboard' }}
                />):
                  !isLogged &&(rest.path==='/')?
                    (
                      <Redirect
                        to={{ pathname: '/' }}
                      />
                    )
                    :(<Redirect
                      to={{ pathname: '/page404' }}
                    />)
              );
            }
            }
          />
        );
      case '/dashboard' :

        return (
          <Route
            {...rest}
            render={props => {

              return (
                user === 'Admin' &&isLogged? (
                  <ComponentName {...props} />
                ) :isLogged && user != 'Admin'? (<Redirect
                  to={{ pathname: '/page404' }}
                />):
                  !isLogged &&(rest.path==='/')?
                    (
                      <Redirect
                        to={{ pathname: '/' }}
                      />
                    )
                    :(<Redirect
                      to={{ pathname: '/login' }}
                    />)
              );
            }
            }
          />
        );
        case '/user':

          return (
            <Route
              {...rest}
              render={props => {

                return (
                  user === 'Admin' &&isLogged? (
                    <ComponentName {...props} />
                  ) :isLogged && user != 'Admin'? (<Redirect
                    to={{ pathname: '/page404' }}
                  />):
                    !isLogged &&(rest.path==='/')?
                      (
                        <Redirect
                          to={{ pathname: '/' }}
                        />
                      )
                      :(<Redirect
                        to={{ pathname: '/login' }}
                      />)
                );
              }
              }
            />
          );
        case '/mediacenter':

          return (
            <Route
              {...rest}
              render={props => {

                return (
                  user === 'Admin' &&isLogged? (
                    <ComponentName {...props} />
                  ) :isLogged && user != 'Admin'? (<Redirect
                    to={{ pathname: '/page404' }}
                  />):
                    !isLogged &&(rest.path==='/')?
                      (
                        <Redirect
                          to={{ pathname: '/' }}
                        />
                      )
                      :(<Redirect
                        to={{ pathname: '/login' }}
                      />)
                );
              }
              }
            />
          );
        case '/ourprojects':

          return (
            <Route
              {...rest}
              render={props => {

                return (
                  user === 'Admin' &&isLogged? (
                    <ComponentName {...props} />
                  ) :isLogged && user != 'Admin'? (<Redirect
                    to={{ pathname: '/page404' }}
                  />):
                    !isLogged &&(rest.path==='/')?
                      (
                        <Redirect
                          to={{ pathname: '/' }}
                        />
                      )
                      :(<Redirect
                        to={{ pathname: '/login' }}
                      />)
                );
              }
              }
            />
          );
    }
  }
}

PrivateRoute.propTypes = {
  ComponentName: PropTypes.str,
  auth: PropTypes.func,
  reqestStatus: PropTypes.str,
  user: PropTypes.obj

};
const mapStateToProps = state => {
  return {
    user: state.auth.user.username,
    reqestStatus: state.auth.reqestStatus,
    isLogged: state.auth.isLogged
  };
};
const mapDispatchToProps = {
  auth
};
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
