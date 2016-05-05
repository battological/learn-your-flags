import React from 'react';

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

const Header = () => (
  <div style={styles.header}>
    <div className="container">
      <div className="nav navbar-nav navbar-left">
        <span style={styles.logo} className="navbar-brand">Vexation</span>
      </div>
      <ul className="nav navbar-nav navbar-right">
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button">
            Continent <span className="caret"></span>
          </a>
          <ul className="dropdown-menu">
            <li><a href="#">North America</a></li>
            <li><a href="#">South America</a></li>
            <li><a href="#">Europe</a></li>
            <li><a href="#">Africa</a></li>
            <li><a href="#">Asia</a></li>
            <li><a href="#">Oceania</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
