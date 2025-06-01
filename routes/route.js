const express = require('express');
const router = express.Router();
const { createPaymentIntent } = require('../controllers/controller');
const { submitContactForm } = require('../controllers/controller');

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.post('/create-payment-intent', createPaymentIntent);
router.post('/contact', submitContactForm);

module.exports = router;