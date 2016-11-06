import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from '../actions/CounterActions';
import * as WeatherActions from '../actions/WeatherActions';
import * as StarwarsActions from '../actions/StarwarsActions';
import Counter from '../components/Counter';
import Weather from './Weather';
import Starwars from './Starwars';

/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */

class App extends Component {
  render() {
    const { forecast, counter, starwarsData, counterActions,
            weatherActions, starwarsActions,
          } = this.props;
    return (
      <div className="main-app-container">
        <div className="main-app-nav">Simple Redux Boilerplate</div>
        <Counter counter={counter} actions={counterActions} />
        <Weather forecast={forecast} actions={weatherActions} />
        <Starwars data={starwarsData} actions={starwarsActions} />
      </div>
    );
  }
}

App.propTypes = {
  counter: PropTypes.number.isRequired,
  forecast: PropTypes.object.isRequired,
  starwarsData: PropTypes.object.isRequired,
  counterActions: PropTypes.object.isRequired,
  weatherActions: PropTypes.object.isRequired,
  starwarsActions: PropTypes.object.isRequired,
};

/**
 * Keep in mind that 'state' isn't the state of local object, but your single
 * state in this Redux application. 'counter' is a property within our store/state
 * object. By mapping it to props, we can pass it to the child component Counter.
 */
function mapStateToProps(state) {
  return {
    counter: state.counter,
    forecast: state.forecast,
    starwarsData: state.starwars,
  };
}

/**
 * Turns an object whose values are 'action creators' into an object with the same
 * keys but with every action creator wrapped into a 'dispatch' call that we can invoke
 * directly later on. Here we imported the actions specified in 'CounterActions.js' and
 * used the bindActionCreators function Redux provides us.
 *
 * More info: http://redux.js.org/docs/api/bindActionCreators.html
 */
function mapDispatchToProps(dispatch) {
  return {
    counterActions: bindActionCreators(CounterActions, dispatch),
    weatherActions: bindActionCreators(WeatherActions, dispatch),
    starwarsActions: bindActionCreators(StarwarsActions, dispatch),
  };
}

/**
 * 'connect' is provided to us by the bindings offered by 'react-redux'. It simply
 * connects a React component to a Redux store. It never modifies the component class
 * that is passed into it, it actually returns a new connected componet class for use.
 *
 * More info: https://github.com/rackt/react-redux
 */

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
