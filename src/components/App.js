/**
 * Created by sravankumarganji on 9/17/17.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Routing from '../routes';
import Header from '../components/ui/Header';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Header/>
        </div>
        <div className="row">
          <Routing/>
        </div>
      </div>
    );
  }
}

App.propTypes = {};
App.defaultProps = {};

export default App;
