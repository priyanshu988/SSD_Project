import React from 'react'

import './AddRuleLogin.css'


const AddRuleLogin_login = () => {
  return (
    <div className='container'>
      <h1>Login</h1>
      <hr />
      <form className='formcode'>
        <input className="email form-control form-control-lg" type="email" placeholder="Email" aria-label="Email" />
        <input className="password form-control form-control-lg" type="password" placeholder="Password" aria-label="Password" />
        <button type='submit' className='submit_btn btn btn-outline-dark'>Login</button>
      </form>
    </div>
  )
}

export default AddRuleLogin_login