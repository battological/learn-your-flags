import React, { PropTypes } from 'react';

import * as continents from '../constants/continents';

const styles = {
  continent: {
    padding: '5em',
    margin: '1em',
    border: '1px solid black'
  }
};

const Welcome = ({ onStart }) => {
  const selectALL = () => onStart(continents.ALL);
  const selectNA = () => onStart(continents.NORTH_AMERICA);
  const selectSA = () => onStart(continents.SOUTH_AMERICA);
  const selectEUR = () => onStart(continents.EUROPE);
  const selectASIA = () => onStart(continents.ASIA);
  const selectAFR = () => onStart(continents.AFRICA);
  const selectOCEA = () => onStart(continents.OCEANIA);
  return (
    <div>
      <div onClick={selectALL} style={styles.continent}>World-wide</div>
      <div onClick={selectNA} style={styles.continent}>North America</div>
      <div onClick={selectSA} style={styles.continent}>South America</div>
      <div onClick={selectEUR} style={styles.continent}>Europe</div>
      <div onClick={selectASIA} style={styles.continent}>Asia</div>
      <div onClick={selectAFR} style={styles.continent}>Africa</div>
      <div onClick={selectOCEA} style={styles.continent}>Oceania</div>
    </div>
  );
};

Welcome.propTypes = {
  onStart: PropTypes.func.isRequired
};

export default Welcome;
