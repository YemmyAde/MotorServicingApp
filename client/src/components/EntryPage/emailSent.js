import React, {useState, useEffect} from 'react'
import Button from './Button'
import Card from './Card'
import Input from './Input'    
import InputGroup from './InputGroup'
import { PageHeader } from './entryPage'


const EmailSent = () => {


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
                <p> We have sent you an e-mail with instructions on how to reset your password. Check your inbox and click on the link provided.</p>
                
            </Card>
            </div>
        </>
    )
}

export default EmailSent
