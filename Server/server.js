// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require('stripe')('sk_test_51OMrFgFZFhrDlYoIvMeLH090tbhvZUo4GXrBtbAtoqraaiFlxhg9EEve7r5fmXeMwywPxWxyREimH8rtNQwpvYXk00vLpygjAJ');

const session = await stripe.checkout.sessions.create({
  mode: 'subscription',
  line_items: [
    {
      price: '{{PRICE_ID}}',
      quantity: 1,
    },
  ],
  ui_mode: 'embedded',
  return_url: 'https://example.com/checkout/return?session_id={CHECKOUT_SESSION_ID}',
});