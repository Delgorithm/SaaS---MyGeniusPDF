const express = require('express');
const app = express();

const stripe = require('stripe')('pk_test_51OMrFgFZFhrDlYoI2ZD3EgZIEg11EeI6k8B3BkAu0vfni5L04rXCfkWIFkdsWFla2nsQpeDQv9TWNWd3xxlRJniW00BWFG8GkT');

app.use(express.static('public'));
app.use(express.json());

// const calculateOrderAmount = (items) => {
//     // Replace this constant with a calculation of the order's amount
//     // Calculate the order total on the server to prevent
//     // people from directly manipulating the amount on the client
//     return 1400;
//   };

app.post('create-payment-intent', async (req, res) => {
    const { items } = req.body;

    // Création d'un PaymentIntent avec la commande, le montant et la devise
    const paymentIntent = await stripe.paymentIntent.create({
        amount: calculateOrderaMount(items),
        currency: 'eur',
        autmatic_payment_methods: {
            enabled: true,
        };
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
    })

})

app.listen(5173, () => console.log("Node server listening on port 5173!"));