/**
 * Created by sravankumarganji on 9/17/17.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import * as userActions from '../../actions/userActions'

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  componentDidMount(){
    userActions.loadUsers();
  }
  render() {
    return (
      <div>
          <h1>{console.log(this.props.usersReducer)}</h1>
      </div>
    );
  }
}

HomePage.propTypes = {};
HomePage.defaultProps = {};

function mapStateToProps(state){
  return{
  usersReducer : state.userReducer
  }
}
export default connect(mapStateToProps)(HomePage);
