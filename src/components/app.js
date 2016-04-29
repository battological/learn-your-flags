import React from 'react';

import Flag from './flag';

import flags from '../constants/flags';

export default class App extends React.Component {
  render() {
    return (
      <div id="App" className="container">
        <Flag flags={flags} />
      </div>
    );
  }
}
