/**
 * Created by sravankumarganji on 9/16/17.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class AboutPage extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          about page
        </div>
        <div className="card-block">
          <h4 className="card-title">about</h4>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
            animi commodi consequatur dicta eaque earum error exercitationem iste nam nobis odit
            officiis quasi quia quo reiciendis rerum saepe vel veritatis.</p>
        </div>
        <div className="card-footer text-muted">
          footer
        </div>
      </div>
    );
  }
}

AboutPage.propTypes = {};
AboutPage.defaultProps = {};

export default AboutPage;
