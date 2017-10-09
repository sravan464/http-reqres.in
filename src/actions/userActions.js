/**
 * Created by sravankumarganji on 10/8/17.
 */
import * as actions from './actionTypes'
import * as api from '../constants/apiConst'
import axios from 'axios'

export function loadCoursesSuccess(users){
   return {
        type : actions.LOAD_USERS_SUCCESS,
        payload : users
   }
}

export function loadUsers() {
    return function (dispatch) {
        // const URL = `${api.BASE_URL}${api.GET_USERS}`
        return axios({
            method:'get',
            url:'https://reqres.in/api/users'
        })
        .then(users=>{
            dispatch(loadCoursesSuccess(users.data))
        }).catch(error => {
            console.log('error loading users', error)
        })
    }
}