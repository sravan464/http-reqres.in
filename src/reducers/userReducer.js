/**
 * Created by sravankumarganji on 10/8/17.
 */
import * as actions from '../actions/actionTypes'

export default function usersReducer(state = {},action) {
    switch(action.type){
        case actions.LOAD_USERS_SUCCESS:
            return Object.assign({},action.payload)
        default :
            return state
    }
}