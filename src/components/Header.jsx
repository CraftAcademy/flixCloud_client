import React, { Component } from 'react'
import RegisterModal from './RegisterModal'

class Header extends Component {
  render() {
    return (
      <div>
        <RegisterModal />
      </div>
    )
  }
}
export default Header



// import React, { Component } from 'react'
// import RegisterModal from './RegisterModal'

// class Header extends Component {
//   state = {
//     renderRegisterForm: false
//   };
//   render() {
//     const renderRegister = this.state.renderRegisterForm ? (
//       <RegisterModal />
//     ) : (
//       // <button 
//       //   data-cy="register-button"
//       //   onClick={() => this.setState({ renderRegisterForm: true })}
//       //   >
//       //   Register
//       // </button>
    
//     );
//     return (
//       renderRegister
//     )
//   }
// }
// export default Header;