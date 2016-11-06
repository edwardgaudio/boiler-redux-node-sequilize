import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as StarwarsActions from '../actions/StarwarsActions';
import Starwars from '../components/Starwars';

class StarwarsContainer extends Component {
  render() {
    const { data, actions } = this.props;
    return (
      <div className="main-app-container">
        <div className="main-app-nav">Starwars:</div>
        <Starwars data={data} actions={actions} />
      </div>
    );
  }
}

StarwarsContainer.propTypes = {
  data: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    forecast: state.forecast,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(StarwarsActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StarwarsContainer);
