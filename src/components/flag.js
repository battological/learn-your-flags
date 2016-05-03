import React, { PropTypes } from 'react';

const Flag = ({ url }) => (
  <div id="flag" className="well">
    <img src={url} alt="flag" height="400px" />
  </div>
);

Flag.propTypes = {
  url: PropTypes.string.isRequired
};

export default Flag;
