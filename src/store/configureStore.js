/**
 * Created by sravankumarganji on 9/28/17.
 */
import {createStore ,compose, applyMiddleware} from 'redux'
import rootReducer from '../reducers/index'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import reduxThunk from 'redux-thunk'

// export default function configureStore(initialState) {
//   return createStore(
//     rootReducer,
//     initialState,
//     applyMiddleware(reduxImmutableStateInvariant())
//   );
// }

const store = createStore(rootReducer, undefined, compose(
  applyMiddleware(reduxThunk,reduxImmutableStateInvariant()),
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
))

export default store
