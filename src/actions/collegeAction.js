/**
 * Created by sravankumarganji on 10/8/17.
 */
import * as appActions from './actions'
import axios from 'axios'

export const setFetchCollegesLoading = () => {
    return {
        type: appActions.LOADING_FETCH_COLLEGES,
        payload: {
            isLoading: true
        }
    }
}

export const setFetchColleges = (data) => {
    return {
        type: appActions.SET_COLLEGES,
        payload: {
            isLoading: false,
            colleges: data
        }
    }
}

export const setUpdateCollegeLoading = () => {
    return {
        type: appActions.LOADING_UPDATE_COLLEGE,
        payload: {
            isLoading: true
        }
    }
}

export const setUpdateCollege = (college) => {
    return {
        type: appActions.UPDATE_COLLEGE,
        payload: {
            isLoading: false,
            updatedCollege: college
        }
    }
}

export const getColleges = () => {
    return (dispatch, getState) => {
        let currentState = getState()
        let token = currentState.userToken
        let apiURL = currentState.baseURL.fullAPIURL
        let config = {
            headers: {'Authorization': 'Bearer ' + token}
        }
        dispatch(setFetchCollegesLoading())
        return axios.get(apiURL + '/colleges?colleges_size=2000', config)
            .then((response) => {
                dispatch(setFetchColleges(response.data.content))
            })
            .catch((error) => {
                console.log(error)
                dispatch({type: 'ERROR_FETCH_COLLEGES'})
                dispatch({type: 'ADD_ERROR_MESSAGE', error: error.response ? error.response.data : 'Something went wrong getting the list of colleges.'})
            })
    }
}

export const updateCollege = (college) => {
    return (dispatch, getState) => {
        let currentState = getState()
        let token = currentState.userToken
        let apiURL = currentState.baseURL.fullAPIURL
        let customHeader = {'Authorization': 'Bearer ' + token}
        dispatch(setUpdateCollegeLoading())
        return axios({
            method: 'put',
            url: `${apiURL}/colleges`,
            data: college,
            headers: customHeader})
            .then((response) => {
                dispatch(setUpdateCollege(response.data))
            })
            .catch((error) => {
                dispatch({type: 'ERROR_UPDATE_COLLEGE'})
                dispatch({type: 'ADD_ERROR_MESSAGE', error: error.response ? error.response.data : 'Something went wrong updating your college.'})
            })
    }
}

export const setCollegesInDistrict = (colleges) => {
    return {
        type: appActions.SET_COLLEGES_IN_DISTRICT,
        payload: colleges
    }
}

export const setCollege = (college) => {
    return {
        type: appActions.SET_COLLEGE,
        college
    }
}

export const setShowFormResponse = (showFormResponse) => {
    return {
        type: appActions.SET_SHOW_FORM_RESPONSE,
        showFormResponse
    }
}
