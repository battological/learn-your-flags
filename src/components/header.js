import React, { PropTypes } from 'react';
import * as regions from '../constants/regions';

const styles = {
  header: {
    backgroundColor: '#fff',
    boxShadow: '0 0 4px rgba(0,0,0,0.25)',
    padding: '25px 60px'
  },
  logo: {
    fontFamily: '"Lobster", sans-serif',
    fontSize: '2em'
  }
};

const Header = () => {
  return (
    <div style={styles.header}>
      <div className="container">
        <div className="nav navbar-nav navbar-left">
          <span style={styles.logo} className="navbar-brand">Vexation</span>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button">
              region <span className="caret"></span>
            </a>
            <ul className="dropdown-menu">
              <li><a href={`/${regions.NORTH_AMERICA}`}>North America</a></li>
              <li><a href={`/${regions.SOUTH_AMERICA}`}>South America</a></li>
              <li><a href={`/${regions.EUROPE}`}>Europe</a></li>
              <li><a href={`/${regions.AFRICA}`}>Africa</a></li>
              <li><a href={`/${regions.ASIA}`}>Asia</a></li>
              <li><a href={`/${regions.OCEANIA}`}>Oceania</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
