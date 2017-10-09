/**
 * Created by sravankumarganji on 9/28/17.
 */
import {combineReducers} from 'redux';
import modal from './modalReducer';
import counter from './counterReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  modal,
  counter,
    userReducer
});

export default rootReducer;
