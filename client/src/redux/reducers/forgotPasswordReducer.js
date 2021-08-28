import  {FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS , FORGOT_PASSWORD_FAILURE} from '../actions/actionType.js'

const initialState = {
    data: {},
    isLoading:false,
    error: {}
}

export const forgotpassword = (state=initialState, action) =>{
    const {type, payload} = action
    switch (type){
     case FORGOT_PASSWORD_REQUEST:
     return{
         ...state,
         isLoading: true,
     }
     case FORGOT_PASSWORD_SUCCESS:
         return{
             ...state,
             isLoading: false,
             data: payload
         }
         case FORGOT_PASSWORD_FAILURE:
         return{
            ...state,
             isLoading:false,
             error: payload,
         }
         default: return state
    }
}

