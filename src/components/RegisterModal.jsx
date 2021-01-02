import React from "react";
import { Button, Modal, Form } from "semantic-ui-react";

function RegisterModal({ onAuthenticate }) {
  const [open, setOpen] = React.useState(false);

  const onCancelHandler = (event) => {
    event.preventDefault();
    setOpen(false);
  };

  const onAuthenticateHandler = async (event) => {
    event.preventDefault();
    const successful = await onAuthenticate(event);
    setOpen(!successful);
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button
          color="teal"
          id="button"
          data-cy="register-button"
          onClick={() => setOpen({ renderRegisterForm: true })}
        >
          Register
        </Button>
      }
    >
      <Modal.Header>Fill in form to register</Modal.Header>
      <Form data-cy="register-form" onSubmit={onAuthenticateHandler}>
        <Form.Field>
          <label>Choose a nickname</label>
          <input
            name="nickname"
            data-cy="nickname"
            type="text"
            placeholder="Nickname"
          />
        </Form.Field>

        <Form.Field>
          <label className="email">Email</label>
          <input name="email" data-cy="email" type="text" placeholder="Email" />
        </Form.Field>

        <Form.Field>
          <label className="password">Password</label>
          <input
            name="password"
            data-cy="password"
            type="password"
            placeholder="password"
          />
        </Form.Field>

        <Form.Field>
          <label className="password-confirmation">Repeat password</label>
          <input
            name="password_confirmation"
            data-cy="password-confirmation"
            type="password"
            placeholder="Repeat your password"
          />
        </Form.Field>

        <Modal.Actions>
          <Button color="black" onClick={onCancelHandler}>
            Nope
          </Button>
          <Button
            data-cy="signup-button"
            content="Yes please!"
            labelPosition="right"
            icon="checkmark"
            positive
          />
        </Modal.Actions>
      </Form>
    </Modal>
  );
}

export default RegisterModal;
