import React from "react";
import { Button, Modal, Form } from "semantic-ui-react";

function SubscribeModal({onAuthenticate}) {
  const [open, setOpen] = React.useState(false);

  const onCancelHandler = (event) => {
    event.preventDefault();
    setOpen(false)
  }

  const onAuthenticateHandler = async (event) => {
    event.preventDefault();
    const successful = await onAuthenticate(event)
    setOpen(!successful)
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button
          data-cy="subscribe-button"
          onClick={() => setOpen({ renderRegisterForm: true })}
        >
          Subscribe
        </Button>
      }
      >
  
      <Modal.Header>Fill in your card information</Modal.Header>
      <Form data-cy="payment-form" onSubmit={onAuthenticateHandler}>
        <Form.Field>
          <label>Card Number</label>
          <input name="card-number" data-cy="card-number" type="number" placeholder="Card Number" />
        </Form.Field>
        <Form.Field>
          <label>Expiry Date</label>
          <input name="expiry-date" data-cy="expiry-date" type="number" placeholder="Expiry Date" />
        </Form.Field>

        <Form.Field>
          <label>CVC</label>
          <input name="cvc" data-cy="cvc" type="number" placeholder="CVC" />
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

export default SubscribeModal;
