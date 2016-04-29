import React from 'react';

import Flag from './flag';

import flags from '../constants/flags';

export default class App extends React.Component {
  render() {
    return (
      <div id="App" className="container" style={{ width: '100%', height: '100%', textAlign: 'center', backgroundColor: '#171a21', color: 'white' }}>
        <Flag flags={flags} />
      </div>
    );
  }
}
