import  {SERVICES_DETAILS_REQUEST, SERVICES_DETAILS_SUCCESS , SERVICES_DETAILS_FAILURE} from '../actions/actionType.js'

const initialState = {
    data: {},
    isLoading:false,
    error: {}
}

export  const servicesDetails = (state=initialState, action) =>{
    const {type, payload} = action
    switch (type){
     case SERVICES_DETAILS_REQUEST:
     return{
         ...state,
         isLoading: true,
     }
     case SERVICES_DETAILS_SUCCESS:
         return{
             ...state,
             isLoading: false,
             data: payload
         }
         case SERVICES_DETAILS_FAILURE:
         return{
            ...state,
             isLoading:false,
             error: payload,
         }
         default: return state
    }
}

