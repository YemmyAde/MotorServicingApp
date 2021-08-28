import React, {useState} from 'react'
import Button from './Button'
import Card from './Card'
import Input from './Input'    
import InputGroup from './InputGroup'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { PageHeader } from './entryPage'
// import './css/entryPage.css'

const Resetpassword = () => {

    const [resetInfo, setResetInfo] = useState({
        password: '',
        repeatPassword: ''

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
        return resetInfo.password.length > 0 && resetInfo.repeatPassword.length > 0;
    }

    const submitLogin = (e) =>{
        e.preventDefault()
        setResetInfo({
        email: ''})
    }

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
                <h3>Reset Password</h3>
                
                <form >
                    <InputGroup>  
                        <Input name='password' value={resetInfo.password} onChange={handleInput} autoComplete='off' type="password" placeholder="Enter your new password" id="login-email" />
                    </InputGroup>
                    <InputGroup>  
                        <Input name='repeatPassword' value={resetInfo.repeatPassword} onChange={handleInput} autoComplete='off' type="password" placeholder="Confirm password" id="login-email" />
                    </InputGroup>

                    <Button type="submit"onClick={submitLogin} disabled={!validateForm()}>Reset Password</Button>
                   
                </form>
        
                    <Link to='/login'> Return to Login</Link> 
               
                
            </Card>
            </div>
        </>
    )
}

export default Resetpassword
