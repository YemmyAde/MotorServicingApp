import React from 'react'
import './css/Reviews.css'

function Reviews() {

    
    return (
        <div className='reviews'>
            <div className="reviews__item__info">
                <h5>Yemisi</h5> 
                <span>Team Leader, Motorify</span>
                <br/>    
                <br/>                     
                <i class="fas fa-quote-left"></i>
                <p>Car repair just got a whole lot more exciting</p>
            </div>
            <div className="reviews__item__info">
                <h5>Tobi</h5> 
                <span>Customer</span>
                <br/>    
                <br/>                        
                <i class="fas fa-quote-left"></i>
                <p>Amzazing service. 5 stars rating for me</p>
            </div>
            <div className="reviews__item__info">
                <h5>James</h5> 
                <span>Director, James International</span>
                <br/>    
                <br/>                       
                <i class="fas fa-quote-left"></i>
                <p>Beautiful Service. 10/10 👍🏽</p>
            </div>
            <div className="reviews__item__info">
                <h5>YT</h5> 
                <span>Customer</span>
                <br/>    
                <br/>                        
                <i class="fas fa-quote-left"></i>
                <p>Thanks for amping up the performance of my BMW, Motorify</p>
            </div>
            <div className="reviews__item__info">
                <h5>Abdullah Shehu</h5> 
                <span>CEO, Google </span>
                <br/>    
                <br/>                       
                <i class="fas fa-quote-left"></i>
                <p>
                    Brilliant service! Much cheaper than my local garage and without the nightmare of having to drop a car
                </p>
            </div>
            
        </div>
        
    )
}

export default Reviews
