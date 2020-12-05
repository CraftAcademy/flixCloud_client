import React, { Component } from 'react'

class RegisterForm extends Component {
  render() {
    return (
      <form data-cy="register-form">
        <label className="nickname">Choose a nickname</label>
        <input 
          data-cy="nickname"
          type="text"
          placeholder="Nickname"
        ></input>
        <label className="email">Email</label>
        <input 
          data-cy="email" 
          type="email" 
          placeholder="Email" 
        ></input>
        <label className="password">Password</label>
        <input 
          data-cy="password"
          type="password"
          placeholder="Password"
        ></input>
        <label className="password-confirmation">Password Confirmation</label>
        <input 
          data-cy="password-confirmation"
          type="password"
          placeholder="Password Confirmation"
        ></input>
        <button data-cy="signup-button"
        >
          Sign Up
        </button>
      </form>  
    )
  }
}
export default RegisterForm;