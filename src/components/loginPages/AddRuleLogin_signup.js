import React from 'react'
import './AddRuleLogin.css'


const AddRuleLogin_signup = () => {
  return (
    <div className='container'>
      <h1>Rule Adder Register</h1>
      <hr />
      <form className='formcode'>
      <input className="email form-control form-control-lg" type="text" placeholder="Full Name" aria-label="full_name" />

        <input className="email form-control form-control-lg" type="email" placeholder="Email" aria-label="Email" />
        <input className="password form-control form-control-lg" type="password" placeholder="Password" aria-label="Password" />
        <button type='submit' className='submit_btn btn btn-outline-dark'>Register</button>
      </form>
    </div>
  )
}

export default AddRuleLogin_signup