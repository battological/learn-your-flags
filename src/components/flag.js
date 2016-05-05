import React, { PropTypes } from 'react';

const styles = {
  flag: {
    padding: '16px',
    margin: '1em',
    boxShadow: 'inset 0 0 10px 1px rgba(0,0,0,0.25)',
  }
};

const Flag = ({ url }) => (
  <div id="flag">
    <img src={url} alt="flag" height="400px" style={styles.flag} />
  </div>
);

Flag.propTypes = {
  url: PropTypes.string.isRequired
};

export default Flag;
