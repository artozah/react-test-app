import React from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {signOut} from '../redux/actions';

class Layout extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {actions, auth, user} = this.props;
    return (
      <div className="container-fluid">
        <Header signOut={actions.signOut} auth={auth} user={user} />
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
    actions: bindActionCreators({signOut}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
