import React, { Component, PropTypes } from 'react';

export default class Forecast extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleFetch = () => {
      this.props.actions.fetchWeather();
    };
  }
  render() {
    return (
      <div className="weather-container">
          <button onClick={this.handleFetch}>GET WEATHER</button>
          { JSON.stringify(this.props.forecast) }
      </div>
    );
  }
}

Forecast.propTypes = {
  forecast: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};
