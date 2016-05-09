import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

import Header from '../components/header';
import Flag from '../components/flag';

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

class App extends Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired,
    continent: PropTypes.string,
    stack: PropTypes.arrayOf(PropTypes.shape({
      url: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired,
      accepts: React.PropTypes.arrayOf(React.PropTypes.string)
    }))
  };

  static stages = {
    GUESSING: 'GUESSING',
    SUCCESS: 'SUCCESS',
    GIVE_UP: 'GIVE_UP',
    SUMMARY: 'SUMMARY'
  };

  onGuess = e => {
    e.preventDefault();
    const guess = this.refs.guess.value;
    if (guess === '') return;
    this.refs.guess.value = '';

    const { stack, index, actions } = this.props;
    if (validate(guess, stack[index])) {
      this.refs.guess.value = '';
      this.setState({ stage: App.stages.SUCCESS });
    } else {
      actions.wrongGuess(index, guess);
    }
  };

  onSuccessNext = e => {
    e.preventDefault();
    const { index, actions } = this.props;
    this.next(() => actions.successful(index));
  };

  onSkip = e => {
    e.preventDefault();
    const { index, actions } = this.props;
    actions.skip(index);
    this.refs.guess.focus();
  };

  onGiveUp = e => {
    e.preventDefault();
    this.setState({ stage: App.stages.GIVE_UP });
  };

  onGiveUpNext = () => {
    const { index, actions } = this.props;
    this.next(() => actions.giveUp(index));
  };

  next = action => {
    const { index, stack } = this.props;
    if (index >= stack.length) {
      this.setState({ stage: App.stages.SUMMARY });
    } else {
      this.setState({ stage: App.stages.GUESSING }, action);
    }
  };

  renderAttempts = () => {
    const { index, stack } = this.props;
    if (!stack[index].attempts) { return ''; }
    return (
      <div>
        <ul className="list-group">
          {stack[index].attempts.map(attempt =>
            <li className="list-group-item">{attempt}</li>
          )}
        </ul>
      </div>
    );
  };

  renderGuessing = () => {
    const nations = this.props.stack.map(flag => flag.name);
    return (
      <form id="controls" onSubmit={this.onGuess}>
        <p>
          <input type="text" ref="guess" list="nations" className="form-control" autoFocus />
          <datalist id="nations">
            {nations.map(nation => <option value={nation} />)}
          </datalist>
        </p>
        <div className="btn-group" role="group">
          <input type="submit" className="btn btn-primary" value="Guess" />
          <button type="button" className="btn btn-default" onClick={this.onSkip}>Skip</button>
          <button type="button" className="btn btn-danger" onClick={this.onGiveUp}>Give Up</button>
        </div>
        <p>
          {this.renderAttempts()}
        </p>
      </form>
    );
  };

  renderSuccess = () => {
    const { stack, index } = this.props;
    const name = stack[index].name;
    const attempts = stack[index].attempts || [];
    const ordinalAttempts = getOrdinal(attempts.length + 1);
    return (
      <div>
        <p>Well done!</p>
        <p>You got {name} right on your {ordinalAttempts} try!</p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.onSuccessNext}
          autoFocus
        >
          Next
        </button>
      </div>
    );
  };

  renderGiveUp = () => {
    const { stack, index } = this.props;
    const name = stack[index].name;
    return (
      <div>
        <p>This was the flag of {name}.</p>
        <button
          type="button"
          className="btn btn-default"
          onClick={this.onGiveUpNext}
          autoFocus
        >
          Next
        </button>
      </div>
    );
  };

  renderComponents = () => {
    const component = {
      [App.stages.GUESSING]: this.renderGuessing(),
      [App.stages.SUCCESS]: this.renderSuccess(),
      [App.stages.GIVE_UP]: this.renderGiveUp()
    };
    return component[this.state.stage];
  };

  renderProgress = () => {
    const stackSize = this.props.stack.length;
    const progress = this.props.index / stackSize;
    return (
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{ width: `${progress * 100}%` }}>
          {this.props.index}/{stackSize}
        </div>
      </div>
    );
  };

  renderSummary = () => {
    const correct = this.props.stack.filter(flag => flag.success);
    const giveUp = this.props.stack.filter(flag => !flag.success);
    const avgCorrect = correct.reduce((prev, cur) =>
      prev + (cur.attempts ? cur.attempts.length : 0, 0)) / correct.length;
    const avgGiveup = giveUp.reduce((prev, cur) =>
      prev + (cur.attempts ? cur.attempts.length : 0, 0)) / giveUp.length;

    return (
      <div>
        <h1>Done!</h1>
        <p>Number correct: {correct.length}</p>
        <p>Number of give ups: {giveUp.length}</p>
        {/* <p>Number of skips: {this.state.numSkips}</p> */}
        <p>Average guesses per correct guess: {avgCorrect}</p>
        <p>Average guesses per give up: {avgGiveup}</p>
      </div>
    );
  };

  renderStage = () => {
    if (this.state.stage === App.stages.SUMMARY) {
      return (
        <div>
          {this.renderProgress()}
          {this.renderSummary()}
        </div>
      );
    } else {
      const { stack, index } = this.props;
      return (
        <div>
          {this.renderProgress()}
          <Flag url={stack[index].url} />
          <div className="panel panel-default center-block" style={{ maxWidth: '400px' }}>
            <div className="panel-body">
              {this.renderComponents()}
            </div>
          </div>
        </div>
      );
    }
  };

  constructor(props) {
    super(props);
    props.actions.createStack(props.continent);
    this.state = {
      stage: App.stages.GUESSING
    };
  }

  render () {
    return (
      <section id="app">
        <Header />
        <div className="container">
          {this.renderStage()}
        </div>
      </section>
    );
  }
}

function mapStateToProps (state, props) {
  return {
    ...state.app,
    continent: props.params.continent
  };
}

function mapDispatchToProps (dispatch) {
  return { actions: bindActionCreators(Actions, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
