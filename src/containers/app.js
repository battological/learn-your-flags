import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';
//import _ from 'lodash';

import Flag from '../components/flag';
import Controls from '../components/controls';

function getOrdinal (n) {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function dumbify (input) {
  const output = input
    .toLowerCase()
    .replace(/\b(the|and|of')\b/ig, '')
    .replace(/\s\s+/ig, ' ')
    .trim();
  return output;
}

function validate (rawInput, rawExpected) {
  const input = dumbify(rawInput);
  const expected = dumbify(rawExpected.name);
  const acceptable = rawExpected.accepts !== undefined ?
    rawExpected.accepts.map(accept => dumbify(accept))
    : [];

  return (input === expected || acceptable.includes(input));
}

function average (arr) {
  return arr.reduce((prev, cur) => prev + cur) / arr.length;
}

class App extends Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    stack: PropTypes.arrayOf(PropTypes.shape({
      url: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired,
      accepts: React.PropTypes.arrayOf(React.PropTypes.string)
    }))
  }
  onGuess = e => {
    e.preventDefault();
    const guess = this.refs.guess.value;
    const { stack, index, actions } = this.props;
    if (validate(guess, stack[index])) {
      actions.successful(index);
    } else {
      actions.wrongGuess(index, guess);
    }
  };
  onSkip = e => {
    e.preventDefault();
  };
  onGiveUp = e => {
    e.preventDefault();
  }
  render () {
    console.log(this.props);
    const { index, stack } = this.props;
    return (
      <section id="quizzer">
        <Flag url={stack[index].url} />
        <form id="controls" onSubmit={this.onGuess}>
          <input type="text" ref="guess" autoFocus />
          <div id="controlGroup">
            <input type="submit" value="Guess" />
            <button type="button" onClick={this.onSkip}>Skip</button>
            <button type="button" onClick={this.onGiveUp}>Give Up</button>
          </div>
        </form>
      </section>
    );
  }
}

function mapStateToProps (state) {
  return state;
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
