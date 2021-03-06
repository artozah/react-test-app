import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../../redux/actions';
import AuthForm from './AuthForm';

export class AuthPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: {
        email: "",
        password: ""
      }
    };

    this.updateUserState = this.updateUserState.bind(this);
    this.signinUser = this.signinUser.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  updateUserState(event) {
    const field = event.target.name;
    let user = this.state.user;
    user[field] = event.target.value;
    return this.setState({user: user});
  }

  signinUser(event) {
    event.preventDefault();
    this.props.actions.userCreated(this.state.user);
    this.props.actions.authLoggedIn(this.state.user);
  }

  loginUser(event) {
    event.preventDefault();
    this.props.actions.authLoggedIn(this.state.user);
  }

  render() {
    return (
      <AuthForm
        onChange={this.updateUserState}
        onSignin={this.signinUser}
        onLogin={this.loginUser}
        user={this.state.user}
      />
    );
  }
}

AuthPage.propTypes = {
  actions: PropTypes.object.isRequired
};

AuthPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
