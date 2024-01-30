import React from 'react'
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

const CheckoutForm = () => {

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmsParams: {
        return_url: "https://example.com/order/123/complete",
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {

    }
  }

  return (
    <for onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={!stripe}>Envoyer</button>
    </for>
  )
}

export default CheckoutForm;