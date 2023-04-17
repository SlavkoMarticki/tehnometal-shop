const express = require('express')
const cors = require('cors')
const stripe = require('stripe')("sk_test_51KG44FAmDHS28oTWy5kLCh1sICMAQkqH91wX0VQI2EiPDbu06R2PjMwecK2pKgqZa9IvjIDj1Lbv4v6eIINSykqB00XK1RTDRs")
const app = express()
const bodyParser = require('body-parser');
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

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
      success_url: 'http://localhost:3000/cart/successful?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:3000',
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
      billingAddress: paymentIntent.shipping.address
    };

    return res.status(200).json(paymentData);
  } catch (error) {
    console.log(error);
    res.status(500).send('Something went wrong!');
  }
});

// Endpoint to handle the webhook notification
app.post('/webhook', bodyParser.raw({ type: 'application/json' }), (req, res) => {
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (error) {
    console.log(error);
    return res.status(400).send('Webhook Error');
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    // Update your database or perform any other necessary actions
    console.log(`Payment received: ${session.amount_total / 100} ${session.currency.toUpperCase()}`);
  }

  res.json({ received: true });
});


// starting server
const port = process.env.PORT || 5000
app.listen(port, () => console.log('Server is running successfully'))