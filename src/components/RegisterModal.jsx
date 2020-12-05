import React from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'

function RegisterModal() {

  const [open, setOpen] = React.useState(false)
  // const [authenticated, setAuthenticated] = React.useState(false)
  // const toggleAuthenticated 

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      // authenticated={authenticated}
      trigger={<Button
        data-cy="register-button"
        onClick={() => setOpen({ renderRegisterForm: true })}
      >Register</Button>}
    >
      <Modal.Header>Fill in form to register</Modal.Header>
      <Form data-cy="register-form">
        <Form.Field>
          <label className="nickname">Choose a nickname</label>
          <input data-cy="nickname"
            type="text"
            placeholder="Nickname" />
        </Form.Field>

        <Form.Field>
          <label className="email">Email</label>
          <input data-cy="email"
            type="text"
            placeholder="Email" />
        </Form.Field>

        <Form.Field>
          <label className="password">Password</label>
          <input data-cy="password"
            type="password"
            placeholder="password" />
        </Form.Field>

        <Form.Field>
          <label className="password-confirmation">Repeat password</label>
          <input data-cy="password-confirmation"
            type="password"
            placeholder="Repeat your password" />
        </Form.Field>
      </Form>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          data-cy="signup-button"
          content="Yes please!"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          // onClick={()=> setAuthenticated(true)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default RegisterModal;
