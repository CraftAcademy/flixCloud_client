import React, { Component } from 'react'
import { Button } from "semantic-ui-react";

class SubscribeButton extends Component {
  render() {
    return (
      <div>
        <Button data-cy="subscribe-button">Subscribe</Button>
      </div>
    )
  }
}
export default SubscribeButton