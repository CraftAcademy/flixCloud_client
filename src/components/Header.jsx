import React, { Component } from 'react'
import RegisterForm from './RegisterForm'

class Header extends Component {
  state = {
    renderRegisterForm: false
  };
  render() {
    const renderRegister = this.state.renderRegisterForm ? (
      <RegisterForm />
    ) : (
      <button 
        data-cy="register-button"
        onClick={() => this.setState({ renderRegisterForm: true })}
        >
        Register
      </button>
    
    );
    return (
      renderRegister
    )
  }
}
export default Header;