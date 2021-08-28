import React, {useState, useEffect} from 'react'
import Button from './Button'
import Card from './Card'
import Input from './Input'    
import InputGroup from './InputGroup'
import { Link, useHistory } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { PageHeader } from './entryPage'
import forgotPasswordAsync from '../../redux/actions/forgotPasswordAction'


const Forgotpassword = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const state = useSelector(state => state.forgotPassword)

    const [resetInfo, setResetInfo] = useState({
        email: ''
    })
    
    
    const handleInput = (e) =>{
        const {name, value} = e.target

        setResetInfo(inputDetails =>{
           return { ...inputDetails,
                   [name]: value
            }
        })
      
    }
      function validateForm() {
        return resetInfo.email.length > 0 ;
    }

    const submitLogin = (e) =>{
        e.preventDefault()
        dispatch(forgotPasswordAsync(resetInfo))

    }
    useEffect(() => {
          if ((state.data.status === 'success' )) {
            history.push('/email-sent')
          }
        }, [state])

    return (
        <>
              <PageHeader to="/">
        <div className='logo'>  
                <span className='color'> Motorify 
                <i className='fas fa-car' />  
                </span>
        </div>
      </PageHeader>
        <div className='flex'>
            <Card>
                <h3>Forgot Password</h3>
                <p> Please enter the e-mail address associated with your Motorify account. We will send you a link to this e-mail address to reset your password. </p>
                <form >
                    <InputGroup>  
                        <Input name='email' value={resetInfo.email} onChange={handleInput} autoComplete='off' type="email" placeholder="Enter email" id="login-email" />
                    </InputGroup>
                  { state.error.data.status === 'Failed' ? <h2> {state.error.data.message}</h2> : ''}


                    <Button type="submit"onClick={submitLogin} disabled={!validateForm()}>Reset Password</Button>
                   
                </form>
               
                    <Link to='/login'> Return to Login</Link> 
               
                
            </Card>
            </div>
        </>
    )
}

export default Forgotpassword
