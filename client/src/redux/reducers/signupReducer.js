import {USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE} from '../actions/actionType.js'

const initialState = {
    data: {},
    isLoading:false,
    error: {
        data:{
            message: ''
        }
    }
}

export  const signupReducer = (state=initialState, action) =>{
    const {type, payload} = action
    switch (type){
     case USER_REGISTER_REQUEST:
     return{
         ...state,
         isLoading: true,
     }
     case USER_REGISTER_SUCCESS:
         return{
             ...state,
             isLoading: false,
             data: payload
         }
         case USER_REGISTER_FAILURE:
         return{
            ...state,
             isLoading:false,
             error: payload,
         }
         default: return state
    }
}

