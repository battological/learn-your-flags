import React from 'react';
import _ from 'lodash';

function getOrdinal (n) {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export default class Quizzer extends React.Component {
  state = {
    correct: false,
    giveup: false,
    attempts: 0,
    wrongGuesses: [],
    index: 0,
    wrong: ''
  };

  stack = _.shuffle(this.props.flags);

  reduce = input => {
    const output = input
      .toLowerCase()
      .replace(/\bthe\b|\band\b|\bof\b|'/ig, '')
      .replace(/\s\s+/ig, ' ')
      .trim();
    return output;
  };

  validate = (input, compare) => {
    const flag = compare;
    flag.accepts = flag.accepts || [];
    const guess = input;
    const answer = this.reduce(flag.name);
    const accepts = flag.accepts.map(accept => this.reduce(accept));
    return (guess === answer || accepts.includes(guess));
  };

  guess = (e) => {
    e.preventDefault();
    const input = this.refs.guess.value;
    if (input === '') return;
    if (this.validate(input, this.stack[this.state.index])) {
      this.setState({ correct: true });
    } else {
      this.refs.guess.value = '';
      this.setState({
        wrong: input,
	wrongGuesses: this.state.wrongGuesses.concat(input),
        attempts: this.state.attempts + 1
      });
    }
  };

  skip = e => {
    e.preventDefault();
    this.next();
  };

  giveup = e => {
    e.preventDefault();
    this.setState({ giveup: true });
  };

  next = () => {
    this.setState({
      correct: false,
      giveup: false,
      attempts: 0,
      index: this.state.index + 1,
      wrong: '',
      wrongGuesses: []
    }, () => {
      this.refs.guess.value = '';
      this.refs.guess.focus();
    });
  };

  controls = () => {
    if (this.state.correct) {
      return (
        <div>
          <p>
            Nice! You got {this.stack[this.state.index].name} on your {getOrdinal(this.state.attempts + 1)} try!
          </p>
          <button onClick={this.next} className="btn btn-success" autoFocus>Next</button>
        </div>
      );
    } else {
      if (this.state.giveup) {
        return (
          <div>
            <p>
              It was {this.stack[this.state.index].name}.
            </p>
            <button onClick={this.next} className="btn btn-default" autoFocus>Next</button>
          </div>
        );
      } else {
        return (
          <div>
            {this.state.wrong && `Nope, not ${this.state.wrong}.`}
            <form className="form-inline" onSubmit={this.guess}>
              <label htmlFor="guess">This country is:</label><br />
              <input type="text" className="form-control" id="guess" ref="guess" />
              <p>
                <input type="submit" className="btn btn-primary" value="Guess" />
                <button onClick={this.skip} className="btn btn-danger">Skip</button>
                <button onClick={this.giveup} className="btn btn-default">Give up</button>
              </p>
            </form>
          </div>
        );
      }
    }
  };

  listWrongGuesses = () => {
    return this.state.wrongGuesses.map((guess, i) => {
      return (
        <li key={'wrong.'+i} className="list-group-item">
          {guess}
        </li> 
      )
    });
  };

  wrongGuesses = () => (
    <div>
      <p>You have guessed:</p>
      <ul className="list-group">
        {this.listWrongGuesses()}
      </ul>
    </div>
  );

  render () {
    return (
      <section id="quizzer">
        <div className="well">
          <img src={this.stack[this.state.index].url} alt="flag" height="600px" />
        </div>
        {this.controls()}
      	{this.state.wrongGuesses.length > 0 && this.wrongGuesses()}
      </section>
    );
  }
}

Quizzer.propTypes = {
  flags: React.PropTypes.arrayOf(React.PropTypes.shape({
    url: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    accepts: React.PropTypes.arrayOf(React.PropTypes.string)
  }))
};
