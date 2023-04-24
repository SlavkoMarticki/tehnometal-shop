const express = require('express')
const cors = require('cors')
require('dotenv').config()
const stripe = require('stripe')("sk_test_51KG44FAmDHS28oTWy5kLCh1sICMAQkqH91wX0VQI2EiPDbu06R2PjMwecK2pKgqZa9IvjIDj1Lbv4v6eIINSykqB00XK1RTDRs")
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
})

app.post('/checkout', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: req.body.lineItems,
      mode: 'payment',
      payment_method_types: ['card'],
      shipping_address_collection: {
        allowed_countries: ['RS', 'BA', 'ME', 'HR', 'SI'],
      },
      billing_address_collection: "required",
      phone_number_collection: {
        "enabled": true
      },
      success_url: 'https://tehnometal-shop-7vmq61m0m-dragansub.vercel.app/cart/successful',
      cancel_url: 'https://tehnometal-shop-7vmq61m0m-dragansub.vercel.app/declined',
    })

    return res.status(201).json(session)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
});

app.get('/payment-data', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
    const paymentIntent = await stripe.paymentIntents.retrieve(session.payment_intent);
    const paymentData = {
      amount: paymentIntent.amount / 100, // convert amount from cents to dollars
      date: new Date(paymentIntent.created * 1000), // convert unix timestamp to date
      status: paymentIntent.status,
      paymentMethod: paymentIntent.payment_method_types,
      shippingAddress: session.shipping_details.address,
      name: session.shipping_details.name,
      billingAddress: paymentIntent.shipping.address,
      id: paymentIntent.id,
      email: session.customer_details.email
    };

    return res.status(200).json(paymentData);
  } catch (error) {
    console.log(error);
    res.status(500).send('Something went wrong!');
  }
});


// starting server
const port = process.env.PORT || 5000
app.listen(port, () => console.log('Server is running successfully'))