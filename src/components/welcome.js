import React, { PropTypes } from 'react';

import * as regions from '../constants/regions';

const styles = {
  region: {
    padding: '5em',
    margin: '1em',
    border: '1px solid black'
  }
};

const Welcome = ({ onStart }) => {
  const selectALL = () => onStart(regions.ALL);
  const selectNA = () => onStart(regions.NORTH_AMERICA);
  const selectSA = () => onStart(regions.SOUTH_AMERICA);
  const selectEUR = () => onStart(regions.EUROPE);
  const selectASIA = () => onStart(regions.ASIA);
  const selectAFR = () => onStart(regions.AFRICA);
  const selectOCEA = () => onStart(regions.OCEANIA);
  return (
    <div>
      <div onClick={selectALL} style={styles.region}>World-wide</div>
      <div onClick={selectNA} style={styles.region}>North America</div>
      <div onClick={selectSA} style={styles.region}>South America</div>
      <div onClick={selectEUR} style={styles.region}>Europe</div>
      <div onClick={selectASIA} style={styles.region}>Asia</div>
      <div onClick={selectAFR} style={styles.region}>Africa</div>
      <div onClick={selectOCEA} style={styles.region}>Oceania</div>
    </div>
  );
};

Welcome.propTypes = {
  onStart: PropTypes.func.isRequired
};

export default Welcome;
