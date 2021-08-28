import  {SERVICES_REQUEST, SERVICES_SUCCESS , SERVICES_FAILURE} from './actionType.js'
import axios from 'axios'
import {config} from '../../config.js'
const {BASEURL} = config

const servicesRequest = () => ({
    type: SERVICES_REQUEST
})

const servicesSuccess = (data) => ({
    type: SERVICES_SUCCESS,
    payload: data
    
})

const servicesFailure = (error) => ({
    type: SERVICES_FAILURE,
    payload: error
})


const servicesAsync = (data) => async (dispatch) => {
    try{
        dispatch(servicesRequest())
        const response = await axios.get(`${BASEURL}/motorify/services`, data)
        dispatch(servicesSuccess(response.data))

    }catch(error){
        dispatch(servicesFailure(error.response))
    }
}

export default servicesAsync