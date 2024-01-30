import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { LoadStripe, loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe('pk_test_51OMrFgFZFhrDlYoI2ZD3EgZIEg11EeI6k8B3BkAu0vfni5L04rXCfkWIFkdsWFla2nsQpeDQv9TWNWd3xxlRJniW00BWFG8GkT');

const StripeTest = () => {

  const options = {
    clientSecret: '{{CLIENT_SECRET}}',
  }

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  )
}

export default StripeTest