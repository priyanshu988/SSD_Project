import React, { useState } from 'react'
import './AddRuleLogin.css'
import AddRuleLogin_login from './AddRuleLogin_login';
import AddRuleLogin_signup from './AddRuleLogin_signup';
import github from './assests/github.png';
import facebook from './assests/facebook.png';
import google from './assests/google.png';


const AddRuleLogin = () => {
  const [status1 ,setStatus] = useState("signup");
  return (
    <div className='body'>
      <h1>RULE EDITOR FRAMEWORK</h1>
      <hr className='line-top' />
      <div className='container form_area'>
        <div className='upper_part'>
          <button className='btn btn-outline-dark' onClick={() => setStatus("login")}>Login</button>
          <button className='btn btn-outline-dark' onClick={() => setStatus("signup")}>Register</button>
        </div>
        <hr className='line-form-top' />
        <div className='lower_part'>
          {status1 === "login" && <AddRuleLogin_login/> }
          {status1 === "signup"&& <AddRuleLogin_signup/> }
        </div>
        <hr className='line-form-bottom' />
        <div className='images'>
          <img src={github} className='image' />
          <img src={facebook} className='image' />
          <img src={google} className='image' />

        </div>
      </div>
    </div>
  )
}

export default AddRuleLogin