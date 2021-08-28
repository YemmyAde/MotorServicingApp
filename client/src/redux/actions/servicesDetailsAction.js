import  {SERVICES_DETAILS_REQUEST, SERVICES_DETAILS_SUCCESS , SERVICES_DETAILS_FAILURE} from './actionType.js'
import axios from 'axios'
import {config} from '../../config.js'
const {BASEURL} = config

const servicesDetailsRequest = () => ({
    type: SERVICES_DETAILS_REQUEST
})

const servicesDetailsSuccess = (data) => ({
    type: SERVICES_DETAILS_SUCCESS,
    payload: data
    
})

const servicesDetailsFailure = (error) => ({
    type: SERVICES_DETAILS_FAILURE,
    payload: error
})


const servicesDetailsAsync = (id) => async (dispatch) => {
    try{
        dispatch(servicesDetailsRequest())
        const response = await axios.get(`${BASEURL}/motorify/services/${id}`)
        dispatch(servicesDetailsSuccess(response.data))

    }catch(error){
        dispatch(servicesDetailsFailure(error.response))
    }
}

export default servicesDetailsAsync