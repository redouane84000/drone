const { db, stripe } = require('../config/db');
const { createContact } = require('../models/model');

const createPaymentIntent = async (req, res) => {
    const { amountInEuros } = req.body;

    if (!amountInEuros || isNaN(amountInEuros)) {
        return res.status(400).json({ error: 'Amount is required' });
    }
    const amount = Math.round(amountInEuros * 100);

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'eur',
            payment_method_types: ['card'],
        });

        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const submitContactForm = (req, res) => {
  const { nom, prenom, email, message } = req.body;
 console.log(req.body);
 console.log(nom, prenom, email, message);
 console.log(Date.now());
  if (!nom || !prenom || !email || !message) {
    return res.status(400).json({ error: 'Tous les champs sont obligatoires.' });
  }

  createContact({ nom, prenom, email, message }, (err, result) => {
    if (err) {
        console.log("erreur insertion mysql", err);
      console.error('Erreur insertion contact :', err);
      return res.status(500).json({ error: 'Erreur serveur.' });
    }

    res.status(201).json({ message: 'Message envoyé avec succès.', id: result.insertId });
  });
};

module.exports = {
  createPaymentIntent,
  submitContactForm
};
