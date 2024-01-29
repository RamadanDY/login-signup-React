import React from 'react'
import './LoginSignup.css'/////this imports the css components from LoginSignup.css into this jsx
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import person_icon from '../Assets/person.png'
export const LoginSignup = () => {
  return (
    ////crreating the html code for our component
    <div className='container'>
        <div className="header">
            <div className="text">Sign-Up</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={person_icon} alt="" />
                <input type="text" placeholder='Name'/>
            </div>
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email id'/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password' />
            </div>
        </div>
        <div className="forgot-password">lost Password? <span>Click here</span></div>
        <div className="submit-container">
            <div className="submit">Sign Up</div>
            <div className="submit">Login</div>
        </div>

    </div>
  )
}


