import React from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import { 
  CardNumberElement, 
  injectStripe, 
  CardCVCElement, 
  CardExpiryElement } 
  from "react-stripe-elements"

function SubscribeModal({}) {
  const [open, setOpen] = React.useState(false);

  const onCancelHandler = (event) => {
    event.preventDefault();
    setOpen(false)
  }

  const onPaymentHandler = async (event) => {
    event.preventDefault();
    const successful = await onPayment(event)
    let stripeResponse = await stripe.createToken()
    debugger
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
      <Form data-cy="payment-form" onSubmit={onPaymentHandler}>
        <Form.Field data-cy="card-number">
          <label>Card Number</label>
         <CardNumberElement/>
        </Form.Field>
        <Form.Field data-cy="card-expiry">
          <label>Expiry Date</label>
          <CardExpiryElement />
        </Form.Field>

        <Form.Field data-cy="card-cvc">
          <label>CVC</label>
          <CardCVCElement />
        </Form.Field>

        <Modal.Actions>
          <Button color="black" onClick={onCancelHandler}>
            Nope
          </Button>
          <Button
            data-cy="payment-button"
            content="Confirm Payment"
            labelPosition="right"
            icon="checkmark"
            positive
          />
        </Modal.Actions>
      </Form>
    </Modal>
  );
}

export default injectStripe(SubscribeModal);
