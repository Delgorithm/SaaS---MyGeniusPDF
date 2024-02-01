require("dotenv").config()
const admin = require("firebase-admin");
const serviceAccount = require('./serviceAccountKey.json');
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const moment = require("moment");
const port = 5173;

app.use(express.json())
app.use(bodyParser.json())

const [pro, premium] = ['price_1OXg8HFZFhrDlYoIQHEda76l', 'price_1OXg9FFZFhrDlYoI872ZQau4'];

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://saas-mygeniuspdf-default-rtdb.firebaseio.com"
  });

app.use(
    cors({
        origin:"http://localhost:5173"
    })
)

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);


// --- Subscription part ---

const stripeSession = async(plan) => {
    try {
        const session = await stripe.checkout.sessions.create({
            mode: "subscription",
            payment_method_types: ["card"],
            line_item: [
                {
                    price: plan,
                    quantity: 1
                },
            ],
            sucess_url: "http://localhost:5173/success",
            cancel_url: "http://localhost:5173/"
        });
        return session;
    } catch(e) {
        return e;
    }
};

app.post('/api/v1/create-subscription-checkout-session', async(req, res) => {
    const {plan, customerId} = req.body;
    let planId = null;
    if(plan == 9.99) planId = pro;
    else if (plan == 29.99) planId = premium;

    try{
        const session = await stripeSession(planId);
        const user = await admin.auth().getUser(customerId);

        await admin.database().ref('users').child(user.uid).update({
            subscription: {
                sessionId: session.id
            }
        })
        console.log(session)
        return res.json({session})

    } catch(error) {
        res.send(error)
    }
});

app.listen(port, () => {
    console.log(`Now listening on ${port}`);
})