import React from 'react';
import _ from 'lodash';


export default class Quizzer extends React.Component {
  state = {
    correct: false,
    attempts: 0,
    index: 0,
    wrong: ''
  };
  stack = _.shuffle(this.props.flags);
  reduce = input => {
    let output = input;
    output = output.toLowerCase();
    output = output.replace(/the|and|of|'/ig, '');
    output = output.replace(/\s\s+/ig, ' ');
    output = output.trim();
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
    if (this.validate(input, this.stack[this.state.index])) {
      this.setState({ correct: true });
    } else {
      this.setState({
        wrong: input,
        attempts: this.state.attempts + 1
      });
    }
  };
  skip = () => {
    this.next();
  };
  next = () => {
    this.setState({
      correct: false,
      attempts: 0,
      index: this.state.index + 1,
      wrong: ''
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
            Nice! You got {this.stack[this.state.index].name}!
          </p>
          <button onClick={this.next} className="btn btn-success" autoFocus>Next</button>
        </div>
      );
    } else {
      return (
        <div>
          {this.state.wrong && `Nope, not ${this.state.wrong}.`}
          <form className="form-inline" onSubmit={this.guess}>
            <div className="form-group">
              <label htmlFor="guess">Country</label>
              <input type="text" className="form-control" id="guess" ref="guess" />
            </div>
            <input type="submit" className="btn btn-primary" value="Guess" />
            <button onClick={this.skip} className="btn btn-danger">Skip</button>
            <span>{this.state.attempts}</span>
          </form>
        </div>
      );
    }
  };
  render () {
    return (
      <section id="quizzer">
        <img src={this.stack[this.state.index].url} alt="flag" width="1024px" />
        {this.controls()}
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
