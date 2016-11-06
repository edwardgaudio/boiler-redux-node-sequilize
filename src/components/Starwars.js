import React, { Component, PropTypes } from 'react';

export default class Starwars extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleFetch = () => {
      this.props.actions.fetchStarwars();
    };
  }
  render() {
    return (
      <div className="starwars-container">
          <button onClick={this.handleFetch}>GET STARWARS</button>
          { JSON.stringify(this.props.data) }
      </div>
    );
  }
}

Starwars.propTypes = {
  data: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};
