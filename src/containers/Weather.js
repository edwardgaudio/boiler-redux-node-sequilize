import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as WeatherActions from '../actions/WeatherActions';
import Forecast from '../components/Forecast';

class Weather extends Component {
  render() {
    const { forecast, actions } = this.props;
    return (
      <div className="main-app-container">
        <div className="main-app-nav">Weather:</div>
        <Forecast forecast={forecast} actions={actions} />
      </div>
    );
  }
}

Weather.propTypes = {
  forecast: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    forecast: state.forecast,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(WeatherActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather);
