import  {SERVICES_REQUEST, SERVICES_SUCCESS , SERVICES_FAILURE} from '../actions/actionType.js'

const initialState = {
    data: {},
    isLoading:false,
    error: {}
}

export  const services = (state=initialState, action) =>{
    const {type, payload} = action
    switch (type){
     case SERVICES_REQUEST:
     return{
         ...state,
         isLoading: true,
     }
     case SERVICES_SUCCESS:
         return{
             ...state,
             isLoading: false,
             data: payload
         }
         case SERVICES_FAILURE:
         return{
            ...state,
             isLoading:false,
             error: payload,
         }
         default: return state
    }
}

