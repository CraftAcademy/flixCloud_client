import React from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import {
  CardNumberElement,
  injectStripe,
  CardCVCElement,
  CardExpiryElement,
} from "react-stripe-elements";
import axios from "axios";

function SubscribeModal({ onSubscribe, stripe }) {
  const [open, setOpen] = React.useState(false);

  const onCancelHandler = (event) => {
    event.preventDefault();
    setOpen(false);
  };

  const performPayment = async (stripeToken) => {
    let headers = JSON.parse(localStorage.getItem("credentials"));
    let response = await axios.post(
      "/subscriptions",
      { stripeToken: stripeToken },
      { headers: headers }
    );
    onSubscribe(response.data.paid ? response.data.message : "Whoops!");
    setOpen(false);
  };

  const onPaymentHandler = async (event) => {
    event.preventDefault();
    let stripeResponse = await stripe.createToken();
    stripeResponse.token && performPayment(stripeResponse.token.id);
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button
          data-cy="subscribe-button" color="teal"
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
          <CardNumberElement />
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
