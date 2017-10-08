/**
 * Created by sravankumarganji on 9/17/17.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Home page --></h1>
        <Link to="about" className="btn btn-outline-primary">Learn more</Link>
      </div>
    );
  }
}

HomePage.propTypes = {};
HomePage.defaultProps = {};

export default HomePage;
