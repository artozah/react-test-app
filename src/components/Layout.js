import React from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../redux/actions';

class Layout extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  signOut(event) {
    event.preventDefault();
    this.props.actions.signOut();
  }

  render() {
    const {actions, auth, user} = this.props;
    return (
      <div className="container-fluid">
        <Header signOut={this.signOut.bind(this)} auth={auth} user={user} />
        {this.props.children}
      </div>
    );
  }
}

Layout.propTypes =  {
  children: React.PropTypes.object,
  actions: React.PropTypes.object.isRequired,
  auth: React.PropTypes.object.isRequired,
  user: React.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    auth: state.auth,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
