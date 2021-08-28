import {combineReducers} from 'redux'
import { loginReducer } from './loginReducer'
import { signupReducer } from './signupReducer'
import { forgotpassword } from './forgotPasswordReducer'
import { services } from './servicesReducer'
import { servicesDetails } from './servicesDetailReducer'


const rootReducer = combineReducers({
    signup: signupReducer,
    login: loginReducer,
    forgotPassword: forgotpassword,
    services: services,
    servicesDetails: servicesDetails

    
})

export default rootReducer