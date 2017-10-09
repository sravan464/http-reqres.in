/**
 * Created by sravankumarganji on 10/8/17.
 */
import * as appActions from '../actions/actions'
import { combineReducers } from 'redux'

const getCollegeReducer = (state = {isLoading: false, colleges: []}, action) => {
    switch (action.type) {
        case appActions.LOADING_FETCH_COLLEGES:
            return Object.assign({}, state, {isLoading: true})
        case appActions.SET_COLLEGES:
            return Object.assign({}, state, {isLoading: false, colleges: action.payload.colleges})
        case appActions.ERROR_FETCH_COLLEGES:
            return Object.assign({}, state, {isLoading: false, colleges: []})
        default:
            return state
    }
}

const updateCollegeReducer = (state = {isLoading: false, college: {}, showFormResponse: false}, action) => {
    switch (action.type) {
        case appActions.SET_SHOW_FORM_RESPONSE:
            return Object.assign({}, state, {showFormResponse: action.showFormResponse})
        case appActions.LOADING_UPDATE_COLLEGE:
            return Object.assign({}, state, {isLoading: true})
        case appActions.UPDATE_COLLEGE:
            return Object.assign({}, state, {
                isLoading: false, college: action.payload.updatedCollege, showFormResponse: true})
        case appActions.ERROR_UPDATING_COLLEGE:
            return Object.assign({}, state, {isLoading: false, college: {}, showFormResponse: false})
        case appActions.SET_COLLEGE:
            return Object.assign({}, state, {isLoading: false, college: action.college})
        case appActions.CLEAR_STATE:
            return Object.assign({}, state, {isLoading: false, college: {}, showFormResponse: false})
        default:
            return state
    }
}

const collegesReducer = combineReducers({ getCollegeReducer, updateCollegeReducer })

export default collegesReducer
