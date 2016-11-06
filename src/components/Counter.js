import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleIncrement = () => {
      this.props.actions.increment();
    };

    this.handleDecrement = () => {
      this.props.actions.decrement();
    };
  }
  render() {
    return (
      <div className="counter-container">
        <div className="counter-num-label">{this.props.counter}</div>
        <div className="counter-even-label">{this.props.counter % 2 === 0 ? 'even' : 'odd'}</div>
        <br />
        <div className="counter-buttons">
          <button onClick={this.handleDecrement}>-</button>
          <button onClick={this.handleIncrement}>+</button>
        </div>
      </div>
    );
  }
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
};
