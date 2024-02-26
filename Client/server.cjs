// server.js
//
// Use this sample code to handle webhook events in your integration.
//
// 1) Paste this code into a new file (server.js)
//
// 2) Install dependencies
//   npm install stripe
//   npm install express
//
// 3) Run the server on http://localhost:4242
//   node server.js

// The library needs to be configured with your account's secret key.
// Ensure the key is kept out of any version control system you might be using.
const stripe = require('stripe')('sk_test_51OMrFgFZFhrDlYoIvMeLH090tbhvZUo4GXrBtbAtoqraaiFlxhg9EEve7r5fmXeMwywPxWxyREimH8rtNQwpvYXk00vLpygjAJ');
const express = require('express');
const app = express();


// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = "whsec_4342584709521d22fc2b46bb5f8be06064471e071875ff18c4601c2bd56573cc";

app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.async_payment_failed':
      const checkoutSessionAsyncPaymentFailed = event.data.object;
      console.log(checkoutSessionAsyncPaymentFailed);
      // Then define and call a function to handle the event checkout.session.async_payment_failed
      break;
    case 'checkout.session.async_payment_succeeded':
      const checkoutSessionAsyncPaymentSucceeded = event.data.object;
      console.log(checkoutSessionAsyncPaymentSucceeded);
      // Then define and call a function to handle the event checkout.session.async_payment_succeeded
      break;
    case 'checkout.session.completed':
      const checkoutSessionCompleted = event.data.object;
      console.log(checkoutSessionCompleted);
      // Then define and call a function to handle the event checkout.session.completed
      break;
    case 'customer.subscription.created':
      const customerSubscriptionCreated = event.data.object;
      console.log(customerSubscriptionCreated);
      // Then define and call a function to handle the event customer.subscription.created
      break;
    case 'customer.subscription.deleted':
      const customerSubscriptionDeleted = event.data.object;
      console.log(customerSubscriptionDeleted);
      // Then define and call a function to handle the event customer.subscription.deleted
      break;
    case 'customer.subscription.updated':
      const customerSubscriptionUpdated = event.data.object;
      console.log(customerSubscriptionUpdated);
      // Then define and call a function to handle the event customer.subscription.updated
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
});

app.listen(5173, () => console.log('Running on port 5173'));