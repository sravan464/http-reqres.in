/**
 * Created by sravankumarganji on 9/28/17.
 */
import {combineReducers} from 'redux';
import courses from './courseReducer'

const rootReducer = combineReducers({
  courses

});

export default rootReducer;
