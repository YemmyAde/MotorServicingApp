import  {FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS , FORGOT_PASSWORD_FAILURE} from './actionType.js'
import axios from 'axios'
import {config} from '../../config.js'
const {BASEURL} = config

const forgotPasswordRequest = () => ({
    type: FORGOT_PASSWORD_REQUEST
})

const forgotPasswordSuccess = (data) => ({
    type: FORGOT_PASSWORD_SUCCESS,
    payload: data
    
})

const forgotPasswordFailure = (error) => ({
    type: FORGOT_PASSWORD_FAILURE,
    payload: error
})


const forgotPasswordAsync = (data) => async (dispatch) => {
    try{
        dispatch(forgotPasswordRequest())
        const response = await axios.post(`${BASEURL}/forgot-password`, data)
        dispatch(forgotPasswordSuccess(response.data))

    }catch(error){
        dispatch(forgotPasswordFailure(error.response))
    }
}

export default forgotPasswordAsync