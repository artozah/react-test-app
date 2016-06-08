import React from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Layout extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {actions, user} = this.props;
    return (
      <div className="container-fluid">
        <Header user={user} />
        {this.props.children}
      </div>
    );
  }
}

Layout.propTypes =  {
  children: React.PropTypes.object,
  actions: React.PropTypes.object.isRequired,
  user: React.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
