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
      isLoading :true
    }
  }
  componentDidMount(){
      // const {dispatch} = this.props
      // dispatch(userActions.loadUsers());
      userActions.loadUsers()
  }

  render() {
    // if(!this.props.usersReducer) return <p>Loading ....</p>
    return (
      <div>
          {console.log(this.props.userReducer)}
      </div>
    );
  }
}

HomePage.propTypes = {};
HomePage.defaultProps = {};

const mapStateToProps = (state, props) =>
    ({
        userReducer : state.userReducer
    })
export default connect(mapStateToProps)(HomePage);
