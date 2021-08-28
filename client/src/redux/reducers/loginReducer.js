import {USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE} from '../actions/actionType.js'

const initialState = {
    data: {},
    isLoading:false,
    error: {}
}

export  const loginReducer = (state=initialState, action) =>{
    const {type, payload} = action
    switch (type){
     case USER_LOGIN_REQUEST:
     return{
         ...state,
         isLoading: true,
     }
     case USER_LOGIN_SUCCESS:
         return{
             ...state,
             isLoading: false,
             data: payload
         }
         case USER_LOGIN_FAILURE:
         return{
            ...state,
             isLoading:false,
             error: payload,
         }
         default: return state
    }
}

